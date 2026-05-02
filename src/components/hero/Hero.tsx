"use client";

import { useRef, Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ================================================================
   HELPERS
   ================================================================ */

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.5 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const dur = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}{suffix}
    </span>
  );
}

/* ================================================================
   DATA
   ================================================================ */

const products = [
  { name: "DoodleNest",        color: "#FBBF24", href: "/products/doodlenest" },
  { name: "Nena AI",           color: "#3B82F6", href: "/products/nena-ai" },
  { name: "AutoFlow",          color: "#F97316", href: "/products/autoflow" },
];

const metrics = [
  { value: 15, suffix: "+",  label: "Countries" },
  { value: 99, suffix: "%",  label: "Uptime SLA" },
  { value: 50, suffix: "M+", label: "Transactions" },
];

/* ================================================================
   HERO — Clean white + radiant gradient accents
   ================================================================ */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scrollY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* ── Background video (flipped) ─────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover [transform:scaleY(-1)]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
            type="video/mp4"
          />
        </video>
        {/* White gradient overlay — blends video into page */}
        <div className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white" />
      </div>

      {/* ── Subtle grid ────────────────────────────────────────── */}
      <div className="grid-lines pointer-events-none absolute inset-0 z-[1]" aria-hidden />

      {/* ── Main content ─────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex h-full w-full max-w-[1200px] flex-col items-center justify-between px-5 pt-20 pb-6 text-center sm:px-6 sm:pt-24 sm:pb-10"
        style={{ opacity: scrollOpacity, y: scrollY }}
      >
        {/* Spacer top — pushes center block down a bit */}
        <div className="shrink" />

        {/* Center block */}
        <div className="flex flex-col items-center gap-3 sm:gap-5">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md sm:gap-3 sm:px-5 sm:py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
              Wenthura Technology
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display font-black" style={{ fontSize: "clamp(1.75rem, 7vw, 5rem)", lineHeight: "1.08", letterSpacing: "-0.04em" }}>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 0.9, delay: 0.4, ease }} className="block text-slate-900">
                We Engineer The
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 0.9, delay: 0.5, ease }} className="block text-slate-900">
                Infrastructure Behind
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.6, ease }}
                className="block text-slate-900">
                Digital{" "}
                <em
                  className="not-italic bg-gradient-to-r from-[#3B82F6] via-[#FBBF24] to-[#F97316] bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', serif)", fontSize: "1.25em", fontStyle: "italic" }}
                >
                  Economies.
                </em>
              </motion.span>
            </span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="max-w-[554px] text-sm leading-relaxed sm:text-base md:text-xl"
            style={{ color: "rgba(55, 58, 70, 0.8)" }}
          >
            Purpose-built products for education, AI learning, and automotive —
            powered by modern technology and deep domain expertise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="flex flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
          >
            <Link href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] sm:px-8 sm:py-4 sm:text-[11px]"
            >
              Start the conversation
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a href="#services"
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-slate-900 sm:px-8 sm:py-4 sm:text-[11px]"
            >
              Explore services
            </a>
          </motion.div>
        </div>

        {/* Bottom block — metrics, pills, scroll */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-8 md:gap-x-12"
          >
            {metrics.map((m, i) => (
              <Fragment key={m.label}>
                {i > 0 && <div className="hidden h-6 w-px bg-slate-200 sm:block sm:h-8" />}
                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="font-display text-lg font-black text-slate-900 sm:text-3xl md:text-4xl">
                    <AnimatedNumber target={m.value} suffix={m.suffix} />
                  </span>
                  <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-400 sm:text-[9px] sm:tracking-[0.2em]">
                    {m.label}
                  </span>
                </div>
              </Fragment>
            ))}
          </motion.div>

          {/* Product pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5"
          >
            {products.map((p) => (
              <Link key={p.href} href={p.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md hover:shadow-slate-200/50 sm:gap-2.5 sm:px-5 sm:py-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-[1.8]"
                  style={{ background: p.color, boxShadow: `0 0 8px ${p.color}40` }} />
                <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 sm:text-xs">{p.name}</span>
              </Link>
            ))}
          </motion.div>

          {/* Scroll indicator — inline in flow, not absolute */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <a href="#services" className="group flex flex-col items-center gap-1.5 text-slate-300 transition-colors hover:text-slate-500" aria-label="Scroll to services">
              <span className="font-mono text-[8px] uppercase tracking-[0.3em]">Scroll</span>
              <span className="relative flex h-7 w-[18px] items-start justify-center rounded-full border border-slate-300 pt-1.5 group-hover:border-slate-400">
                <motion.span className="h-1.5 w-1 rounded-full bg-current"
                  animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom fade to white ──────────────────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[4] h-32 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
