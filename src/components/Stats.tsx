"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function useInViewOnce<T extends HTMLElement>(): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current || shown) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown]);
  return [ref, shown];
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const [ref, shown] = useInViewOnce<HTMLSpanElement>();

  useEffect(() => {
    if (!shown) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative border-y border-ink-700/50 bg-ink-900">
      <div className="container-p relative z-10 grid grid-cols-2 gap-0 py-16 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-8 ${i % 2 !== 0 ? "border-l border-ink-700/50 pl-8" : ""} ${i >= 2 ? "border-t border-ink-700/50 pt-8 lg:border-t-0 lg:pt-8" : ""} ${i > 0 && i % 4 !== 0 ? "lg:border-l lg:border-ink-700/50 lg:pl-10" : ""}`.trim()}
          >
            <div className="display text-5xl text-ink-50 sm:text-6xl lg:text-7xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
