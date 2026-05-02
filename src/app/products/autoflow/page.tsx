import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Layers,
  Eye,
  Package,
  Cpu,
  BarChart2,
  Wrench,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AutoFlowHero } from "./AutoFlowHero";

export const metadata: Metadata = {
  title: "AutoFlow \u2014 AI-Driven Automotive ERP for Service Stations & Garages",
  description:
    "AutoFlow brings intelligent automation to auto service stations and garages \u2014 real-time job tracking, bay management, customer visibility, and streamlined operations.",
};

/* ── palette ── */
const c = {
  bg: "#010101",
  surface: "#0A0A0A",
  surfaceAlt: "#111111",
  border: "rgba(255,255,255,0.08)",
  fg: "#ffffff",
  muted: "rgba(255,255,255,0.45)",
  accent: "#F97316",
  accentFg: "#000000",
};

const clipBtn =
  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))";

const glass = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow:
    "inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.3)",
} as const;

const interFont = {
  fontFamily:
    "var(--font-sora), var(--font-inter), ui-sans-serif, system-ui, sans-serif",
  fontFeatureSettings: "'ss01' 1, 'cv11' 1",
  letterSpacing: "-0.005em",
};

const displayFont = {
  fontFamily:
    "var(--font-bricolage), ui-sans-serif, system-ui, sans-serif",
  fontFeatureSettings: "'ss01' 1, 'ss02' 1, 'cv11' 1",
};

const serifAccent = {
  fontFamily:
    "var(--font-instrument), ui-serif, Georgia, serif",
  fontStyle: "italic" as const,
  fontWeight: 400,
};

const monoFont = {
  fontFamily:
    "var(--font-mono), 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
  fontFeatureSettings: "'zero' 1, 'ss02' 1",
};

const features = [
  {
    Icon: Activity,
    title: "Real-Time Job Tracking",
    desc: "Monitor every service job from intake to delivery with live status updates across all bays.",
  },
  {
    Icon: Layers,
    title: "Smart Bay Management",
    desc: "Intelligent allocation of service bays and technicians \u2014 maximizing throughput automatically.",
  },
  {
    Icon: Eye,
    title: "Customer Visibility Portal",
    desc: "Branded live job-status portal. Reduce phone calls and build trust through real-time transparency.",
  },
  {
    Icon: Package,
    title: "Inventory & Parts",
    desc: "Real-time parts tracking, auto reorder triggers, and accurate stock across all locations.",
  },
  {
    Icon: Cpu,
    title: "AI Diagnostics",
    desc: "Smart fault detection and service recommendations based on vehicle history and sensor data.",
  },
  {
    Icon: BarChart2,
    title: "Revenue Analytics",
    desc: "Track performance, revenue per bay, and service trends to make data-driven decisions.",
  },
];

export default function AutoFlowPage() {
  return (
    <div style={{ ...interFont, background: c.bg }}>
      {/* ── Hero ── */}
      <AutoFlowHero />

      {/* ── About / Trust Bar ── */}
      <section className="py-20 sm:py-28" style={{ background: c.bg }}>
        <div className="mx-auto max-w-6xl px-8 sm:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p
                  className="text-[11px] font-medium uppercase tracking-[0.22em] mb-4"
                  style={{ ...monoFont, color: c.accent }}
                >
                  About the Platform
                </p>
              </Reveal>
              <Reveal>
                <h2
                  className="leading-[0.98] mb-5"
                  style={{
                    ...displayFont,
                    fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                    fontWeight: 500,
                    color: c.fg,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Intelligent ERP for
                  <br />
                  <span
                    style={{
                      ...serifAccent,
                      color: c.accent,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    auto service
                  </span>
                </h2>
              </Reveal>
              <Reveal>
                <p
                  className="font-light leading-relaxed max-w-md"
                  style={{ fontSize: "0.975rem", color: c.muted, fontWeight: 350 }}
                >
                  AutoFlow is an intelligent platform engineered for modern
                  workshops. Real-time operations, smart bay management, and
                  seamless customer experience — deployed in days, not
                  months.
                </p>
              </Reveal>
            </div>

            {/* Stats */}
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: "200+", label: "Service Stations" },
                  { stat: "40%", label: "Efficiency Gain" },
                  { stat: "95%", label: "Satisfaction" },
                  { stat: "2\u00D7", label: "Faster Turnaround" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-5"
                    style={{ ...glass, borderRadius: "2px" }}
                  >
                    <div
                      className="text-3xl sm:text-4xl"
                      style={{
                        ...displayFont,
                        fontWeight: 500,
                        letterSpacing: "-0.04em",
                        color: c.accent,
                      }}
                    >
                      {s.stat}
                    </div>
                    <div
                      className="mt-1.5 text-[10px] uppercase tracking-[0.22em]"
                      style={{ ...monoFont, color: c.muted }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features"
        className="py-20 sm:py-28"
        style={{ background: c.surface }}
      >
        <div className="mx-auto max-w-6xl px-8 sm:px-16">
          <Reveal>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.22em] mb-4"
              style={{ ...monoFont, color: c.accent }}
            >
              Core Features
            </p>
          </Reveal>
          <Reveal>
            <h2
              className="leading-[0.98] mb-3"
              style={{
                ...displayFont,
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 500,
                color: c.fg,
                letterSpacing: "-0.04em",
              }}
            >
              Built for the{" "}
              <span
                style={{
                  ...serifAccent,
                  color: c.accent,
                  letterSpacing: "-0.02em",
                }}
              >
                modern workshop
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p
              className="max-w-lg leading-relaxed mb-12"
              style={{ fontSize: "0.975rem", color: c.muted, fontWeight: 350 }}
            >
              Every feature eliminates friction, reduces downtime, and
              maximizes revenue.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.Icon;
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div
                    className="group h-full p-5 transition-all hover:border-orange-500/20"
                    style={{ ...glass, borderRadius: "2px" }}
                  >
                    <span
                      className="mb-4 inline-flex h-9 w-9 items-center justify-center"
                      style={{
                        background: "rgba(249,115,22,0.12)",
                        clipPath: clipBtn,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{ color: c.accent }}
                      />
                    </span>
                    <h3
                      className="text-[15px] mb-1.5"
                      style={{ color: c.fg, fontWeight: 500, letterSpacing: "-0.01em" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-[12.5px] leading-relaxed"
                      style={{ color: c.muted, fontWeight: 350 }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 sm:py-28" style={{ background: c.bg }}>
        <div className="mx-auto max-w-6xl px-8 sm:px-16">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <Reveal>
                <p
                  className="text-[11px] font-medium uppercase tracking-[0.22em] mb-4"
                  style={{ ...monoFont, color: c.accent }}
                >
                  Workflow
                </p>
              </Reveal>
              <Reveal>
                <h2
                  className="leading-[0.98] mb-10"
                  style={{
                    ...displayFont,
                    fontSize: "clamp(2rem, 4.5vw, 3rem)",
                    fontWeight: 500,
                    color: c.fg,
                    letterSpacing: "-0.04em",
                  }}
                >
                  From check-in
                  <br />
                  to{" "}
                  <span
                    style={{
                      ...serifAccent,
                      color: c.accent,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    sign-off
                  </span>
                </h2>
              </Reveal>
              {[
                {
                  step: "01",
                  title: "Vehicle Check-In",
                  desc: "Scan the vehicle, log details, capture customer info. AI pre-fills service history.",
                },
                {
                  step: "02",
                  title: "Bay Assignment",
                  desc: "AutoFlow assigns the optimal bay and technician based on job type and load.",
                },
                {
                  step: "03",
                  title: "Live Job Tracking",
                  desc: "Real-time status updates. Customers get automated notifications at each milestone.",
                },
                {
                  step: "04",
                  title: "Quality & Sign-off",
                  desc: "Digital checklists for QC. Invoices generated and sent automatically.",
                },
              ].map((s, i, arr) => (
                <Reveal key={s.step} delay={i * 0.06}>
                  <div className="flex gap-4 mb-1">
                    <div className="flex flex-col items-center">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center text-[11px] font-bold text-black"
                        style={{
                          background: c.accent,
                          clipPath: clipBtn,
                        }}
                      >
                        {s.step}
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          className="mt-1 h-10 w-px"
                          style={{
                            background: "rgba(249,115,22,0.15)",
                          }}
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <div
                        className="text-[15px]"
                        style={{ color: c.fg, fontWeight: 500, letterSpacing: "-0.01em" }}
                      >
                        {s.title}
                      </div>
                      <div
                        className="mt-1 text-[12.5px] leading-relaxed"
                        style={{ color: c.muted, fontWeight: 350 }}
                      >
                        {s.desc}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Live Dashboard panel */}
            <Reveal delay={0.1}>
              <div className="p-6" style={{ ...glass, borderRadius: "2px" }}>
                <div className="mb-5 flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ background: "#22C55E" }}
                  />
                  <span
                    className="text-[10px] uppercase tracking-[0.22em]"
                    style={{ ...monoFont, color: c.muted }}
                  >
                    Live Dashboard
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {[
                    {
                      label: "Active Jobs",
                      value: "12",
                      color: c.accent,
                    },
                    {
                      label: "Bays Occupied",
                      value: "8/10",
                      color: "#F59E0B",
                    },
                    {
                      label: "Avg. TAT",
                      value: "2.4h",
                      color: "#22C55E",
                    },
                    {
                      label: "Today Revenue",
                      value: "$3.8K",
                      color: "#60A5FA",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3.5"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: "2px",
                      }}
                    >
                      <div
                        className="text-[10px] uppercase tracking-[0.2em]"
                        style={{ ...monoFont, color: c.muted }}
                      >
                        {stat.label}
                      </div>
                      <div
                        className="mt-1 text-2xl"
                        style={{
                          ...displayFont,
                          fontWeight: 500,
                          letterSpacing: "-0.03em",
                          color: stat.color,
                        }}
                      >
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {[
                    {
                      bay: "Bay 01",
                      job: "Full Service \u2014 Toyota Camry",
                      pct: 75,
                      active: true,
                    },
                    {
                      bay: "Bay 02",
                      job: "Tyre Rotation \u2014 Honda Civic",
                      pct: 40,
                      active: true,
                    },
                    {
                      bay: "Bay 03",
                      job: "Available",
                      pct: 0,
                      active: false,
                    },
                    {
                      bay: "Bay 04",
                      job: "Brake Service \u2014 Ford F-150",
                      pct: 90,
                      active: true,
                    },
                  ].map((b) => (
                    <div
                      key={b.bay}
                      className="flex items-center gap-3 p-2"
                      style={{
                        background: b.active
                          ? "rgba(249,115,22,0.04)"
                          : "transparent",
                        borderRadius: "2px",
                      }}
                    >
                      <span
                        className="w-12 shrink-0 text-[10px]"
                        style={{
                          ...monoFont,
                          color: b.active
                            ? c.accent
                            : "rgba(255,255,255,0.2)",
                        }}
                      >
                        {b.bay}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-[12px] truncate"
                          style={{
                            color: b.active
                              ? "rgba(255,255,255,0.65)"
                              : "rgba(255,255,255,0.2)",
                            fontWeight: 400,
                          }}
                        >
                          {b.job}
                        </div>
                        {b.active && (
                          <div
                            className="mt-1 h-1 rounded-full"
                            style={{
                              background: "rgba(249,115,22,0.12)",
                            }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${b.pct}%`,
                                background: c.accent,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section
        className="py-20 sm:py-28"
        style={{
          background: c.surface,
          borderTop: `1px solid ${c.border}`,
        }}
      >
        <div className="mx-auto max-w-6xl px-8 sm:px-16 text-center">
          <Reveal>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.22em] mb-4"
              style={{ ...monoFont, color: c.accent }}
            >
              Results
            </p>
          </Reveal>
          <Reveal>
            <h2
              className="leading-[0.98] mb-12"
              style={{
                ...displayFont,
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 500,
                color: c.fg,
                letterSpacing: "-0.04em",
              }}
            >
              What AutoFlow{" "}
              <span
                style={{
                  ...serifAccent,
                  color: c.accent,
                  letterSpacing: "-0.02em",
                }}
              >
                delivers
              </span>
            </h2>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "35%", label: "Bay utilization increase" },
              { stat: "50%", label: "Fewer complaints" },
              { stat: "2\u00D7", label: "Faster turnaround" },
              { stat: "99.9%", label: "Platform uptime" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div
                  className="p-6 text-center transition-all"
                  style={{ ...glass, borderRadius: "2px" }}
                >
                  <div
                    className="text-3xl sm:text-4xl"
                    style={{
                      ...displayFont,
                      fontWeight: 500,
                      letterSpacing: "-0.04em",
                      color: c.accent,
                    }}
                  >
                    {s.stat}
                  </div>
                  <div
                    className="mt-2 text-xs"
                    style={{ color: c.muted, fontWeight: 350 }}
                  >
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: c.bg }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260213_051817_c7d8ccc6-bfaa-417c-8474-e5cefeea26b4.mp4"
            type="video/mp4"
          />
        </video>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-8 py-24 sm:px-16 sm:py-32">
          <div className="max-w-lg">
            <Reveal>
              <p
                className="text-[11px] font-medium uppercase tracking-[0.22em] mb-4"
                style={{ ...monoFont, color: c.accent }}
              >
                Get Started
              </p>
            </Reveal>
            <Reveal>
              <h2
                className="leading-[0.98] mb-5"
                style={{
                  ...displayFont,
                  fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                  fontWeight: 500,
                  color: c.fg,
                  letterSpacing: "-0.04em",
                }}
              >
                Ready to modernize
                <br />
                your{" "}
                <span
                  style={{
                    ...serifAccent,
                    color: c.accent,
                    letterSpacing: "-0.02em",
                  }}
                >
                  station?
                </span>
              </h2>
            </Reveal>
            <Reveal>
              <p
                className="leading-relaxed mb-7"
                style={{ fontSize: "0.975rem", color: c.muted, fontWeight: 350 }}
              >
                Get AutoFlow running in your garage. Our team handles
                onboarding and training so you can focus on the cars.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-white transition-all hover:brightness-110 active:scale-[0.97]"
                  style={{ ...monoFont, background: c.accent, clipPath: clipBtn, fontWeight: 500 }}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:hello@wenthura.lk"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-black transition-all hover:brightness-90 active:scale-[0.97]"
                  style={{ ...monoFont, background: "#fff", clipPath: clipBtn, fontWeight: 500 }}
                >
                  Email Us <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
