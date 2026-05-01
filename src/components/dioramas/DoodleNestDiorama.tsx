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
   DOODLENEST â€” open book, paper airplane orbit, floating letters
   ============================================================ */

/* Book with two angled pages and a cover */
function Book() {
  const group = useRef<THREE.Group>(null);
  const leftPage = useRef<THREE.Mesh>(null);
  const rightPage = useRef<THREE.Mesh>(null);
  const progress = useDioramaProgress();

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    const p = progress?.current?.value ?? 0;

    if (group.current) {
      group.current.rotation.y = pointer.x * 0.2;
      group.current.rotation.x = -0.6 + pointer.y * -0.1 + Math.sin(t * 0.7) * 0.02;
      group.current.position.y = Math.sin(t * 1.1) * 0.04;
    }
    // pages flutter slightly; one turns further with scroll
    if (leftPage.current) {
      leftPage.current.rotation.y = -Math.PI / 2.4 + Math.sin(t * 1.5) * 0.02;
    }
    if (rightPage.current) {
      // turn page during scroll (0..1 progress)
      const flip = THREE.MathUtils.smoothstep(p, 0.2, 0.9);
      rightPage.current.rotation.y =
        Math.PI / 2.4 - flip * Math.PI * 0.95 + Math.sin(t * 1.2) * 0.015;
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* spine cover */}
      <RoundedBox args={[0.18, 2.2, 0.4]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#EA580C" metalness={0.15} roughness={0.6} />
      </RoundedBox>

      {/* back cover (bottom) */}
      <mesh position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[4.4, 2.6, 0.06]} />
        <meshStandardMaterial color="#FED7AA" roughness={0.9} />
      </mesh>

      {/* LEFT page */}
      <group position={[-0.09, -0.14, 0]}>
        <mesh
          ref={leftPage}
          position={[-1.1, 0, 0]}
          rotation={[0, -Math.PI / 2.4, 0]}
        >
          <boxGeometry args={[2.2, 0.02, 1.4]} />
          <meshStandardMaterial color="#FFFBEB" roughness={0.9} />
        </mesh>
      </group>

      {/* RIGHT page (this one turns with scroll) */}
      <group position={[0.09, -0.14, 0]}>
        <mesh
          ref={rightPage}
          position={[1.1, 0, 0]}
          rotation={[0, Math.PI / 2.4, 0]}
        >
          <boxGeometry args={[2.2, 0.02, 1.4]} />
          <meshStandardMaterial color="#FFFBEB" roughness={0.9} />
        </mesh>
      </group>

      {/* Visible open-page surface (what you read when no turn happens) */}
      <group position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {/* left static page */}
        <mesh position={[-1.1, 0, 0.01]}>
          <planeGeometry args={[2.1, 1.35]} />
          <meshStandardMaterial color="#FFFDF6" roughness={0.95} />
        </mesh>
        {/* right static page */}
        <mesh position={[1.1, 0, 0.01]}>
          <planeGeometry args={[2.1, 1.35]} />
          <meshStandardMaterial color="#FFFDF6" roughness={0.95} />
        </mesh>
        {/* text lines drawn with thin boxes */}
        {[-0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45].map((y, i) => (
          <mesh key={`l-${i}`} position={[-1.1, y, 0.015]}>
            <planeGeometry args={[1.6 - Math.abs(y) * 0.5, 0.04]} />
            <meshBasicMaterial color="#FDBA74" />
          </mesh>
        ))}
        {[-0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45].map((y, i) => (
          <mesh key={`r-${i}`} position={[1.1, y, 0.015]}>
            <planeGeometry args={[1.6 - Math.abs(y) * 0.5, 0.04]} />
            <meshBasicMaterial color="#93C5FD" />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* Paper airplane orbiting on an elliptical path */
function PaperAirplane() {
  const ref = useRef<THREE.Group>(null);
  const trailRefs = useRef<THREE.Mesh[]>([]);

  const trailCount = 14;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const speed = 0.4;

    for (let i = 0; i < trailCount; i++) {
      const a = (t - i * 0.07) * speed;
      const x = Math.cos(a) * 3.0;
      const z = Math.sin(a) * 1.8;
      const y = 0.9 + Math.sin(a * 2) * 0.3;
      const m = trailRefs.current[i];
      if (m) {
        m.position.set(x, y, z);
        m.scale.setScalar((1 - i / trailCount) * 0.05);
        (m.material as THREE.MeshBasicMaterial).opacity =
          (1 - i / trailCount) * 0.5;
      }
    }

    if (ref.current) {
      const a = t * speed;
      const x = Math.cos(a) * 3.0;
      const z = Math.sin(a) * 1.8;
      const y = 0.9 + Math.sin(a * 2) * 0.3;
      ref.current.position.set(x, y, z);

      // tangent to the curve
      const a2 = a + 0.02;
      const nx = Math.cos(a2) * 3.0;
      const nz = Math.sin(a2) * 1.8;
      const ny = 0.9 + Math.sin(a2 * 2) * 0.3;
      ref.current.lookAt(nx, ny, nz);
      ref.current.rotation.z = Math.sin(t * 3) * 0.1;
    }
  });

  // Paper airplane geometry â€” simple triangular plane shape
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    // 4 verts, 2 tris forming a dart shape
    const verts = new Float32Array([
      0, 0, 0.6,    // nose (front)
     -0.3, 0, -0.3, // back-left
      0,   0.05, -0.1, // center-top fold
      0.3, 0, -0.3, // back-right
    ]);
    const idx = new Uint16Array([
      0, 1, 2,
      0, 2, 3,
    ]);
    g.setAttribute("position", new THREE.BufferAttribute(verts, 3));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeVertexNormals();
    return g;
  }, []);

  return (
    <group>
      {/* trail */}
      {Array.from({ length: trailCount }).map((_, i) => (
        <mesh
          key={i}
          ref={(m) => {
            if (m) trailRefs.current[i] = m;
          }}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#2563EB" transparent opacity={0.4} />
        </mesh>
      ))}
      {/* airplane */}
      <group ref={ref}>
        <mesh geometry={geo}>
          <meshStandardMaterial
            color="#2563EB"
            metalness={0.1}
            roughness={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* fold line */}
        <mesh geometry={geo} scale={[1, 1.01, 1]}>
          <meshBasicMaterial color="#1D4ED8" wireframe />
        </mesh>
      </group>
    </group>
  );
}

/* Floating letters rising above the book */
function FloatingLetters() {
  const letters = useMemo(
    () => [
      { char: "A", color: "#F97316", x: -2.2, y: 1.2, delay: 0 },
      { char: "B", color: "#2563EB", x: 0, y: 1.8, delay: 1.2 },
      { char: "C", color: "#F97316", x: 2.2, y: 1.4, delay: 2.3 },
      { char: "1", color: "#93C5FD", x: -1.4, y: 2.2, delay: 0.7 },
      { char: "2", color: "#FDBA74", x: 1.5, y: 2.4, delay: 1.8 },
    ],
    []
  );

  const refs = useRef<THREE.Group[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((g, i) => {
      if (!g) return;
      const d = letters[i].delay;
      g.position.y = letters[i].y + Math.sin((t + d) * 1.3) * 0.22;
      g.rotation.z = Math.sin((t + d) * 0.8) * 0.15;
      g.rotation.y = Math.sin((t + d) * 0.5) * 0.3;
    });
  });

  return (
    <>
      {letters.map((l, i) => (
        <group
          key={i}
          position={[l.x, l.y, 0.5]}
          ref={(g) => {
            if (g) refs.current[i] = g;
          }}
        >
          <Text
            fontSize={0.55}
            color={l.color}
            anchorX="center"
            anchorY="middle"
          >
            {l.char}
          </Text>
        </group>
      ))}
    </>
  );
}

/* Dotted trail particles */
function Sparkles() {
  const refs = useRef<THREE.Mesh[]>([]);
  const items = useMemo(
    () =>
      Array.from({ length: 22 }).map(() => ({
        x: (Math.random() - 0.5) * 6,
        y: Math.random() * 3 + 0.5,
        z: (Math.random() - 0.5) * 3,
        s: 0.02 + Math.random() * 0.03,
        d: Math.random() * 6,
      })),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((m, i) => {
      if (!m) return;
      const it = items[i];
      m.position.y = it.y + Math.sin(t * 0.8 + it.d) * 0.25;
      (m.material as THREE.MeshBasicMaterial).opacity =
        0.4 + Math.sin(t * 1.2 + it.d) * 0.3;
    });
  });

  return (
    <>
      {items.map((it, i) => (
        <mesh
          key={i}
          position={[it.x, it.y, it.z]}
          ref={(m) => {
            if (m) refs.current[i] = m;
          }}
        >
          <sphereGeometry args={[it.s, 8, 8]} />
          <meshBasicMaterial color="#F97316" transparent opacity={0.5} />
        </mesh>
      ))}
    </>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 6, 4]} intensity={1.1} />
      <directionalLight position={[-3, 2, -2]} intensity={0.25} color="#FDBA74" />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
        <Book />
      </Float>

      <PaperAirplane />
      <FloatingLetters />
      <Sparkles />

      <ContactShadows
        position={[0, -1.1, 0]}
        opacity={0.3}
        scale={10}
        blur={2.5}
        far={3.5}
      />
      <Environment preset="apartment" environmentIntensity={0.4} />
    </>
  );
}

export function DoodleNestDiorama({ className }: { className?: string }) {
  return (
    <DioramaCanvas
      className={className}
      cameraPosition={[0, 1.2, 5.6]}
      cameraFov={40}
    >
      <SceneContents />
    </DioramaCanvas>
  );
}
