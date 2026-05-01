"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  ContactShadows,
  Environment,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";
import { DioramaCanvas, useDioramaProgress } from "./DioramaCanvas";

/* ============================================================
   AUTOFLOW â€” Rotating 3D gear, an assembling car, sweeping gauge
   ============================================================ */

/* ---- Build a gear shape with extruded teeth ---- */
function useGearGeometry(
  teeth = 16,
  outerRadius = 1.6,
  innerRadius = 1.35,
  holeRadius = 0.4,
  depth = 0.35
) {
  return useMemo(() => {
    const shape = new THREE.Shape();
    const toothAngle = (Math.PI * 2) / teeth;
    const halfTooth = toothAngle / 4;
    for (let i = 0; i < teeth; i++) {
      const a = i * toothAngle;
      const a1 = a - halfTooth;
      const a2 = a + halfTooth;
      const a3 = a + toothAngle / 2 - halfTooth;
      const a4 = a + toothAngle / 2 + halfTooth;

      const p1 = [Math.cos(a1) * innerRadius, Math.sin(a1) * innerRadius];
      const p2 = [Math.cos(a2) * outerRadius, Math.sin(a2) * outerRadius];
      const p3 = [Math.cos(a3) * outerRadius, Math.sin(a3) * outerRadius];
      const p4 = [Math.cos(a4) * innerRadius, Math.sin(a4) * innerRadius];

      if (i === 0) shape.moveTo(p1[0], p1[1]);
      else shape.lineTo(p1[0], p1[1]);
      shape.lineTo(p2[0], p2[1]);
      shape.lineTo(p3[0], p3[1]);
      shape.lineTo(p4[0], p4[1]);
    }

    // center hole
    const hole = new THREE.Path();
    hole.absarc(0, 0, holeRadius, 0, Math.PI * 2, true);
    shape.holes.push(hole);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    });
    geo.translate(0, 0, -depth / 2);
    geo.computeVertexNormals();
    return geo;
  }, [teeth, outerRadius, innerRadius, holeRadius, depth]);
}

/* Main gear rotating behind everything */
function MainGear() {
  const ref = useRef<THREE.Mesh>(null);
  const progress = useDioramaProgress();
  const geo = useGearGeometry(18, 1.95, 1.65, 0.55, 0.3);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const p = progress?.current?.value ?? 0;
    ref.current.rotation.z = t * 0.2 + p * Math.PI;
  });

  return (
    <mesh ref={ref} position={[0, 0, -0.4]}>
      <primitive object={geo} attach="geometry" />
      <meshStandardMaterial
        color="#F97316"
        metalness={0.6}
        roughness={0.35}
      />
    </mesh>
  );
}

/* Smaller secondary gear meshed with the main one */
function SecondaryGear() {
  const ref = useRef<THREE.Mesh>(null);
  const geo = useGearGeometry(12, 0.9, 0.72, 0.2, 0.22);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    // Counter-rotate faster (meshed gear relationship)
    ref.current.rotation.z = -t * 0.3 * (18 / 12);
  });

  return (
    <mesh ref={ref} position={[1.85, 1.3, -0.4]}>
      <primitive object={geo} attach="geometry" />
      <meshStandardMaterial color="#FDBA74" metalness={0.5} roughness={0.4} />
    </mesh>
  );
}

/* Car built from primitives, parts scroll-in to assemble */
function AssemblingCar() {
  const body = useRef<THREE.Group>(null);
  const roof = useRef<THREE.Mesh>(null);
  const frontWheel = useRef<THREE.Mesh>(null);
  const backWheel = useRef<THREE.Mesh>(null);
  const window1 = useRef<THREE.Mesh>(null);
  const window2 = useRef<THREE.Mesh>(null);
  const progress = useDioramaProgress();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const p = progress?.current?.value ?? 0;

    // Stagger the assembly
    const stage = (part: number) =>
      THREE.MathUtils.smoothstep(p, part * 0.12, part * 0.12 + 0.28);

    if (body.current) {
      body.current.position.y = Math.sin(t * 1.2) * 0.04;
      body.current.rotation.y = Math.sin(t * 0.5) * 0.12;
    }
    if (roof.current) {
      const s = stage(1);
      roof.current.position.y = 0.32 + (1 - s) * 1.2;
      (roof.current.material as THREE.MeshStandardMaterial).opacity = s;
    }
    if (frontWheel.current) {
      const s = stage(2);
      frontWheel.current.position.y = -0.3 + (1 - s) * -1.5;
      frontWheel.current.rotation.z = -t * 2.5;
    }
    if (backWheel.current) {
      const s = stage(3);
      backWheel.current.position.y = -0.3 + (1 - s) * -1.5;
      backWheel.current.rotation.z = -t * 2.5;
    }
    if (window1.current) {
      const s = stage(4);
      (window1.current.material as THREE.MeshStandardMaterial).opacity = s * 0.6;
    }
    if (window2.current) {
      const s = stage(4);
      (window2.current.material as THREE.MeshStandardMaterial).opacity = s * 0.6;
    }
  });

  return (
    <group ref={body} position={[-0.1, -0.2, 0.4]} scale={0.9}>
      {/* chassis */}
      <RoundedBox args={[1.7, 0.36, 0.7]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color="#2563EB" metalness={0.5} roughness={0.3} />
      </RoundedBox>

      {/* roof / cabin */}
      <mesh ref={roof} position={[0, 0.32, 0]}>
        <boxGeometry args={[1.05, 0.32, 0.6]} />
        <meshStandardMaterial
          color="#1D4ED8"
          metalness={0.4}
          roughness={0.35}
          transparent
          opacity={0}
        />
      </mesh>

      {/* windshield */}
      <mesh
        ref={window1}
        position={[0.32, 0.32, 0]}
        rotation={[0, 0, -0.35]}
      >
        <planeGeometry args={[0.3, 0.3]} />
        <meshStandardMaterial
          color="#60A5FA"
          metalness={0.9}
          roughness={0.05}
          transparent
          opacity={0}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        ref={window2}
        position={[-0.32, 0.32, 0]}
        rotation={[0, 0, 0.35]}
      >
        <planeGeometry args={[0.3, 0.3]} />
        <meshStandardMaterial
          color="#60A5FA"
          metalness={0.9}
          roughness={0.05}
          transparent
          opacity={0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* wheels */}
      <mesh
        ref={frontWheel}
        position={[0.55, -0.3, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.22, 0.22, 0.72, 24]} />
        <meshStandardMaterial color="#0F172A" metalness={0.3} roughness={0.6} />
      </mesh>
      <mesh
        ref={backWheel}
        position={[-0.55, -0.3, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.22, 0.22, 0.72, 24]} />
        <meshStandardMaterial color="#0F172A" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* wheel hubs */}
      <mesh position={[0.55, -0.3, 0.37]}>
        <cylinderGeometry args={[0.09, 0.09, 0.03, 16]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[0.55, -0.3, -0.37]}>
        <cylinderGeometry args={[0.09, 0.09, 0.03, 16]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[-0.55, -0.3, 0.37]}>
        <cylinderGeometry args={[0.09, 0.09, 0.03, 16]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[-0.55, -0.3, -0.37]}>
        <cylinderGeometry args={[0.09, 0.09, 0.03, 16]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* headlights */}
      <mesh position={[0.86, -0.02, 0.22]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color="#FEF3C7"
          emissive="#FEF3C7"
          emissiveIntensity={1.5}
        />
      </mesh>
      <mesh position={[0.86, -0.02, -0.22]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color="#FEF3C7"
          emissive="#FEF3C7"
          emissiveIntensity={1.5}
        />
      </mesh>
    </group>
  );
}

/* Gauge with a sweeping needle */
function Gauge() {
  const needle = useRef<THREE.Mesh>(null);
  const progress = useDioramaProgress();

  useFrame(({ clock }) => {
    if (!needle.current) return;
    const t = clock.getElapsedTime();
    const p = progress?.current?.value ?? 0;
    // needle sweeps from 135Â° to 45Â° (left to right) based on scroll + breathe
    const base = Math.PI * 0.75 - p * Math.PI * 1.5;
    needle.current.rotation.z = base + Math.sin(t * 2) * 0.08;
  });

  const arcPoints = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let a = Math.PI * 0.75; a >= -Math.PI * 0.75; a -= 0.05) {
      pts.push(new THREE.Vector3(Math.cos(a) * 0.45, Math.sin(a) * 0.45, 0));
    }
    return pts;
  }, []);

  const arcLine = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(arcPoints);
    const mat = new THREE.LineBasicMaterial({ color: "#2563EB" });
    return new THREE.Line(geo, mat);
  }, [arcPoints]);

  return (
    <group position={[-1.7, -0.9, 0.8]} scale={1.2}>
      {/* backing disk */}
      <mesh>
        <circleGeometry args={[0.55, 48]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.2} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.001]}>
        <ringGeometry args={[0.5, 0.55, 48]} />
        <meshBasicMaterial color="#2563EB" />
      </mesh>

      {/* tick marks */}
      {Array.from({ length: 9 }).map((_, i) => {
        const a = Math.PI * 0.75 - (i / 8) * Math.PI * 1.5;
        const x = Math.cos(a);
        const y = Math.sin(a);
        return (
          <mesh
            key={i}
            position={[x * 0.4, y * 0.4, 0.002]}
            rotation={[0, 0, a - Math.PI / 2]}
          >
            <planeGeometry args={[0.015, 0.07]} />
            <meshBasicMaterial color={i > 5 ? "#F97316" : "#64748B"} />
          </mesh>
        );
      })}

      {/* arc guide */}
      <primitive object={arcLine} />

      {/* needle */}
      <mesh ref={needle} position={[0, 0, 0.01]}>
        <planeGeometry args={[0.4, 0.022]} />
        <meshBasicMaterial color="#F97316" />
      </mesh>

      {/* hub */}
      <mesh position={[0, 0, 0.015]}>
        <circleGeometry args={[0.04, 24]} />
        <meshStandardMaterial color="#0F172A" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
}

/* Subtle ground plane with reflection-like tint */
function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, 0]}>
      <circleGeometry args={[5, 48]} />
      <meshStandardMaterial color="#FFF7ED" metalness={0.3} roughness={0.6} />
    </mesh>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 4]} intensity={1.3} />
      <directionalLight position={[-3, 2, 3]} intensity={0.4} color="#F97316" />
      <pointLight position={[1, -0.5, 2]} intensity={0.8} color="#FEF3C7" />

      <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.15}>
        <MainGear />
      </Float>
      <SecondaryGear />
      <AssemblingCar />
      <Gauge />
      <Floor />

      <ContactShadows
        position={[0, -1.14, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4}
      />
      <Environment preset="warehouse" environmentIntensity={0.4} />
    </>
  );
}

export function AutoFlowDiorama({ className }: { className?: string }) {
  return (
    <DioramaCanvas
      className={className}
      cameraPosition={[0.5, 0.9, 4.8]}
      cameraFov={42}
    >
      <SceneContents />
    </DioramaCanvas>
  );
}
