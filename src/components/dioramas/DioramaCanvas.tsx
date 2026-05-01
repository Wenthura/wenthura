"use client";

import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";
import { useSceneGate } from "@/lib/three/useGate";

/**
 * A single scroll-progress number (0..1) that maps to the
 * diorama container's vertical travel through the viewport.
 * 0 = container's top just entered the bottom of the viewport,
 * 1 = container's bottom just left the top.
 */
const ProgressCtx = createContext<{ ref: RefObject<{ value: number }> } | null>(
  null
);

export function useDioramaProgress() {
  const ctx = useContext(ProgressCtx);
  return ctx?.ref;
}

type Props = {
  className?: string;
  /** Fallback element shown when reduced-motion or SSR */
  fallback?: ReactNode;
  /** Optional camera position override */
  cameraPosition?: [number, number, number];
  cameraFov?: number;
  children: ReactNode;
};

/**
 * Wraps an R3F scene with:
 *  - reduced-motion / SSR gate
 *  - IntersectionObserver unmount when far off-screen
 *  - scroll progress ref accessible via useDioramaProgress()
 */
export function DioramaCanvas({
  className,
  fallback,
  cameraPosition = [0, 0, 6],
  cameraFov = 35,
  children,
}: Props) {
  const enabled = useSceneGate(768);
  const wrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef({ value: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;

    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0, rootMargin: "20% 0px 20% 0px" }
    );
    io.observe(el);

    let raf = 0;
    const tick = () => {
      if (wrapRef.current) {
        const r = wrapRef.current.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        // p = how far the container has travelled from entering bottom
        // (r.bottom = vh) to leaving top (r.top = -r.height)
        const total = vh + r.height;
        const travelled = vh - r.top;
        const p = Math.max(0, Math.min(1, travelled / total));
        progressRef.current.value = p;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) {
    return (
      <div className={className}>
        {fallback ?? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-white" />
        )}
      </div>
    );
  }

  return (
    <div ref={wrapRef} className={`${className ?? ""} relative`}>
      <ProgressCtx.Provider value={{ ref: progressRef }}>
        {visible && (
          <Canvas
            camera={{ position: cameraPosition, fov: cameraFov }}
            dpr={[1, 1.75]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
            }}
            style={{ background: "transparent" }}
          >
            {children}
          </Canvas>
        )}
      </ProgressCtx.Provider>
    </div>
  );
}
