"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { PALETTE } from "@/lib/three/palette";
import { useSceneGate } from "@/lib/three/useGate";

/**
 * Orbit of beveled cards + toroidal rings behind the Solutions Rail.
 * Scroll progress (0..1) drives rotation speed and camera dolly.
 */
function Orbit({ progress }: { progress: () => number }) {
  const group = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const p = progress();
    if (group.current) {
      group.current.rotation.y = t * 0.08 + p * Math.PI * 1.6;
      group.current.rotation.x = -0.25 + Math.sin(t * 0.3) * 0.05;
    }
    if (ring1.current) ring1.current.rotation.z = t * 0.3;
    if (ring2.current) ring2.current.rotation.z = -t * 0.2;
  });

  const cards = Array.from({ length: 8 });
  const radius = 3.2;

  return (
    <group ref={group}>
      {cards.map((_, i) => {
        const a = (i / cards.length) * Math.PI * 2;
        return (
          <group
            key={i}
            position={[Math.cos(a) * radius, 0, Math.sin(a) * radius]}
            rotation={[0, -a + Math.PI / 2, 0]}
          >
            <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
              <RoundedBox args={[1.4, 0.9, 0.06]} radius={0.06} smoothness={4}>
                <meshPhysicalMaterial
                  color={i % 2 === 0 ? "#071528" : "#0A1E38"}
                  metalness={0.7}
                  roughness={0.15}
                  clearcoat={1}
                />
              </RoundedBox>
              {/* blue strip */}
              <mesh position={[0, -0.35, 0.035]}>
                <planeGeometry args={[1.3, 0.04]} />
                <meshBasicMaterial color={PALETTE.glow} />
              </mesh>
              {/* corner accent */}
              <mesh position={[0.5, 0.28, 0.035]}>
                <circleGeometry args={[0.07, 24]} />
                <meshBasicMaterial color={PALETTE.glowSoft} />
              </mesh>
            </Float>
          </group>
        );
      })}

      {/* Decorative rings */}
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.9, 0.015, 16, 200]} />
        <meshBasicMaterial color={PALETTE.glow} transparent opacity={0.20} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 2.2, 0.2, 0]}>
        <torusGeometry args={[4.6, 0.01, 16, 200]} />
        <meshBasicMaterial color={PALETTE.glowSoft} transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export function SolutionsRailScene({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  const enabled = useSceneGate(1024);
  if (!enabled) return null;
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
      <Canvas
        camera={{ position: [0, 0.6, 7.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 6, 4]}
            intensity={1.0}
            color="#DBEAFE"
          />
          <directionalLight
            position={[-4, -3, -5]}
            intensity={0.3}
            color={PALETTE.glowSoft}
          />
          <pointLight position={[0, 0, 3]} intensity={1.0} color={PALETTE.glow} />
          <Orbit progress={() => progressRef.current} />

        </Suspense>
      </Canvas>
    </div>
  );
}
