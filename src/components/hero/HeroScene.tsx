"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useSceneGate } from "@/lib/three/useGate";

const VERT = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform float uGlitch;
  attribute float aSeed;
  varying float vSeed;
  varying float vGlitch;

  float hash(float n) { return fract(sin(n) * 43758.5453); }
  float noise3(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n = i.x + i.y * 57.0 + i.z * 113.0;
    return mix(
      mix(mix(hash(n +   0.0), hash(n +   1.0), f.x),
          mix(hash(n +  57.0), hash(n +  58.0), f.x), f.y),
      mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
          mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y),
      f.z);
  }

  void main() {
    vSeed = aSeed;
    vGlitch = uGlitch;

    vec3 pos = position;

    float ang = uTime * 0.08;
    float c = cos(ang), s = sin(ang);
    pos.xz = mat2(c, -s, s, c) * pos.xz;

    vec3 np = pos * 1.8 + vec3(uTime * 0.35, uTime * 0.2, aSeed * 10.0);
    float n = noise3(np);
    float n2 = noise3(np * 2.3 + 4.7);
    float disp = (n - 0.5) * 0.9 + (n2 - 0.5) * 0.45;

    float burst = step(0.985, fract(sin(uTime * 3.1 + aSeed * 12.9) * 43758.5453));
    float glitchAmt = uGlitch * (0.55 + burst * 1.2);

    pos += normalize(pos + 0.0001) * disp * glitchAmt;
    pos.x += disp * glitchAmt * 0.25;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.2 + aSeed * 1.3) * (300.0 / -mv.z);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uTime;
  varying float vSeed;
  varying float vGlitch;

  void main() {
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.18, d);

    float flip = step(0.65, fract(sin(vSeed * 47.0 + uTime) * 31.17));
    vec3 col = mix(uColorA, uColorB, flip * vGlitch);

    gl_FragColor = vec4(col, a * (0.85 + vGlitch * 0.15));
  }
`;

function ParticleCloud({ glitch }: { glitch: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, seeds } = useMemo(() => {
    const count = 2200;
    const p = new Float32Array(count * 3);
    const s = new Float32Array(count);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const R = 1.55 + (Math.random() - 0.5) * 0.18;
      p[i * 3] = Math.cos(theta) * r * R;
      p[i * 3 + 1] = y * R;
      p[i * 3 + 2] = Math.sin(theta) * r * R;
      s[i] = Math.random();
    }
    return { positions: p, seeds: s };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uGlitch: { value: glitch },
      uColorA: { value: new THREE.Color("#1D4ED8") },
      uColorB: { value: new THREE.Color("#F97316") },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const targetGlitch = useRef(glitch);
  targetGlitch.current = glitch;

  useFrame(({ clock, pointer }) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = clock.getElapsedTime();
    const cur = matRef.current.uniforms.uGlitch.value as number;
    matRef.current.uniforms.uGlitch.value =
      cur + (targetGlitch.current - cur) * 0.08;

    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0015;
      pointsRef.current.rotation.x = -0.1 + pointer.y * 0.08;
      pointsRef.current.rotation.z = pointer.x * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSeed"
          count={seeds.length}
          array={seeds}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={VERT}
        fragmentShader={FRAG}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

function InnerWire({ glitch }: { glitch: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = -t * 0.04;
    ref.current.rotation.x = t * 0.03;
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.03 + glitch * 0.07;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.1, 1]} />
      <meshBasicMaterial color="#2563EB" wireframe transparent opacity={0.04} />
    </mesh>
  );
}

function SceneContents({ glitch }: { glitch: number }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <ParticleCloud glitch={glitch} />
      <InnerWire glitch={glitch} />
    </>
  );
}

export function HeroScene({ glitch = 0.6 }: { glitch?: number }) {
  const enabled = useSceneGate(768);
  if (!enabled) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <SceneContents glitch={glitch} />
      </Suspense>
    </Canvas>
  );
}
