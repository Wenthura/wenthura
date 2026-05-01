"use client";

import { useState } from "react";
import Link from "next/link";
import { getIllustration } from "@/components/illustrations";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function IndustriesPin() {
  const [active, setActive] = useState(0);

  return (
    <section className="container-p py-24">
      <Reveal className="mb-12">
        <span className="eyebrow">Industry Verticals</span>
        <h2 className="section-title mt-3">Solutions built for your sector</h2>
        <p className="lead">
          Specialized technology for banking, retail, manufacturing, and beyond —
          each designed for sector-specific demands.
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[400px,1fr]">
        {/* Tab list */}
        <div className="flex flex-col gap-3">
          {industries.map((it, i) => {
            const Icon = it.icon;
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => setActive(i)}
                className={`group flex items-start gap-4 rounded-xl border p-5 text-left transition-all duration-300 ${
                  active === i
                    ? "border-glow bg-glow/5 shadow-sm"
                    : "border-ink-700/50 hover:border-glow/30 hover:bg-ink-900"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all ${
                    active === i
                      ? "bg-glow text-white"
                      : "bg-ink-900 text-ink-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3
                    className={`font-semibold leading-snug transition-colors ${
                      active === i ? "text-glow" : "text-ink-50"
                    }`}
                  >
                    {it.title}
                  </h3>
                  {active === i && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">
                      {it.blurb}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
          <Link href="/solutions" className="btn-ghost mt-2 self-start">
            All solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Active illustration */}
        <div className="relative min-h-[380px] overflow-hidden rounded-2xl lg:min-h-0">
          {(() => {
            const Illustration = getIllustration(industries[active].illustrationKey);
            return (
              <Illustration
                key={active}
                className="absolute inset-0 h-full w-full transition-opacity duration-500"
              />
            );
          })()}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-50/70 via-ink-50/10 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="font-mono text-xs uppercase tracking-widest text-white/60">
              {String(active + 1).padStart(2, "0")} — {String(industries.length).padStart(2, "0")}
            </p>
            <h4 className="mt-1 display text-3xl text-white">{industries[active].title}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
