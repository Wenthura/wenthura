"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  ContactShadows,
  Environment,
  MeshDistortMaterial,
  Sparkles as DreiSparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { DioramaCanvas, useDioramaProgress } from "./DioramaCanvas";

/* ============================================================
   NENA AI â€” Glowing brain-like core + orbiting node constellation
              with animated synapse pulses
   ============================================================ */

/* Central "brain" â€” distorted icosphere with wireframe overlay */
function BrainCore() {
  const group = useRef<THREE.Group>(null);
  const wire = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);
  const progress = useDioramaProgress();

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    const p = progress?.current?.value ?? 0;
    group.current.rotation.y = t * 0.2;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.15;
    const scale = 1 + p * 0.15;
    group.current.scale.setScalar(scale);
    if (wire.current) wire.current.rotation.y = -t * 0.3;
    if (glow.current) {
      const s = 1.35 + Math.sin(t * 2.2) * 0.05;
      glow.current.scale.setScalar(s);
      (glow.current.material as THREE.MeshBasicMaterial).opacity =
        0.18 + Math.sin(t * 2.0) * 0.06;
    }
  });

  return (
    <group ref={group}>
      {/* inner glow halo */}
      <mesh ref={glow}>
        <sphereGeometry args={[0.95, 32, 32]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.22} />
      </mesh>

      {/* distorted core */}
      <mesh>
        <icosahedronGeometry args={[0.85, 5]} />
        <MeshDistortMaterial
          color="#2563EB"
          emissive="#1E40AF"
          emissiveIntensity={0.35}
          distort={0.45}
          speed={2.2}
          roughness={0.15}
          metalness={0.4}
        />
      </mesh>

      {/* crisp wireframe shell */}
      <mesh ref={wire}>
        <icosahedronGeometry args={[0.92, 2]} />
        <meshBasicMaterial color="#60A5FA" wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

/* Orbiting nodes with animated synapse connections */
function Synapses() {
  const count = 10;
  const orbits = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        radius: 1.7 + Math.random() * 1.3,
        tilt: (Math.random() - 0.5) * Math.PI,
        phase: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.3 * (Math.random() < 0.5 ? -1 : 1),
        size: 0.06 + Math.random() * 0.08,
        color: i % 3 === 0 ? "#F97316" : "#2563EB",
      })),
    []
  );

  const nodeRefs = useRef<THREE.Mesh[]>([]);
  const lineRefs = useRef<THREE.Line[]>([]);
  const pulseRefs = useRef<THREE.Mesh[]>([]);

  // Build line objects once
  const lineObjects = useMemo(() => {
    return orbits.map(() => {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(6); // 2 points Ã— xyz
      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
      );
      const mat = new THREE.LineBasicMaterial({
        color: "#60A5FA",
        transparent: true,
        opacity: 0.35,
      });
      return new THREE.Line(geo, mat);
    });
  }, [orbits]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    orbits.forEach((o, i) => {
      const a = o.phase + t * o.speed;
      const x = Math.cos(a) * o.radius;
      const z = Math.sin(a) * o.radius;
      const y = Math.sin(a * 2 + o.tilt) * 0.6 + Math.cos(o.tilt) * 0.2;

      const node = nodeRefs.current[i];
      if (node) {
        node.position.set(x, y, z);
        const pulse = 1 + Math.sin(t * 2.5 + i) * 0.15;
        node.scale.setScalar(pulse);
      }

      // update line from origin to node
      const line = lineObjects[i];
      const arr = (line.geometry.attributes.position as THREE.BufferAttribute)
        .array as Float32Array;
      arr[0] = 0;
      arr[1] = 0;
      arr[2] = 0;
      arr[3] = x;
      arr[4] = y;
      arr[5] = z;
      (line.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      // modulate opacity based on firing pattern
      const fire = (Math.sin(t * 3 + i * 1.7) + 1) * 0.5;
      (line.material as THREE.LineBasicMaterial).opacity = 0.12 + fire * 0.55;
      (line.material as THREE.LineBasicMaterial).color.set(
        fire > 0.6 ? "#F97316" : "#60A5FA"
      );

      // traveling pulse along this line
      const pulse = pulseRefs.current[i];
      if (pulse) {
        const phase = ((t * 1.2 + i * 0.4) % 1);
        pulse.position.set(x * phase, y * phase, z * phase);
        const s = 0.04 + Math.sin(phase * Math.PI) * 0.08;
        pulse.scale.setScalar(s);
        (pulse.material as THREE.MeshBasicMaterial).opacity =
          Math.sin(phase * Math.PI);
      }
    });
  });

  return (
    <group>
      {orbits.map((o, i) => (
        <mesh
          key={`n-${i}`}
          ref={(m) => {
            if (m) nodeRefs.current[i] = m;
          }}
        >
          <sphereGeometry args={[o.size, 16, 16]} />
          <meshStandardMaterial
            color={o.color}
            emissive={o.color}
            emissiveIntensity={0.85}
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>
      ))}

      {lineObjects.map((l, i) => (
        <primitive
          key={`l-${i}`}
          object={l}
          ref={(el: THREE.Line) => {
            if (el) lineRefs.current[i] = el;
          }}
        />
      ))}

      {orbits.map((_, i) => (
        <mesh
          key={`p-${i}`}
          ref={(m) => {
            if (m) pulseRefs.current[i] = m;
          }}
        >
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial
            color="#FBBF24"
            transparent
            opacity={0.9}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* Outer rotating rings for extra depth */
function OuterRings() {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  const r3 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (r1.current) {
      r1.current.rotation.x = t * 0.15;
      r1.current.rotation.y = t * 0.2;
    }
    if (r2.current) {
      r2.current.rotation.z = -t * 0.22;
      r2.current.rotation.x = t * 0.1;
    }
    if (r3.current) {
      r3.current.rotation.y = t * 0.3;
      r3.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group>
      <mesh ref={r1}>
        <torusGeometry args={[2.5, 0.008, 16, 100]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.35} />
      </mesh>
      <mesh ref={r2}>
        <torusGeometry args={[2.9, 0.006, 16, 120]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.25} />
      </mesh>
      <mesh ref={r3}>
        <torusGeometry args={[2.2, 0.005, 16, 80]} />
        <meshBasicMaterial color="#F97316" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 2]} intensity={1.8} color="#2563EB" />
      <pointLight position={[-3, -2, -2]} intensity={1.2} color="#F97316" />
      <directionalLight position={[0, 4, 4]} intensity={0.5} />

      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.2}>
        <BrainCore />
      </Float>

      <Synapses />
      <OuterRings />

      <DreiSparkles
        count={40}
        scale={[6, 4, 6]}
        size={2}
        speed={0.2}
        color="#60A5FA"
        opacity={0.5}
      />

      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.25}
        scale={9}
        blur={3}
        far={4}
      />
      <Environment preset="night" environmentIntensity={0.3} />
    </>
  );
}

export function NenaAIDiorama({ className }: { className?: string }) {
  return (
    <DioramaCanvas
      className={className}
      cameraPosition={[0, 0.3, 5.2]}
      cameraFov={40}
    >
      <SceneContents />
    </DioramaCanvas>
  );
}
