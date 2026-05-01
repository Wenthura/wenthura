"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { PALETTE } from "@/lib/three/palette";
import { useSceneGate } from "@/lib/three/useGate";

/* ----- BFSI: floating credit cards over isometric bank plinth ----- */
function BfsiScene({ active }: { active: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    const t = clock.getElapsedTime();
    g.current.rotation.y = t * 0.2;
    const target = active ? 1 : 0;
    g.current.scale.lerp(new THREE.Vector3(target, target, target), 0.08);
  });
  return (
    <group ref={g} scale={0}>
      {/* Plinth */}
      <RoundedBox args={[2.4, 0.3, 2.4]} radius={0.06} position={[0, -1.2, 0]}>
        <meshPhysicalMaterial color="#071528" metalness={0.5} roughness={0.5} />
      </RoundedBox>
      {/* Columns */}
      {[-0.7, 0, 0.7].map((x) => (
        <mesh key={x} position={[x, -0.55, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 1.0, 24]} />
          <meshPhysicalMaterial color="#0A1E38" metalness={0.3} roughness={0.4} />
        </mesh>
      ))}
      {/* Roof */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[1.9, 0.08, 0.8]} />
        <meshPhysicalMaterial color={PALETTE.glow} metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Floating cards */}
      {[0, 1, 2].map((i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <group
            position={[
              Math.cos((i / 3) * Math.PI * 2) * 1.5,
              0.6 + i * 0.25,
              Math.sin((i / 3) * Math.PI * 2) * 1.5,
            ]}
            rotation={[0.1, i, 0]}
          >
            <RoundedBox args={[0.9, 0.56, 0.04]} radius={0.04}>
              <meshPhysicalMaterial color="#04101C" metalness={0.85} roughness={0.15} />
            </RoundedBox>
            <mesh position={[0, -0.2, 0.025]}>
              <planeGeometry args={[0.85, 0.03]} />
              <meshBasicMaterial color={PALETTE.glow} />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
}

/* ----- Retail: rising product boxes + shopping bag silhouette ----- */
function RetailScene({ active }: { active: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    const t = clock.getElapsedTime();
    g.current.rotation.y = t * 0.15;
    const target = active ? 1 : 0;
    g.current.scale.lerp(new THREE.Vector3(target, target, target), 0.08);
  });
  const boxes = Array.from({ length: 18 });
  return (
    <group ref={g} scale={0}>
      {boxes.map((_, i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        const x = (col - 2.5) * 0.5;
        const z = (row - 1) * 0.5;
        return (
          <Float key={i} speed={1 + (i % 3) * 0.3} floatIntensity={0.5} rotationIntensity={0.2}>
            <mesh position={[x, -0.4 + ((i * 37) % 10) * 0.08, z]}>
              <boxGeometry args={[0.35, 0.35, 0.35]} />
              <meshPhysicalMaterial
                color={i % 3 === 0 ? PALETTE.glow : "#BFDBFE"}
                metalness={0.4}
                roughness={0.5}
              />
            </mesh>
          </Float>
        );
      })}
      {/* Central bag-like shape */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[0.9, 0.9, 0.5]} />
        <meshPhysicalMaterial color={PALETTE.ember} metalness={0.3} roughness={0.6} />
      </mesh>
      {/* Handles */}
      <mesh position={[-0.3, 1.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.12, 0.03, 10, 24, Math.PI]} />
        <meshPhysicalMaterial color={PALETTE.glow} metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0.3, 1.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.12, 0.03, 10, 24, Math.PI]} />
        <meshPhysicalMaterial color={PALETTE.glow} metalness={0.9} roughness={0.3} />
      </mesh>
    </group>
  );
}

/* ----- Manufacturing: rotating gear cluster ----- */
function Gear({
  position,
  teeth = 12,
  radius = 1,
  thickness = 0.2,
  speed = 1,
  color = PALETTE.ink50,
}: {
  position: [number, number, number];
  teeth?: number;
  radius?: number;
  thickness?: number;
  speed?: number;
  color?: string;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * speed;
  });
  const toothArray = Array.from({ length: teeth });
  return (
    <group ref={ref} position={position}>
      <mesh>
        <cylinderGeometry args={[radius, radius, thickness, 48]} />
        <meshPhysicalMaterial color={color} metalness={0.85} roughness={0.3} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[radius * 0.25, radius * 0.25, thickness * 1.2, 24]} />
        <meshPhysicalMaterial color={PALETTE.glow} metalness={1} roughness={0.2} />
      </mesh>
      {toothArray.map((_, i) => {
        const a = (i / teeth) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(a) * radius, Math.sin(a) * radius, 0]}
            rotation={[0, 0, a]}
          >
            <boxGeometry args={[radius * 0.25, radius * 0.18, thickness]} />
            <meshPhysicalMaterial color={color} metalness={0.85} roughness={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

function ManufacturingScene({ active }: { active: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!g.current) return;
    const target = active ? 1 : 0;
    g.current.scale.lerp(new THREE.Vector3(target, target, target), 0.08);
  });
  return (
    <group ref={g} scale={0} rotation={[0.3, 0, 0]}>
      <Gear position={[0, 0, 0]} radius={1} teeth={14} speed={0.6} color="#0F2856" />
      <Gear position={[1.55, 0.55, 0]} radius={0.55} teeth={9} speed={-1.1} color={PALETTE.glow} />
      <Gear position={[-1.4, -0.6, 0.1]} radius={0.7} teeth={11} speed={-0.85} color="#1D4ED8" />
      <Gear position={[0.2, -1.5, -0.2]} radius={0.45} teeth={8} speed={1.3} color={PALETTE.glowSoft} />
    </group>
  );
}

export function IndustriesScene({ active }: { active: number }) {
  const enabled = useSceneGate(1024);
  if (!enabled) return null;
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.5, 5.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 5, 6]} intensity={1.0} color="#DBEAFE" />
          <directionalLight position={[-5, -2, -3]} intensity={0.3} color={PALETTE.glowSoft} />
          <pointLight position={[0, 0, 3]} intensity={1.0} color={PALETTE.glow} />
          <BfsiScene active={active === 0} />
          <RetailScene active={active === 1} />
          <ManufacturingScene active={active === 2} />

        </Suspense>
      </Canvas>
    </div>
  );
}
