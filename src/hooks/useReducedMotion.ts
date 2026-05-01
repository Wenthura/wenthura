"use client";

import { useEffect } from "react";

export function useReducedMotion(): boolean {
  // SSR-safe synchronous check
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useOnMount(fn: () => void | (() => void)) {
  useEffect(() => {
    return fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
