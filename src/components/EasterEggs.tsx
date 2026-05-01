"use client";

import { useEffect, useRef, useCallback } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

function spawnConfetti() {
  const colors = ["#2563EB", "#3B82F6", "#F97316", "#FBBF24", "#60A5FA"];
  const count = 60;
  const container = document.createElement("div");
  container.style.cssText =
    "position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden";
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    const size = Math.random() * 8 + 4;
    const x = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 200;
    const delay = Math.random() * 0.4;
    const dur = Math.random() * 1.5 + 1.5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = Math.random() > 0.5 ? "50%" : "0";

    el.style.cssText = `
      position:absolute;top:-${size}px;left:${x}%;
      width:${size}px;height:${size}px;
      background:${color};border-radius:${shape};
      opacity:0;
      animation:confetti-fall ${dur}s ${delay}s cubic-bezier(.25,.46,.45,.94) forwards;
    `;
    container.appendChild(el);
  }

  setTimeout(() => container.remove(), 4000);
}

export function EasterEggs() {
  const bufferRef = useRef<string[]>([]);

  const handleKonami = useCallback(() => {
    spawnConfetti();
    // Flash a brief message
    const msg = document.createElement("div");
    msg.textContent = "You found it. We like you already.";
    msg.style.cssText = `
      position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
      z-index:10000;padding:24px 40px;
      background:#0F172A;color:#fff;
      font-family:var(--font-mono),monospace;font-size:14px;
      border-radius:12px;letter-spacing:0.05em;
      opacity:0;animation:easter-fade 3s ease forwards;
      pointer-events:none;
    `;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3500);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      bufferRef.current.push(e.key);
      if (bufferRef.current.length > KONAMI.length) {
        bufferRef.current = bufferRef.current.slice(-KONAMI.length);
      }
      if (bufferRef.current.join(",") === KONAMI.join(",")) {
        handleKonami();
        bufferRef.current = [];
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleKonami]);

  // Console easter egg
  useEffect(() => {
    const styles = [
      "color:#2563EB;font-size:16px;font-weight:700;font-family:system-ui",
      "color:#64748B;font-size:12px;font-family:system-ui",
      "color:#F97316;font-size:11px;font-family:system-ui",
    ];
    console.log(
      "%cWenthura%c\nDriving the digital revolution with intelligence.\n%cCurious about what's under the hood? We're hiring → careers@wenthura.lk",
      styles[0],
      styles[1],
      styles[2]
    );
  }, []);

  return null;
}
