import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Activity, Layers, Eye, Package, Cpu, BarChart2, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AutoFlowIll } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "AutoFlow — AI-Driven Automotive ERP for Service Stations & Garages",
  description:
    "AutoFlow brings intelligent automation to auto service stations and garages — real-time job tracking, bay management, customer visibility, and streamlined operations.",
};

const features = [
  {
    Icon: Activity,
    title: "Real-Time Job Tracking",
    desc: "Monitor every service job from intake to delivery. Live status updates ensure your team and customers always know what's happening.",
  },
  {
    Icon: Layers,
    title: "Bay Management",
    desc: "Intelligent allocation of service bays and technicians based on job type, priority, and availability — maximizing throughput.",
  },
  {
    Icon: Eye,
    title: "Customer Visibility Portal",
    desc: "Keep customers informed with a branded live job-status portal. Reduce inbound calls and build trust through transparency.",
  },
  {
    Icon: Package,
    title: "Inventory & Parts Management",
    desc: "Track parts in real time, automate reorder triggers, reduce waste, and maintain accurate stock levels across all bays.",
  },
  {
    Icon: Cpu,
    title: "AI-Powered Diagnostics",
    desc: "Smart fault detection and service recommendations based on vehicle history and sensor data — empowering technicians to work faster.",
  },
  {
    Icon: BarChart2,
    title: "Revenue Analytics",
    desc: "Track performance, revenue per bay, technician efficiency, and service trends. Make data-driven decisions to grow your business.",
  },
];

export default function AutoFlowPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-28" style={{ background: "#060A14" }}>
        {/* orange glow */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />

        {/* grid overlay */}
        <div className="pointer-events-none absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="container-p relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest" style={{ borderColor: "rgba(249,115,22,0.3)", background: "rgba(249,115,22,0.1)", color: "#F97316" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#F97316" }} />
                  Automotive ERP
                </div>
                <h1 className="display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
                  Your garage,{" "}
                  <span className="italic" style={{ color: "#F97316" }}>intelligently</span>{" "}
                  managed.
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "rgba(248,250,252,0.6)" }}>
                  AutoFlow brings AI-driven automation to auto service stations and garages —
                  real-time job tracking, bay management, customer visibility, and streamlined
                  operations from intake to delivery.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-lg px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg transition-all hover:-translate-y-0.5"
                    style={{ background: "#F97316", boxShadow: "0 4px 20px -4px rgba(249,115,22,0.5)" }}
                  >
                    Request a Demo <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:hello@wenthura.lk"
                    className="inline-flex items-center gap-2 rounded-lg border px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all hover:-translate-y-0.5"
                    style={{ borderColor: "rgba(249,115,22,0.3)", color: "#F97316" }}
                  >
                    Talk to Sales
                  </a>
                </div>
                <ul className="mt-10 space-y-2">
                  {["Cloud-based · Mobile-ready · Multi-location", "AI diagnostics & predictive maintenance support"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(248,250,252,0.55)" }}>
                      <CheckCircle className="h-4 w-4 shrink-0" style={{ color: "#F97316" }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl aspect-video" style={{ border: "1px solid rgba(249,115,22,0.2)", boxShadow: "0 0 60px rgba(249,115,22,0.08)" }}>
                <AutoFlowIll className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0A0F1A" }}>
        <div className="container-p">
          <Reveal className="mb-16 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] mb-3 inline-flex items-center gap-3" style={{ color: "#F97316" }}>
              <span className="h-px w-8 inline-block" style={{ background: "#F97316" }} />
              Core Features
            </span>
            <h2 className="section-title mt-3 text-white">Built for the modern workshop</h2>
            <p className="lead mx-auto text-center" style={{ color: "rgba(248,250,252,0.5)" }}>
              Every feature in AutoFlow is designed to eliminate friction, reduce downtime, and maximize revenue.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.Icon;
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl p-6 transition hover:border-orange-500/30" style={{ background: "#0F172A", border: "1px solid rgba(30,41,59,1)" }}>
                    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(249,115,22,0.12)", color: "#F97316" }}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(248,250,252,0.5)" }}>{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#060A14" }}>
        <div className="container-p">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] mb-3 inline-flex items-center gap-3" style={{ color: "#F97316" }}>
                <span className="h-px w-8 inline-block" style={{ background: "#F97316" }} />
                Workflow
              </span>
              <h2 className="section-title mt-3 text-white">From check-in to sign-off</h2>
              <div className="mt-10 space-y-0">
                {[
                  { step: "01", title: "Vehicle Check-In",    desc: "Scan the vehicle, log details, and capture customer information in seconds. AI pre-fills service history." },
                  { step: "02", title: "Bay Assignment",       desc: "AutoFlow automatically assigns the optimal bay and technician based on job type and current load." },
                  { step: "03", title: "Live Job Tracking",    desc: "Technicians update job status in real-time. Customers receive automated notifications at each milestone." },
                  { step: "04", title: "Quality & Sign-off",   desc: "Digital checklists ensure quality control. Invoices are generated automatically and sent to the customer." },
                ].map((s, i, arr) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white" style={{ background: "#F97316" }}>
                        {s.step}
                      </div>
                      {i < arr.length - 1 && <div className="mt-1 h-10 w-px" style={{ background: "rgba(249,115,22,0.2)" }} />}
                    </div>
                    <div className="pb-8">
                      <div className="font-semibold text-white">{s.title}</div>
                      <div className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(248,250,252,0.5)" }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Stats panel */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl p-8" style={{ background: "#0F172A", border: "1px solid rgba(249,115,22,0.15)" }}>
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ background: "#22C55E" }} />
                  <span className="text-xs font-mono" style={{ color: "#64748B" }}>AutoFlow Live Dashboard</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Active Jobs",    value: "12",  color: "#F97316" },
                    { label: "Bays Occupied",  value: "8/10",color: "#F59E0B" },
                    { label: "Avg. TAT",       value: "2.4h",color: "#22C55E" },
                    { label: "Today Revenue",  value: "$3.8K",color: "#60A5FA" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl p-4" style={{ background: "#060A14" }}>
                      <div className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "#64748B" }}>{stat.label}</div>
                      <div className="mt-1 text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    </div>
                  ))}
                </div>
                {/* bay status bars */}
                <div className="space-y-2">
                  {[
                    { bay: "Bay 01", job: "Full Service — Toyota Camry",  pct: 75, active: true  },
                    { bay: "Bay 02", job: "Tyre Rotation — Honda Civic",  pct: 40, active: true  },
                    { bay: "Bay 03", job: "Available",                    pct: 0,  active: false },
                    { bay: "Bay 04", job: "Brake Service — Ford F-150",   pct: 90, active: true  },
                  ].map((b) => (
                    <div key={b.bay} className="flex items-center gap-3 rounded-lg p-2.5" style={{ background: b.active ? "rgba(249,115,22,0.05)" : "transparent" }}>
                      <span className="text-[10px] font-mono w-12 shrink-0" style={{ color: b.active ? "#F97316" : "#475569" }}>{b.bay}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs truncate" style={{ color: b.active ? "rgba(248,250,252,0.7)" : "#475569" }}>{b.job}</div>
                        {b.active && (
                          <div className="mt-1 h-1 rounded-full" style={{ background: "rgba(249,115,22,0.2)" }}>
                            <div className="h-full rounded-full" style={{ width: `${b.pct}%`, background: "#F97316" }} />
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

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0A0F1A", borderTop: "1px solid rgba(249,115,22,0.1)" }}>
        <div className="container-p">
          <Reveal className="text-center mb-12">
            <h2 className="section-title text-white">What AutoFlow delivers</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "35%",  label: "Increase in bay utilization"  },
              { stat: "50%",  label: "Fewer customer complaints"     },
              { stat: "2×",   label: "Faster vehicle turnaround"     },
              { stat: "99.9%",label: "Platform uptime"               },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className="rounded-2xl p-6 text-center" style={{ background: "#0F172A", border: "1px solid rgba(249,115,22,0.15)" }}>
                  <div className="display text-5xl" style={{ color: "#F97316" }}>{s.stat}</div>
                  <div className="mt-2 text-sm" style={{ color: "rgba(248,250,252,0.5)" }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)" }}>
        <div className="container-p text-center">
          <Reveal>
            <h2 className="display text-4xl text-white sm:text-5xl">
              Ready to modernize your service station?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
              Get AutoFlow running in your garage. Our team handles onboarding
              and training so you can focus on the cars.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] shadow-xl transition-all hover:-translate-y-0.5"
                style={{ color: "#EA580C" }}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:hello@wenthura.lk"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/60 hover:-translate-y-0.5"
              >
                Email Us <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
