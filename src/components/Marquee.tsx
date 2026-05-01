"use client";

import { capabilities } from "@/lib/content";

export function Marquee() {
  const row = [...capabilities, ...capabilities];
  return (
    <div className="relative overflow-hidden border-y border-slate-100 bg-white py-5">
      <div className="flex animate-marquee-x items-center whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={`a-${i}`}
            className="mx-10 inline-flex items-center gap-10 font-display text-3xl font-light tracking-tight text-slate-300 sm:text-4xl lg:text-5xl"
          >
            {w}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
