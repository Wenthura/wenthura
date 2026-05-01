"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { PALETTE } from "@/lib/three/palette";
import { useSceneGate } from "@/lib/three/useGate";

function Rings() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    const t = clock.getElapsedTime();
    g.current.rotation.y = t * 0.25;
    g.current.rotation.x = Math.sin(t * 0.3) * 0.15;
  });
  return (
    <group ref={g}>
      {[2.2, 2.8, 3.5, 4.2].map((r, i) => (
        <mesh key={r} rotation={[Math.PI / 2 + i * 0.2, i * 0.3, 0]}>
          <torusGeometry args={[r, 0.012, 12, 180]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? PALETTE.glow : PALETTE.ember}
            transparent
            opacity={0.25 - i * 0.04}
          />
        </mesh>
      ))}
      {Array.from({ length: 14 }).map((_, i) => {
        const a = (i / 14) * Math.PI * 2;
        const r = 3.2 + (i % 3) * 0.4;
        return (
          <mesh
            key={i}
            position={[Math.cos(a) * r, Math.sin(a) * r, (i % 2) * 0.4]}
          >
            <cylinderGeometry args={[0.06, 0.06, 0.015, 24]} />
            <meshPhysicalMaterial
              color={PALETTE.glow}
              metalness={1}
              roughness={0.3}
              emissive={PALETTE.glowSoft}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function StatsScene() {
  const enabled = useSceneGate(768);
  if (!enabled) return null;
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 0, 4]} color={PALETTE.glow} intensity={0.8} />
          <Rings />

        </Suspense>
      </Canvas>
    </div>
  );
}
