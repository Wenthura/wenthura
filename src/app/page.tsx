import { Hero } from "@/components/hero/Hero";
import { Reveal } from "@/components/Reveal";
import { StaggerList, StaggerItem } from "@/components/StaggerList";
import { AnimatedLine } from "@/components/AnimatedLine";
import { TapTarget } from "@/components/TapTarget";

import Link from "next/link";
import Image from "next/image";
import { LazyImage } from "@/components/ui/lazy-image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import {
  DoodleNestIll,
  AutoFlowIll,
  NenaAIIll,
} from "@/components/illustrations";

// --- Feature lists ------------------------------------------------------------
const doodlenestFeatures = [
  { title: "Classroom Management",         desc: "Digital registers, timetables, and attendance tracking"    },
  { title: "Child Development Tracking",   desc: "Milestone monitoring and real-time progress reports"       },
  { title: "Parent Communication Portal",  desc: "Instant updates, messaging, and daily activity feeds"      },
  { title: "Enrollment & Administration",  desc: "Paperless enrollment workflows and billing management"      },
  { title: "Activity & Curriculum Tools",  desc: "Plan lessons, record activities, and track outcomes"        },
  { title: "Analytics & Reporting",        desc: "Centre performance insights and compliance reporting"       },
];

const nenaFeatures = [
  { title: "Adaptive Learning Paths",      desc: "AI tailors content difficulty and pace to each student"    },
  { title: "Smart Assessments",            desc: "Auto-graded quizzes with detailed feedback and hints"       },
  { title: "Educator Analytics",           desc: "Deep class and individual performance dashboards"           },
  { title: "24/7 AI Tutoring",             desc: "Always-on support for homework and exam preparation"        },
  { title: "Curriculum Integration",       desc: "Plugs into your existing LMS and school systems"            },
  { title: "Progress Dashboards",          desc: "Visual mastery tracking across subjects and skills"         },
];

const autoflowFeatures = [
  { title: "Real-time Job Tracking",       desc: "Live vehicle status visible to staff and customers"         },
  { title: "Intelligent Bay Management",   desc: "Optimise technician allocation and bay utilisation"         },
  { title: "Customer Visibility Portal",   desc: "Customers track their vehicle's service in real time"       },
  { title: "Revenue Analytics",            desc: "Financial dashboards with KPIs and growth metrics"          },
  { title: "Parts & Inventory Control",    desc: "Stock tracking, reorder alerts, and supplier management"    },
  { title: "Multi-branch Operations",      desc: "Manage multiple garages from a single command centre"       },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* ------------------------------------------------------------------
          OUR SERVICES & PRODUCTS
      ------------------------------------------------------------------ */}
      <section id="services" className="bg-white py-16 border-t border-slate-100 sm:py-28">
        <div className="container-p">
          <Reveal className="mb-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">
              Our Products
            </p>
            <h2
              className="mt-4 font-display font-black text-slate-900"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", lineHeight: "0.93" }}
            >
              Purpose-built{" "}
              <span style={{ color: "#2563EB" }}>products.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
              Dedicated products for education, AI learning, and automotive operations —
              built with deep domain expertise and modern technology.
            </p>
          </Reveal>

          <div className="space-y-4">
            {/* Three products */}
            <div className="grid gap-4 sm:grid-cols-3">
              {/* DoodleNest */}
              <Reveal delay={0.07}>
                <Link
                  href="/products/doodlenest"
                  className="group flex flex-col overflow-hidden rounded-3xl border border-orange-50 bg-orange-50/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-50"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <LazyImage
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80&fit=crop"
                      alt="Happy child in early learning environment"
                      ratio={16 / 9}
                      inView
                      className="transition-transform duration-500 group-hover:scale-105"
                      AspectRatioClassName="rounded-none border-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-50/90 via-orange-50/30 to-transparent" />
                  </div>
                  <div className="p-7 pt-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-orange-500/60">
                      Edutech Product
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-black text-slate-900">DoodleNest</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Complete early learning management — classrooms, development tracking, and parent engagement.
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-orange-500 opacity-0 transition-opacity group-hover:opacity-100">
                      Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>

              {/* Nena AI */}
              <Reveal delay={0.14}>
                <Link
                  href="/products/nena-ai"
                  className="group flex flex-col overflow-hidden rounded-3xl border border-blue-50 bg-blue-50/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-50"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <LazyImage
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80&fit=crop"
                      alt="Students engaged in digital learning"
                      ratio={16 / 9}
                      inView
                      className="transition-transform duration-500 group-hover:scale-105"
                      AspectRatioClassName="rounded-none border-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-50/90 via-blue-50/30 to-transparent" />
                  </div>
                  <div className="p-7 pt-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-600/60">
                      AI Product
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-black text-slate-900">Nena AI</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Adaptive AI tutoring, smart assessments, and deep performance analytics for educators and students.
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                      Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>

              {/* AutoFlow */}
              <Reveal delay={0.21}>
                <Link
                  href="/products/autoflow"
                  className="group flex flex-col overflow-hidden rounded-3xl border border-orange-50 bg-orange-50/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-50"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <LazyImage
                      src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500"
                      alt="Professional mechanic in modern automotive workshop"
                      ratio={16 / 9}
                      inView
                      className="transition-transform duration-500 group-hover:scale-105"
                      AspectRatioClassName="rounded-none border-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-50/90 via-orange-50/20 to-transparent" />
                  </div>
                  <div className="p-7 pt-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-orange-500/60">
                      Automotive Product
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-black text-slate-900">AutoFlow</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      AI-driven ERP for garages and service stations — job tracking, bay management, and revenue analytics.
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-orange-500 opacity-0 transition-opacity group-hover:opacity-100">
                      Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          01 — EDUTECH — DOODLENEST
      ------------------------------------------------------------------ */}
      <section
        id="doodlenest"
        className="relative overflow-hidden bg-orange-50/20"
      >
        <div
          className="pointer-events-none absolute right-0 top-0 select-none font-black leading-[0.8] text-orange-100/40"
          style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
        >
          01
        </div>

        <div className="container-p relative z-10 py-16 sm:py-28 lg:py-36">
          <Reveal>
            <div className="mb-10 sm:mb-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-orange-500/50">01 — Edutech Product</p>
              <AnimatedLine className="bg-orange-500" />
            </div>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <h2
                className="font-display font-black leading-[0.92] tracking-tight text-slate-900"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
              >
                Early learning{" "}
                <em className="not-italic" style={{ color: "#F97316" }}>
                  management, simplified.
                </em>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400">
                DoodleNest is a complete digital operations platform for early childhood
                education centres — streamlining classroom administration, child development
                tracking, parent communication, and compliance reporting in one place.
              </p>
              <StaggerList className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {doodlenestFeatures.map((f) => (
                  <StaggerItem key={f.title} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{f.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{f.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
              <div className="mt-10 flex flex-wrap gap-4">
                <TapTarget>
                  <Link
                    href="/products/doodlenest"
                    className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: "#F97316" }}
                  >
                    Explore DoodleNest <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </TapTarget>
                <TapTarget>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-600 transition hover:border-orange-400 hover:bg-orange-50"
                  >
                    Request a demo
                  </Link>
                </TapTarget>
              </div>
            </Reveal>

            <Reveal delay={0.1} direction="right">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/60 via-white to-white shadow-xl shadow-orange-100/30">
                  <DoodleNestIll className="aspect-[4/3] h-full w-full" />
                </div>
                <div className="absolute -bottom-3 -left-3 rounded-2xl border border-orange-100 bg-white px-4 py-2.5 shadow-lg sm:-bottom-5 sm:-left-5 sm:px-5 sm:py-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-orange-500">Active Schools</p>
                  <p className="mt-0.5 text-xl font-black text-slate-900 sm:text-2xl">500+</p>
                </div>
                <div className="absolute -right-3 -top-3 rounded-2xl border border-orange-100 bg-white px-4 py-2.5 shadow-lg sm:-right-5 sm:-top-5 sm:px-5 sm:py-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-orange-500">Students Reached</p>
                  <p className="mt-0.5 text-xl font-black text-slate-900 sm:text-2xl">50K+</p>
                </div>
              </div>
              {/* Contextual photo */}
              <div className="mt-8">
                <LazyImage
                  src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Teacher engaging with young children in colorful classroom"
                  ratio={16 / 7}
                  inView
                  AspectRatioClassName="border-orange-100"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <div className="grid grid-cols-3 gap-4 border-t border-orange-100 pt-8 sm:gap-8 sm:pt-12">
              {[
                { v: "500+", l: "Active schools & centres"  },
                { v: "50K+", l: "Students on the platform"  },
                { v: "98%",  l: "Parent satisfaction rate"  },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-black sm:text-4xl" style={{ color: "#F97316" }}>{s.v}</div>
                  <div className="mt-1 text-[10px] text-slate-400 sm:text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          02 — AI LEARNING — NENA AI
      ------------------------------------------------------------------ */}
      <section
        id="nena-ai"
        className="relative overflow-hidden bg-white"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 85% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute left-0 top-0 select-none font-black leading-[0.8] text-blue-50"
          style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
        >
          02
        </div>

        <div className="container-p relative z-10 py-16 sm:py-28 lg:py-36">
          <Reveal>
            <div className="mb-10 sm:mb-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-blue-600/50">02 — AI-Powered Product</p>
              <AnimatedLine className="bg-blue-500" />
            </div>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal direction="left">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/60 via-white to-white shadow-xl shadow-blue-50/60">
                  <NenaAIIll className="aspect-[4/3] h-full w-full" />
                </div>
                <div className="absolute -bottom-3 -right-3 rounded-2xl border border-blue-100 bg-white px-4 py-2.5 shadow-lg sm:-bottom-5 sm:-right-5 sm:px-5 sm:py-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-blue-600">Score Improvement</p>
                  <p className="mt-0.5 text-2xl font-black text-slate-900">+42%</p>
                </div>
              </div>
              {/* Contextual photo */}
              <div className="mt-8">
                <LazyImage
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80&fit=crop"
                  alt="Children learning together with tablets and technology"
                  ratio={16 / 7}
                  inView
                  AspectRatioClassName="border-blue-100"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="font-display font-black leading-[0.92] tracking-tight text-slate-900"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
              >
                AI tutoring that{" "}
                <em className="not-italic text-blue-600">adapts</em>{" "}
                to every student.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400">
                Nena AI personalises the learning journey for every student with adaptive
                content delivery, auto-graded assessments, real-time educator dashboards,
                and 24/7 AI-powered tutoring support.
              </p>
              <StaggerList className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {nenaFeatures.map((f) => (
                  <StaggerItem key={f.title} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{f.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{f.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
              <div className="mt-10 flex flex-wrap gap-4">
                <TapTarget>
                  <Link
                    href="/products/nena-ai"
                    className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: "#2563EB" }}
                  >
                    Explore Nena AI <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </TapTarget>
                <TapTarget>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600 transition hover:border-blue-400 hover:bg-blue-50"
                  >
                    Request a demo
                  </Link>
                </TapTarget>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <div className="grid grid-cols-2 gap-4 border-t border-blue-100 pt-8 sm:grid-cols-4 sm:gap-6 sm:pt-12">
              {[
                { v: "42%",  l: "Average score improvement" },
                { v: "3x",   l: "Faster content mastery"    },
                { v: "80%",  l: "Admin time reduction"       },
                { v: "24/7", l: "AI tutoring availability"   },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-black text-blue-600 sm:text-4xl">{s.v}</div>
                  <div className="mt-1 text-[10px] text-slate-400 sm:text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          03 — AUTOMOTIVE — AUTOFLOW
      ------------------------------------------------------------------ */}
      <section
        id="autoflow"
        className="relative overflow-hidden bg-slate-50/50"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(249,115,22,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 select-none font-black leading-[0.8] text-orange-50"
          style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
        >
          03
        </div>

        <div className="container-p relative z-10 py-16 sm:py-28 lg:py-36">
          <Reveal>
            <div className="mb-10 sm:mb-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-orange-500/50">03 — Automotive Product</p>
              <AnimatedLine style={{ background: "#F97316" }} />
            </div>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <h2
                className="font-display font-black leading-[0.92] tracking-tight text-slate-900"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
              >
                Garage management,{" "}
                <em className="not-italic" style={{ color: "#F97316" }}>
                  intelligently automated.
                </em>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400">
                AutoFlow is an AI-driven ERP built for the automotive service industry —
                real-time job tracking, intelligent bay allocation, customer portals,
                parts inventory, and multi-branch operations in one platform.
              </p>
              <StaggerList className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {autoflowFeatures.map((f) => (
                  <StaggerItem key={f.title} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{f.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{f.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
              <div className="mt-10 flex flex-wrap gap-4">
                <TapTarget>
                  <Link
                    href="/products/autoflow"
                    className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: "#F97316" }}
                  >
                    Explore AutoFlow <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </TapTarget>
                <TapTarget>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-600 transition hover:border-orange-400 hover:bg-orange-50"
                  >
                    Request a demo
                  </Link>
                </TapTarget>
              </div>
            </Reveal>

            <Reveal delay={0.1} direction="right">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/60 via-white to-white shadow-xl shadow-orange-50/60">
                  <AutoFlowIll className="aspect-[4/3] h-full w-full" />
                </div>
                <div className="absolute -left-3 -top-3 rounded-2xl border border-orange-100 bg-white px-4 py-2.5 shadow-lg sm:-left-5 sm:-top-5 sm:px-5 sm:py-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-orange-500">Efficiency Gain</p>
                  <p className="mt-0.5 text-2xl font-black text-slate-900">+40%</p>
                </div>
              </div>
              {/* Contextual photo */}
              <div className="mt-8">
                <LazyImage
                  src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mechanic using diagnostic tools in professional auto garage"
                  ratio={16 / 7}
                  inView
                  AspectRatioClassName="border-orange-100"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <div className="grid grid-cols-3 gap-4 border-t border-orange-100 pt-8 sm:gap-6 sm:pt-12">
              {[
                { v: "200+", l: "Garages & service stations" },
                { v: "95%",  l: "Customer satisfaction"       },
                { v: "40%",  l: "Operational efficiency gain" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-black sm:text-4xl" style={{ color: "#F97316" }}>{s.v}</div>
                  <div className="mt-1 text-[10px] text-slate-400 sm:text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          PHOTO DIVIDER — People & Innovation
      ------------------------------------------------------------------ */}
      <section className="relative h-[260px] overflow-hidden sm:h-[320px] lg:h-[400px]">
        <LazyImage
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80&fit=crop"
          alt="Creative team brainstorming innovative solutions"
          ratio={16 / 5}
          inView
          AspectRatioClassName="rounded-none border-0 h-full"
          className="h-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-white" />
        <div className="pointer-events-none absolute inset-0 bg-slate-900/10" />
      </section>

      {/* ------------------------------------------------------------------
          ABOUT WENTHURA
      ------------------------------------------------------------------ */}
      <section className="bg-white py-16 sm:py-28">
        <div className="container-p">
          <div className="grid gap-12 lg:grid-cols-[1fr,1.6fr] lg:items-center lg:gap-20">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                About Wenthura
              </p>
              <h2
                className="mt-4 font-display font-black text-slate-900"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: "0.93" }}
              >
                Technology that{" "}
                <span style={{ color: "#2563EB" }}>drives results.</span>
              </h2>
              {/* Team photo mosaic */}
              <div className="mt-8 grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80&fit=crop"
                    alt="Team collaborating on digital strategy at modern workspace"
                    ratio={16 / 9}
                    inView
                    AspectRatioClassName="rounded-xl"
                  />
                </div>
                <div>
                  <LazyImage
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80&fit=crop"
                    alt="Smiling technology professional"
                    ratio={3 / 4}
                    inView
                    AspectRatioClassName="rounded-xl"
                  />
                </div>
              </div>
              <TapTarget>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "#2563EB" }}
                >
                  Discover your solution <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </TapTarget>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-slate-400">
                <p>
                  Wenthura delivers intelligent, scalable technology through powerful automation
                  and trusted global partnerships — enabling businesses and educators to thrive
                  in an increasingly connected world.
                </p>
                <p>
                  Our products — DoodleNest, Nena AI, and AutoFlow — serve education,
                  AI learning, and automotive industries with deep domain expertise
                  and modern technology.
                </p>
                <p>
                  From strategy through to execution, Wenthura provides comprehensive
                  technology support backed by expert engineering and a commitment
                  to measurable outcomes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          FINAL CTA
      ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-36">
        <div className="absolute inset-0">
          <LazyImage
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80&fit=crop"
            alt="Modern technology workspace at night"
            ratio={16 / 9}
            inView
            className="opacity-20"
            AspectRatioClassName="rounded-none border-0 h-full"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="container-p relative z-10 text-center">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">
              Ready to begin?
            </p>
            <h2
              className="mx-auto mt-5 max-w-3xl font-display font-black text-white"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: "0.90" }}
            >
              Let&apos;s build{" "}
              <em className="not-italic" style={{ color: "#F97316" }}>
                what&apos;s next.
              </em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-slate-400">
              Whether you need enterprise technology services or a purpose-built product
              for your industry — our team is ready to help you get there.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <TapTarget>
                <a
                  href="mailto:hello@wenthura.lk"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900 transition hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  hello@wenthura.lk <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </TapTarget>
              <TapTarget>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-orange-400 hover:text-white"
                >
                  Explore our services
                </a>
              </TapTarget>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}