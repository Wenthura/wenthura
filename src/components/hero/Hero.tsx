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
  { name: "Business Solutions", color: "#2563EB", href: "/products/business-solutions" },
  { name: "DoodleNest",        color: "#F97316", href: "/products/doodlenest" },
  { name: "Nena AI",           color: "#2563EB", href: "/products/nena-ai" },
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
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* ── Radiant gradient orbs ──────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[10%] top-[5%] h-[700px] w-[700px] rounded-full opacity-[0.35]"
          style={{ background: "radial-gradient(circle, #93C5FD 0%, #3B82F6 30%, transparent 70%)", filter: "blur(80px)" }}
        />
        <motion.div
          animate={{ x: [0, -50, 25, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute -right-[5%] top-[15%] h-[550px] w-[550px] rounded-full opacity-[0.25]"
          style={{ background: "radial-gradient(circle, #FDBA74 0%, #F97316 30%, transparent 70%)", filter: "blur(90px)" }}
        />
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[0%] left-[30%] h-[500px] w-[500px] rounded-full opacity-[0.2]"
          style={{ background: "radial-gradient(circle, #C4B5FD 0%, #7C3AED 30%, transparent 70%)", filter: "blur(100px)" }}
        />
        <motion.div
          animate={{ x: [0, -30, 15, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute right-[20%] top-[60%] h-[350px] w-[350px] rounded-full opacity-[0.15]"
          style={{ background: "radial-gradient(circle, #6EE7B7 0%, #10B981 30%, transparent 70%)", filter: "blur(70px)" }}
        />
      </div>

      {/* ── Subtle grid ────────────────────────────────────────── */}
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden />

      {/* ── Main content ─────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center"
        style={{ opacity: scrollOpacity, y: scrollY }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md"
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
        <h1 className="font-display font-black" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: "1.08", letterSpacing: "-0.04em" }}>
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
              className="block bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#F97316] bg-clip-text text-transparent">
              Digital Economies.
            </motion.span>
          </span>
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl"
        >
          Scalable fintech platforms, cloud infrastructure, and managed
          services — plus purpose-built products for education, AI,
          and automotive.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/25"
          >
            Start the conversation
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-900 hover:shadow-lg hover:shadow-slate-200/50"
          >
            Explore services
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex items-center gap-8 sm:gap-12"
        >
          {metrics.map((m, i) => (
            <Fragment key={m.label}>
              {i > 0 && <div className="h-8 w-px bg-slate-200" />}
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-black text-slate-900 sm:text-4xl">
                  <AnimatedNumber target={m.value} suffix={m.suffix} />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
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
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          {products.map((p) => (
            <Link key={p.href} href={p.href}
              className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md hover:shadow-slate-200/50"
            >
              <span className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-[1.8]"
                style={{ background: p.color, boxShadow: `0 0 8px ${p.color}40` }} />
              <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-800">{p.name}</span>
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a href="#services" className="group flex flex-col items-center gap-2 text-slate-300 transition-colors hover:text-slate-500" aria-label="Scroll to services">
          <span className="font-mono text-[8px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="relative flex h-7 w-[18px] items-start justify-center rounded-full border border-slate-300 pt-1.5 group-hover:border-slate-400">
            <motion.span className="h-1.5 w-1 rounded-full bg-current"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
          </span>
        </a>
      </motion.div>

      {/* ── Bottom fade to white ──────────────────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[4] h-32 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
