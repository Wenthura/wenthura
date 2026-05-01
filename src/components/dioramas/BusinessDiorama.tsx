"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  RoundedBox,
  Float,
  ContactShadows,
  Environment,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import { DioramaCanvas, useDioramaProgress } from "./DioramaCanvas";

/* ============================================================
   BUSINESS â€” floating credit card, rising bars, transaction pulses
   ============================================================ */

function CreditCard() {
  const ref = useRef<THREE.Group>(null);
  const progress = useDioramaProgress();

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const p = progress?.current?.value ?? 0;
    // Subtle tilt follows cursor + idle wobble + scroll flip
    ref.current.rotation.y = -0.35 + pointer.x * 0.25 + t * 0.12;
    ref.current.rotation.x = -0.2 + pointer.y * -0.12 + Math.sin(t * 0.8) * 0.03;
    ref.current.position.y = 0.12 + Math.sin(t * 1.2) * 0.06 + p * 0.15;
  });

  return (
    <group ref={ref} position={[0, 0.1, 0]}>
      {/* card body */}
      <RoundedBox args={[2.6, 1.6, 0.06]} radius={0.12} smoothness={6}>
        <meshStandardMaterial
          color="#1D4ED8"
          metalness={0.4}
          roughness={0.25}
        />
      </RoundedBox>

      {/* front gloss stripe */}
      <mesh position={[0, -0.05, 0.032]}>
        <planeGeometry args={[2.6, 0.7]} />
        <meshStandardMaterial
          color="#2563EB"
          metalness={0.5}
          roughness={0.15}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* chip */}
      <group position={[-0.85, 0.25, 0.033]}>
        <RoundedBox args={[0.4, 0.3, 0.02]} radius={0.05} smoothness={4}>
          <meshStandardMaterial color="#F4B94E" metalness={0.9} roughness={0.25} />
        </RoundedBox>
        {/* chip lines */}
        {[-0.07, 0, 0.07].map((y) => (
          <mesh key={y} position={[0, y, 0.012]}>
            <boxGeometry args={[0.3, 0.015, 0.002]} />
            <meshStandardMaterial color="#B67820" metalness={0.6} roughness={0.4} />
          </mesh>
        ))}
      </group>

      {/* contactless icon */}
      <group position={[-0.35, 0.25, 0.033]}>
        {[0.06, 0.1, 0.14].map((r, i) => (
          <mesh key={i} rotation={[0, 0, 0]}>
            <torusGeometry args={[r, 0.008, 8, 32, Math.PI * 0.7]} />
            <meshStandardMaterial color="#F4B94E" metalness={0.6} roughness={0.3} />
          </mesh>
        ))}
      </group>

      {/* card number placeholder dots */}
      {[-0.9, -0.3, 0.3, 0.9].map((x, group) => (
        <group key={group}>
          {[0, 0.08, 0.16, 0.24].map((dx, i) => (
            <mesh key={i} position={[x + dx, -0.25, 0.033]}>
              <circleGeometry args={[0.02, 12]} />
              <meshBasicMaterial color="#DBEAFE" transparent opacity={0.65} />
            </mesh>
          ))}
        </group>
      ))}

      {/* network logos (two interlocked circles) */}
      <mesh position={[0.9, -0.53, 0.033]}>
        <circleGeometry args={[0.12, 32]} />
        <meshBasicMaterial color="#F97316" transparent opacity={0.85} />
      </mesh>
      <mesh position={[1.05, -0.53, 0.034]}>
        <circleGeometry args={[0.12, 32]} />
        <meshBasicMaterial color="#FDBA74" transparent opacity={0.75} />
      </mesh>

      {/* Cardholder name */}
      <Text
        position={[-0.85, -0.5, 0.033]}
        fontSize={0.085}
        color="#DBEAFE"
        anchorX="left"
        anchorY="middle"
        letterSpacing={0.08}
      >
        WENTHURA
      </Text>
    </group>
  );
}

/* ---- Rising bar chart behind the card ---- */
function BarChart() {
  const group = useRef<THREE.Group>(null);
  const progress = useDioramaProgress();
  const heights = useMemo(() => [0.6, 0.9, 1.3, 1.1, 1.7, 1.5, 2.0], []);
  const barRefs = useRef<THREE.Mesh[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const p = progress?.current?.value ?? 0;
    barRefs.current.forEach((m, i) => {
      if (!m) return;
      // ease-out grow tied to scroll progress, with slight pulse
      const target = heights[i] * Math.min(1, p * 2);
      const breathe = 1 + Math.sin(t * 1.5 + i * 0.6) * 0.015;
      m.scale.y = THREE.MathUtils.lerp(m.scale.y, Math.max(0.02, target * breathe), 0.08);
    });
    if (group.current) {
      group.current.rotation.y = -0.2;
    }
  });

  return (
    <group ref={group} position={[1.6, -0.8, -1.8]}>
      {heights.map((_, i) => (
        <mesh
          key={i}
          position={[i * 0.24 - 0.7, 0, 0]}
          ref={(m) => {
            if (m) barRefs.current[i] = m;
          }}
          scale={[1, 0.02, 1]}
        >
          <boxGeometry args={[0.16, 1, 0.16]} />
          <meshStandardMaterial
            color={i === heights.length - 1 ? "#F97316" : "#2563EB"}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      ))}
      {/* baseline */}
      <mesh position={[0.3, -0.02, 0]}>
        <boxGeometry args={[2.0, 0.01, 0.18]} />
        <meshStandardMaterial color="#CBD5E1" />
      </mesh>
    </group>
  );
}

/* ---- Transaction pulses traveling on bezier curves ---- */
function TransactionPulses() {
  const curves = useMemo(() => {
    const make = (from: [number, number, number], to: [number, number, number], offset: number) => {
      const mid: [number, number, number] = [
        (from[0] + to[0]) / 2,
        Math.max(from[1], to[1]) + offset,
        (from[2] + to[2]) / 2 + 0.5,
      ];
      return new THREE.CatmullRomCurve3([
        new THREE.Vector3(...from),
        new THREE.Vector3(...mid),
        new THREE.Vector3(...to),
      ]);
    };
    return [
      make([-2.4, 0.4, 0.6], [2.4, 0.4, 0.6], 1.2),
      make([-2.4, -0.5, 0.8], [2.4, 0.5, 0.8], 0.8),
      make([2.4, -0.4, 0.4], [-2.4, 0.2, 0.4], 1.4),
    ];
  }, []);

  const pulsePoints = useMemo(
    () =>
      curves.map((c) => {
        const geo = new THREE.BufferGeometry().setFromPoints(c.getPoints(60));
        return geo;
      }),
    [curves]
  );

  const arcLines = useMemo(
    () =>
      pulsePoints.map((geo, i) => {
        const mat = new THREE.LineBasicMaterial({
          color: i % 2 === 0 ? "#2563EB" : "#F97316",
          transparent: true,
          opacity: 0.25,
        });
        return new THREE.Line(geo, mat);
      }),
    [pulsePoints]
  );

  const pulseRefs = useRef<THREE.Mesh[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    pulseRefs.current.forEach((m, i) => {
      if (!m) return;
      const phase = (t * 0.28 + i * 0.33) % 1;
      const pos = curves[i % curves.length].getPoint(phase);
      m.position.copy(pos);
      const s = 0.08 + Math.sin(phase * Math.PI) * 0.12;
      m.scale.setScalar(s);
    });
  });

  return (
    <group>
      {/* Anchor terminals (bank icons) */}
      <mesh position={[-2.4, 0.0, 0.6]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial color="#2563EB" emissive="#2563EB" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[2.4, 0.0, 0.6]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={0.4} />
      </mesh>

      {/* Arcs */}
      {arcLines.map((lineObj, i) => (
        <primitive key={i} object={lineObj} />
      ))}

      {/* Traveling pulses */}
      {curves.map((_, i) => (
        <mesh
          key={i}
          ref={(m) => {
            if (m) pulseRefs.current[i] = m;
          }}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#2563EB" : "#F97316"}
            emissive={i % 2 === 0 ? "#2563EB" : "#F97316"}
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ---- Grid floor ---- */
function GridFloor() {
  return (
    <group position={[0, -1.4, 0]}>
      <gridHelper args={[14, 28, "#CBD5E1", "#E2E8F0"]} />
    </group>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.3} color="#F97316" />

      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.4}>
        <CreditCard />
      </Float>

      <BarChart />
      <TransactionPulses />
      <GridFloor />

      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.35}
        scale={10}
        blur={2.5}
        far={4}
      />
      <Environment preset="city" environmentIntensity={0.3} />
    </>
  );
}

export function BusinessDiorama({ className }: { className?: string }) {
  return (
    <DioramaCanvas
      className={className}
      cameraPosition={[0, 0.6, 5.2]}
      cameraFov={38}
    >
      <SceneContents />
    </DioramaCanvas>
  );
}
