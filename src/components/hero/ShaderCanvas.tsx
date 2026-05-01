"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= uResolution.x / uResolution.y;

    float t = uTime * 0.06;
    vec2 q = vec2(
      fbm(p + vec2(t, -t * 0.7)),
      fbm(p + vec2(-t * 0.5, t * 0.3) + 4.2)
    );
    float n = fbm(p + q * 1.6 + t);

    float radial = smoothstep(1.4, 0.0, length(p - vec2(0.3, 0.2)));
    float glow = smoothstep(0.35, 0.85, n) * radial;

    vec3 col = mix(uColorA, uColorB, smoothstep(0.1, 0.85, n) * 0.3);
    col = mix(col, uColorC, glow * 0.15);

    float vig = smoothstep(1.5, 0.5, length(p));
    col *= 0.95 + vig * 0.05;

    float g = hash(uv * uResolution.xy + t) * 0.012;
    col += g - 0.006;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function Plane() {
  const mat = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColorA: { value: new THREE.Color("#FFFFFF") },
      uColorB: { value: new THREE.Color("#F8FAFC") },
      uColorC: { value: new THREE.Color("#DBEAFE") },
    }),
    []
  );

  useFrame(({ clock, size }) => {
    if (!mat.current) return;
    mat.current.uniforms.uTime.value = clock.getElapsedTime();
    mat.current.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function ShaderCanvas() {
  return (
    <Canvas
      className="!absolute !inset-0"
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
      orthographic
      camera={{ zoom: 1, position: [0, 0, 1] }}
    >
      <Plane />
    </Canvas>
  );
}
