"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` when 3D scenes should render.
 * Gates by: not SSR, not reduced-motion, and (optionally) a min viewport width.
 */
export function useSceneGate(minWidth = 0): boolean {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const mmReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mmWidth =
      minWidth > 0 ? window.matchMedia(`(min-width: ${minWidth}px)`) : null;

    const compute = () => {
      setOk(!mmReduce.matches && (!mmWidth || mmWidth.matches));
    };
    compute();
    mmReduce.addEventListener?.("change", compute);
    mmWidth?.addEventListener?.("change", compute);
    return () => {
      mmReduce.removeEventListener?.("change", compute);
      mmWidth?.removeEventListener?.("change", compute);
    };
  }, [minWidth]);

  return ok;
}
