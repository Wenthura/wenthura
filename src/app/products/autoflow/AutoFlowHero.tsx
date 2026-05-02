"use client";

import { lazy, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  CloudLightning,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE_URL = "https://prod.spline.design/PIgTjpRFA03yfLyK/scene.splinecode";

const ORANGE = "#F97316";

/* Modern type system:
   - Display: Bricolage Grotesque (variable, contemporary geometric-with-character)
   - Serif accent: Instrument Serif Italic (editorial flourish)
   - Body: Sora (geometric, clean, modern)
   - Mono: JetBrains Mono (technical labels) */
const fontDisplay = {
  fontFamily:
    "var(--font-bricolage), 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif",
  fontFeatureSettings: "'ss01' 1, 'ss02' 1, 'cv11' 1",
};
const fontSerif = {
  fontFamily: "var(--font-instrument), 'Instrument Serif', ui-serif, Georgia, serif",
  fontStyle: "italic" as const,
};
const fontSans = {
  fontFamily:
    "var(--font-sora), 'Sora', ui-sans-serif, system-ui, sans-serif",
  fontFeatureSettings: "'ss01' 1, 'cv11' 1",
};
const fontMono = {
  fontFamily:
    "var(--font-mono), 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
  fontFeatureSettings: "'zero' 1, 'ss02' 1",
};

const stats = [
  { label: "Throughput Lift", value: "+38%" },
  { label: "Avg. Bay Utilisation", value: "92%" },
  { label: "Platform Uptime", value: "99.9%" },
  { label: "Sites Onboarded", value: "120+" },
];

const capabilities = [
  { Icon: Activity, label: "Real-Time Job Tracking" },
  { Icon: Cpu, label: "AI Diagnostics" },
  { Icon: CloudLightning, label: "Cloud-Native ERP" },
];

export function AutoFlowHero() {
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white selection:bg-[#F97316] selection:text-black"
      style={fontSans}
    >
      {/* ── 3D Spline scene ── */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: "translateX(15%)" }}
        aria-hidden
      >
        <Suspense fallback={<div className="h-full w-full bg-black" />}>
          <Spline scene={SCENE_URL} />
        </Suspense>
      </div>

      {/* ── Left-side darkening for legibility ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* ── Orange floor glow ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[55%]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 35% 100%, rgba(249,115,22,0.22) 0%, rgba(249,115,22,0.06) 45%, transparent 75%)",
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 md:pt-32 lg:px-12 lg:pt-36">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-12 max-w-3xl space-y-6 md:space-y-7 lg:col-span-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md"
            >
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full"
                style={{ background: ORANGE, boxShadow: `0 0 12px ${ORANGE}` }}
              />
              <span
                className="text-[10px] uppercase tracking-[0.3em] text-white/80"
                style={fontMono}
              >
                Automotive ERP · Built for Workshops
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="bg-gradient-to-r from-white/40 via-white/85 to-white bg-clip-text text-transparent"
              style={{
                ...fontDisplay,
                fontWeight: 500,
                fontSize: "clamp(48px, 9vw, 112px)",
                lineHeight: 0.94,
                letterSpacing: "-0.045em",
              }}
            >
              The garage,
              <br />
              <span style={{ fontWeight: 300 }}>re</span>
              <span
                style={{
                  ...fontSerif,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: ORANGE,
                  WebkitTextFillColor: ORANGE,
                }}
              >
                imagined
              </span>
              <span
                style={{
                  color: ORANGE,
                  WebkitTextFillColor: ORANGE,
                  textShadow: `0 0 30px ${ORANGE}80`,
                }}
              >
                .
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="max-w-xl text-[15px] leading-[1.65] text-white/75 sm:text-[17px] sm:leading-[1.6]"
              style={{ fontWeight: 350, letterSpacing: "-0.005em" }}
            >
              <span className="text-white" style={{ fontWeight: 500 }}>
                AutoFlow
              </span>{" "}
              is the intelligent operating system for service stations and
              garages — track every job in real time, orchestrate bays with AI,
              and give customers a live window into their service. All from one
              calm, connected dashboard.
            </motion.p>

            {/* Capability chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-2.5"
            >
              {capabilities.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 text-[12px] text-white/90 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/[0.08]"
                  style={{ fontWeight: 400, letterSpacing: "-0.005em" }}
                >
                  <Icon size={13} className="text-[#F97316]" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                href="/contact"
                className="pointer-events-auto group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] text-black transition-all hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: ORANGE,
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                  boxShadow: `0 10px 30px -10px ${ORANGE}cc`,
                }}
              >
                Book a Live Demo
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="#features"
                className="pointer-events-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-[14px] text-white backdrop-blur-md transition-colors hover:border-white/50 hover:bg-white/[0.08]"
                style={{ fontWeight: 450, letterSpacing: "-0.005em" }}
              >
                <PlayCircle size={16} className="text-white/80" />
                See How It Works
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="pointer-events-auto mt-12 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative bg-black/30 px-5 py-5 sm:px-6 sm:py-6"
            >
              <div
                className="text-3xl text-white sm:text-[34px]"
                style={{
                  ...fontDisplay,
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/55"
                style={fontMono}
              >
                {s.label}
              </div>
              <span
                className="absolute inset-x-0 bottom-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: ORANGE }}
              />
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 hidden items-center gap-3 md:flex"
        >
          <span
            className="text-[10px] uppercase tracking-[0.4em] text-white/45"
            style={fontMono}
          >
            Scroll to explore
          </span>
          <span className="h-px w-10 bg-white/25" />
        </motion.div>
      </div>
    </section>
  );
}
