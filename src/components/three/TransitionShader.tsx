"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Fullscreen WebGL curtain that plays a radial ember warp + noise dissolve
 * whenever the route changes. Driven by a ref-based progress value so state
 * changes don't cause re-renders inside the animation loop.
 */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uProgress; // 0 = hidden, 0.5 = covered, 1 = revealed
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColor;

  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p); vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0,0.0));
    float c = hash(i + vec2(0.0,1.0));
    float d = hash(i + vec2(1.0,1.0));
    vec2 u = f*f*(3.0-2.0*f);
    return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
  }
  float fbm(vec2 p){
    float v=0.0; float a=0.5;
    for(int i=0;i<4;i++){ v += a*noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 p = uv - 0.5;
    p.x *= uResolution.x / uResolution.y;
    float r = length(p);

    // Bell curve of coverage: 0 at edges, 1 at uProgress=0.5
    float cover = 1.0 - abs(uProgress * 2.0 - 1.0);

    // Radial wave driven by progress (wave sweeps out as progress advances)
    float wave = smoothstep(0.0, 1.0, 1.2 * cover - r * 0.9);

    // Noisy mask — grainy dissolve edge
    float n = fbm(uv * 4.0 + uTime * 0.15);
    float edge = smoothstep(0.0, 0.35, wave - (1.0 - n) * 0.18);

    // Color: white core → blue edge
    vec3 col = mix(vec3(0.01, 0.04, 0.09), uColor, smoothstep(0.35, 0.9, wave));

    // Soft grain
    col += (hash(uv * uResolution.xy + uTime) - 0.5) * 0.03;

    float alpha = edge;
    if (alpha < 0.001) discard;
    gl_FragColor = vec4(col, alpha);
  }
`;

function Curtain({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  useFrame((state) => {
    if (!mat.current) return;
    mat.current.uniforms.uTime.value = state.clock.getElapsedTime();
    mat.current.uniforms.uProgress.value = progressRef.current;
    mat.current.uniforms.uResolution.value.set(
      state.size.width,
      state.size.height
    );
  });
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        transparent
        depthTest={false}
        depthWrite={false}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uProgress: { value: 0 },
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(1, 1) },
          uColor: { value: new THREE.Color("#3B82F6") },
        }}
      />
    </mesh>
  );
}

export function TransitionShader() {
  const pathname = usePathname();
  const progress = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const el = overlayRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    el.style.pointerEvents = "auto";
    let raf = 0;
    const start = performance.now();
    const duration = 1100; // ms

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease in/out for progress curve
      const eased = t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
      progress.current = eased;
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        progress.current = 0;
        if (el) el.style.pointerEvents = "none";
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      progress.current = 0;
      if (el) el.style.pointerEvents = "none";
    };
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="fixed inset-0 z-[90]"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, premultipliedAlpha: false }}
        style={{ width: "100%", height: "100%" }}
      >
        <Curtain progressRef={progress} />
      </Canvas>
    </div>
  );
}
