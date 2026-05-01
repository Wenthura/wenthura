"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import CubeLoader, { cubeThemes, type CubeColorTheme } from "@/components/ui/cube-loader";

/* ── Resolve theme from the current route ────────────────────── */
function useRouteTheme(): CubeColorTheme {
  const pathname = usePathname();
  if (pathname.includes("nena-ai")) return cubeThemes["nena-ai"];
  if (pathname.includes("doodlenest")) return cubeThemes["doodlenest"];
  if (pathname.includes("autoflow")) return cubeThemes["autoflow"];
  if (pathname.includes("business-solutions")) return cubeThemes["business-solutions"];
  return cubeThemes.default;
}

/* ── Counter bar that fills to 100% ─────────────────────────── */
function ProgressBar({ color }: { color: string }) {
  const [progress, setProgress] = useState(0);
  const raf = useRef<number>(0);
  const start = useRef(0);
  const duration = 1800;

  useEffect(() => {
    start.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start.current;
      const pct = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      setProgress(Math.round(eased * 100));
      if (pct < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color, width: `${progress}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>
      <span className="font-mono text-[9px] tabular-nums tracking-[0.3em] text-white/25">
        {progress}%
      </span>
    </div>
  );
}

/* ── Main Preloader ─────────────────────────────────────────── */
export function Preloader() {
  const [done, setDone] = useState(false);
  const theme = useRouteTheme();

  useEffect(() => {
    const key = "wenthura_preloaded_v4";
    if (typeof window !== "undefined" && sessionStorage.getItem(key)) {
      setDone(true);
      return;
    }
    const timer = setTimeout(() => {
      setDone(true);
      try {
        sessionStorage.setItem(key, "1");
      } catch {}
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-loading", !done);
  }, [done]);

  /* Derive a progress-bar gradient from the theme */
  const barGradient = `linear-gradient(90deg, ${theme.primary.replace(/[\d.]+\)$/, "1)")}, ${theme.secondary.replace(/[\d.]+\)$/, "1)")})`;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6"
          style={{ background: "linear-gradient(160deg, #0a0f1c 0%, #0f172a 40%, #111827 100%)" }}
        >
          {/* Ambient glow — themed */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: theme.glow }}
          />

          {/* Subtle grain */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]">
            <filter id="preloaderGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#preloaderGrain)" />
          </svg>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* 3D Cube */}
            <CubeLoader theme={theme} />

            {/* Progress bar */}
            <ProgressBar color={barGradient} />
          </motion.div>

          {/* Exit curtain — slides up */}
          <motion.div
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-20 origin-bottom bg-white"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
