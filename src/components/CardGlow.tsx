"use client";

import { useEffect, useRef } from "react";

/**
 * Tracks mouse position over cards and sets CSS custom properties
 * for the radial glow follow effect (defined in globals.css .card-glass::before).
 */
export function CardGlow() {
  const attached = useRef(false);

  useEffect(() => {
    if (attached.current) return;
    attached.current = true;

    function handleMouseMove(e: MouseEvent) {
      const cards = document.querySelectorAll<HTMLElement>(".card-glass");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
