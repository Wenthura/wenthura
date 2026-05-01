"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { PALETTE } from "@/lib/three/palette";
import { useSceneGate } from "@/lib/three/useGate";

const RADIUS = 1.6;

function latLonToVec3(latDeg: number, lonDeg: number, r = RADIUS) {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  return new THREE.Vector3(
    r * Math.cos(lat) * Math.cos(lon),
    r * Math.sin(lat),
    r * Math.cos(lat) * Math.sin(lon)
  );
}

/** Great-circle arc between two surface points. */
function buildArc(from: THREE.Vector3, to: THREE.Vector3, segments = 64) {
  const pts: THREE.Vector3[] = [];
  const maxLift = 0.6 + from.distanceTo(to) * 0.25;
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = new THREE.Vector3().lerpVectors(from, to, t);
    // Lift by sine so endpoints touch surface
    const lift = Math.sin(t * Math.PI) * maxLift;
    p.normalize().multiplyScalar(RADIUS + lift);
    pts.push(p);
  }
  return pts;
}

function Arcs() {
  const routes = useMemo(() => {
    const cities: [number, number][] = [
      [6.9, 79.85], // Colombo
      [51.5, -0.12], // London
      [40.7, -74.0], // New York
      [1.35, 103.8], // Singapore
      [-33.87, 151.2], // Sydney
      [35.68, 139.69], // Tokyo
      [25.2, 55.27], // Dubai
      [52.52, 13.4], // Berlin
    ];
    const list: { from: THREE.Vector3; to: THREE.Vector3; offset: number }[] = [];
    for (let i = 0; i < cities.length; i++) {
      const next = (i + 1 + (i % 2)) % cities.length;
      list.push({
        from: latLonToVec3(cities[i][0], cities[i][1]),
        to: latLonToVec3(cities[next][0], cities[next][1]),
        offset: Math.random(),
      });
    }
    return list;
  }, []);

  return (
    <group>
      {routes.map((r, i) => (
        <Arc key={i} {...r} />
      ))}
      {routes.map((r, i) => (
        <group key={`pts-${i}`}>
          <mesh position={r.from}>
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshBasicMaterial color={PALETTE.glow} />
          </mesh>
          <mesh position={r.to}>
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshBasicMaterial color={PALETTE.glow} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Arc({
  from,
  to,
  offset,
}: {
  from: THREE.Vector3;
  to: THREE.Vector3;
  offset: number;
}) {
  const pts = useMemo(() => buildArc(from, to, 64), [from, to]);
  const line = useMemo(() => {
    const geom = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(PALETTE.glow),
      transparent: true,
      opacity: 0.5,
    });
    return new THREE.Line(geom, mat);
  }, [pts]);

  // Animated head marker that travels along the arc
  const head = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * 0.2 + offset) % 1;
    if (head.current) {
      const idx = Math.floor(t * (pts.length - 1));
      head.current.position.copy(pts[idx]);
    }
    const mat = line.material as THREE.LineBasicMaterial;
    mat.opacity = 0.35 + 0.25 * Math.sin(clock.getElapsedTime() + offset * 6);
  });

  return (
    <group>
      <primitive object={line} />
      <mesh ref={head}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshBasicMaterial color={PALETTE.glowSoft} />
      </mesh>
    </group>
  );
}

function Globe() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock, pointer }) => {
    if (!g.current) return;
    const t = clock.getElapsedTime();
    g.current.rotation.y = t * 0.08 + pointer.x * 0.3;
    g.current.rotation.x = -0.1 + pointer.y * 0.15;
  });
  return (
    <group ref={g}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.98, 48, 48]} />
        <meshBasicMaterial color="#04101C" transparent opacity={0.90} />
      </mesh>
      {/* Wireframe */}
      <mesh>
        <sphereGeometry args={[RADIUS, 32, 24]} />
        <meshBasicMaterial
          color={PALETTE.glow}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      {/* Outer faint shell */}
      <mesh>
        <sphereGeometry args={[RADIUS * 1.15, 16, 12]} />
        <meshBasicMaterial
          color={PALETTE.glowSoft}
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
      <Arcs />
    </group>
  );
}

export function GlobeScene() {
  const enabled = useSceneGate(768);
  if (!enabled) return null;
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.3, 4.4], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[3, 2, 4]} intensity={1.2} color={PALETTE.glow} />
          <Globe />

        </Suspense>
      </Canvas>
    </div>
  );
}
