"use client";

import { useEffect, useRef } from "react";
import { useSceneGate } from "@/lib/three/useGate";

/**
 * Canvas2D-based magnetic cursor overlay.
 * Pure canvas 2D (no Three.js) is plenty for a single radial gradient blob
 * and avoids spinning up yet another WebGL context. Blends via `difference`.
 */
export function Cursor() {
  const enabled = useSceneGate(1024);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useRef({
    tx: 0,
    ty: 0,
    x: 0,
    y: 0,
    scale: 1,
    targetScale: 1,
    hovering: false,
  });

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;
    // No touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      state.current.tx = e.clientX;
      state.current.ty = e.clientY;
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      const magnetic = t?.closest?.(
        "a, button, [data-magnetic], input, textarea, select, [role='button']"
      );
      state.current.hovering = !!magnetic;
      state.current.targetScale = magnetic ? 2.4 : 1;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });

    let raf = 0;
    const draw = () => {
      const s = state.current;
      // lerp
      s.x += (s.tx - s.x) * 0.18;
      s.y += (s.ty - s.y) * 0.18;
      s.scale += (s.targetScale - s.scale) * 0.12;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const baseR = 14 * s.scale;
      const outerR = 60 * s.scale;

      // Outer blue halo
      const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, outerR);
      halo.addColorStop(0, "rgba(59, 130, 246, 0.16)");
      halo.addColorStop(0.5, "rgba(59, 130, 246, 0.06)");
      halo.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(s.x, s.y, outerR, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      const core = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, baseR);
      core.addColorStop(0, "rgba(147, 197, 253, 0.85)");
      core.addColorStop(0.7, "rgba(59, 130, 246, 0.65)");
      core.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(s.x, s.y, baseR, 0, Math.PI * 2);
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[110]"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
