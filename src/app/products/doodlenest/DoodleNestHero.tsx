"use client";

import Link from "next/link";
import { Mail, Twitter, Github } from "lucide-react";

const socials = [
  { Icon: Mail, label: "Email", href: "mailto:hello@wenthura.lk" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Github, label: "Github", href: "#" },
];

export function DoodleNestHero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden rounded-b-[32px]" style={{ background: "#1a0a00" }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
          type="video/mp4"
        />
      </video>

      {/* Warm overlay for DoodleNest brand */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-[#1a0a00]/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1831px] flex-1 flex-col px-6 sm:px-10 lg:px-16">
        {/* Hero body */}
        <div className="flex flex-1 flex-col justify-end pb-20 lg:pb-28">
          <div className="relative max-w-[780px] lg:ml-32">
            {/* Cursive accent */}
            <span
              className="absolute -top-8 right-0 text-2xl opacity-90 mix-blend-exclusion sm:text-3xl lg:-right-16 lg:-top-12 lg:text-5xl -rotate-1"
              style={{ fontFamily: "var(--font-condiment)", color: "#FBBF24" }}
            >
              Early learning
            </span>

            <h1
              className="text-[40px] font-bold uppercase leading-[1.05] sm:text-[60px] sm:leading-[1] md:text-[75px] lg:text-[90px]"
              style={{ fontFamily: "var(--font-bricolage, system-ui)", color: "#FFF7ED" }}
            >
              Where every
              <br />
              child&apos;s{" "}
              <span style={{ color: "#F97316" }}>(</span>{" "}
              journey{" "}
              <span style={{ color: "#F97316" }}>)</span>
              <br />
              begins with joy
            </h1>

            <p
              className="mt-6 max-w-md text-sm uppercase leading-relaxed sm:text-base"
              style={{ fontFamily: "var(--font-mono, monospace)", color: "rgba(255,247,237,0.6)" }}
            >
              The all-in-one digital platform for early learning institutions —
              simplifying operations, deepening learning, and connecting families.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="liquid-glass inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:scale-[1.03]"
                style={{ color: "#FFF7ED" }}
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(to bottom, #F97316, #EA580C)",
                  color: "#fff",
                  boxShadow: "inset -4px -6px 25px 0px rgba(201,201,201,0.08), inset 4px 4px 10px 0px rgba(29,29,29,0.24)",
                }}
              >
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Social icons — mobile */}
          <div className="mt-8 flex items-center gap-3 lg:hidden">
            {socials.map(({ Icon, label }) => (
              <button
                key={label}
                className="liquid-glass flex h-14 w-14 items-center justify-center rounded-2xl transition-colors hover:bg-white/10"
              >
                <Icon className="h-5 w-5" style={{ color: "#FFF7ED" }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Social icons — desktop, stacked right */}
      <div className="pointer-events-auto absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {socials.map(({ Icon, label }) => (
          <button
            key={label}
            className="liquid-glass flex h-14 w-14 items-center justify-center rounded-2xl transition-colors hover:bg-white/10"
          >
            <Icon className="h-5 w-5" style={{ color: "#FFF7ED" }} />
          </button>
        ))}
      </div>
    </section>
  );
}
