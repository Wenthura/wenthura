import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, BookOpen, Users, BarChart2, MessageSquare, Calendar, Building2, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DoodleNestIll } from "@/components/illustrations";
import { DoodleNestHero } from "./DoodleNestHero";

export const metadata: Metadata = {
  title: "DoodleNest — Digital Platform for Early Learning Institutions",
  description:
    "DoodleNest brings joyful digital operations to early learning centers. Manage classrooms, track progress, communicate with parents, and plan activities with ease.",
};

const features = [
  {
    Icon: BookOpen,
    title: "Digital Classroom Management",
    desc: "Organize classes, teachers, and student profiles in one intuitive dashboard. Set up rooms, assign educators, and manage enrollments with ease.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    Icon: BarChart2,
    title: "Learning Progress Tracking",
    desc: "Real-time insights into each child's developmental milestones. Visualize growth across subjects and identify areas needing attention early.",
    color: "bg-green-100 text-green-700",
  },
  {
    Icon: MessageSquare,
    title: "Parent Communication Portal",
    desc: "Keep families engaged with instant updates, photo sharing, daily reports, and two-way messaging — all from a secure parent app.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    Icon: Calendar,
    title: "Activity & Curriculum Planning",
    desc: "Plan and schedule activities, lessons, and events with a drag-and-drop planner. Align curricula to developmental frameworks effortlessly.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    Icon: Users,
    title: "Attendance & Reports",
    desc: "Automated daily attendance tracking with one-tap check-in. Generate detailed reports for parents, staff, and regulatory requirements.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    Icon: Building2,
    title: "Multi-Branch Support",
    desc: "Manage multiple learning centers from a single admin dashboard. Centralize reporting, staff, and policies across all your locations.",
    color: "bg-amber-100 text-amber-700",
  },
];

const benefits = [
  "Reduce administrative overhead by up to 60%",
  "Increase parent satisfaction and retention",
  "Ensure regulatory compliance with automated reporting",
  "Scale from one center to a nationwide network",
];

export default function DoodleNestPage() {
  return (
    <>
      {/* ── Cinematic Video Hero ─────────────────────────────────────────── */}
      <DoodleNestHero />

      {/* ── About / Intro ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden" style={{ background: "#1a0a00" }}>
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 h-full w-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
            type="video/mp4"
          />
        </video>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#1a0a00]/80 via-transparent to-[#1a0a00]/80" />

        <div className="relative z-10 mx-auto max-w-[1831px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Left — heading */}
            <Reveal>
              <div className="relative">
                <h2
                  className="text-[32px] font-bold uppercase leading-[1.05] sm:text-[44px] md:text-[52px] lg:text-[60px]"
                  style={{ fontFamily: "var(--font-bricolage, system-ui)", color: "#FFF7ED" }}
                >
                  Hello!
                  <br />
                  Meet DoodleNest
                </h2>
                {/* Cursive accent — below heading */}
                <span
                  className="mt-2 block text-[36px] sm:text-[48px] lg:text-[68px] -rotate-1"
                  style={{ fontFamily: "var(--font-condiment)", color: "#FBBF24", opacity: 0.9 }}
                >
                  DoodleNest
                </span>
              </div>
            </Reveal>

            {/* Right — description */}
            <Reveal delay={0.1}>
              <p
                className="max-w-[266px] text-sm uppercase leading-relaxed sm:text-base"
                style={{ fontFamily: "var(--font-mono, monospace)", color: "#FFF7ED" }}
              >
                A digital platform crafted for early childhood education. An ecosystem of classroom management, development tracking, and family connection.
              </p>
            </Reveal>
          </div>

          {/* Stats bar */}
          <Reveal className="mt-20">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { stat: "500+", label: "Active Centres" },
                { stat: "50K+", label: "Students" },
                { stat: "98%", label: "Parent Satisfaction" },
                { stat: "60%", label: "Less Admin Time" },
              ].map((s) => (
                <div key={s.label} className="liquid-glass rounded-2xl px-5 py-6 text-center">
                  <div className="text-3xl font-bold sm:text-4xl" style={{ fontFamily: "var(--font-bricolage, system-ui)", color: "#FBBF24" }}>
                    {s.stat}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-mono, monospace)", color: "rgba(255,247,237,0.5)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Features Collection Grid ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: "#1a0a00" }}>
        <div className="mx-auto max-w-[1831px] px-6 sm:px-10 lg:px-16">
          {/* Section header */}
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2
                className="text-[32px] font-bold uppercase leading-[1.05] sm:text-[44px] md:text-[52px] lg:text-[60px]"
                style={{ fontFamily: "var(--font-bricolage, system-ui)", color: "#FFF7ED" }}
              >
                Everything your
                <br />
                <span className="ml-12 sm:ml-24 lg:ml-32">
                  <span style={{ fontFamily: "var(--font-condiment)", color: "#FBBF24", fontWeight: 400, textTransform: "none" }}>
                    centre
                  </span>{" "}
                  needs
                </span>
              </h2>

              <div className="flex-shrink-0">
                <div className="flex items-baseline gap-2" style={{ color: "#FFF7ED" }}>
                  <span className="text-[32px] font-bold uppercase sm:text-[44px] lg:text-[60px]" style={{ fontFamily: "var(--font-bricolage, system-ui)" }}>
                    See
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[20px] font-bold uppercase sm:text-[28px] lg:text-[36px]" style={{ fontFamily: "var(--font-bricolage, system-ui)" }}>all</span>
                    <span className="text-[20px] font-bold uppercase sm:text-[28px] lg:text-[36px]" style={{ fontFamily: "var(--font-bricolage, system-ui)" }}>features</span>
                  </div>
                </div>
                <div className="mt-2 h-[6px] w-full rounded-full sm:h-[8px] lg:h-[10px]" style={{ background: "#FBBF24" }} />
              </div>
            </div>
          </Reveal>

          {/* Feature cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.Icon;
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="liquid-glass group h-full rounded-[32px] p-[18px] transition-colors hover:bg-white/10">
                    <div className="relative overflow-hidden rounded-[24px] p-6" style={{ background: "rgba(251,191,36,0.05)" }}>
                      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(251,191,36,0.15)" }}>
                        <Icon className="h-5 w-5" style={{ color: "#FBBF24" }} />
                      </span>
                      <h3 className="text-base font-semibold" style={{ color: "#FFF7ED" }}>{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,247,237,0.5)" }}>{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: "#120700" }}>
        <div className="mx-auto max-w-[1831px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            {/* Steps */}
            <Reveal>
              <span
                className="mb-3 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em]"
                style={{ color: "#FBBF24" }}
              >
                <span className="inline-block h-px w-8" style={{ background: "#FBBF24" }} />
                How It Works
              </span>
              <h2
                className="mt-3 text-[32px] font-bold uppercase leading-[1.05] sm:text-[44px] lg:text-[52px]"
                style={{ fontFamily: "var(--font-bricolage, system-ui)", color: "#FFF7ED" }}
              >
                Simple to set up.{" "}
                <span style={{ fontFamily: "var(--font-condiment)", color: "#FBBF24", fontWeight: 400, textTransform: "none" }}>
                  Powerful
                </span>{" "}
                to use.
              </h2>
              <div className="mt-10 space-y-0">
                {[
                  { step: "01", title: "Onboard your center", desc: "Set up your institution, add branches, configure classes, and invite your team in minutes." },
                  { step: "02", title: "Enroll students & families", desc: "Import or manually add students and link parent accounts. Everything is secure and private." },
                  { step: "03", title: "Run your operations", desc: "Manage attendance, track learning, plan activities, and communicate — all in one place." },
                  { step: "04", title: "Grow with insights", desc: "Use detailed analytics to improve outcomes, report to regulators, and scale your institution." },
                ].map((s, i, arr) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                        style={{ background: "#F97316" }}
                      >
                        {s.step}
                      </div>
                      {i < arr.length - 1 && <div className="mt-1 h-10 w-px" style={{ background: "rgba(249,115,22,0.25)" }} />}
                    </div>
                    <div className="pb-8">
                      <div className="font-semibold" style={{ color: "#FFF7ED" }}>{s.title}</div>
                      <div className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(255,247,237,0.5)" }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Mock dashboard */}
            <Reveal delay={0.1}>
              <div className="liquid-glass rounded-[32px] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs font-mono" style={{ color: "rgba(255,247,237,0.3)" }}>DoodleNest Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl p-4" style={{ background: "rgba(251,191,36,0.08)" }}>
                    <div>
                      <div className="text-xs uppercase tracking-wide font-mono" style={{ color: "rgba(251,191,36,0.7)" }}>Total Students</div>
                      <div className="text-2xl font-bold" style={{ color: "#FFF7ED" }}>148</div>
                    </div>
                    <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(251,191,36,0.15)" }}>
                      <Users className="h-5 w-5" style={{ color: "#FBBF24" }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl p-4" style={{ background: "rgba(34,197,94,0.08)" }}>
                      <div className="text-xs uppercase tracking-wide font-mono" style={{ color: "rgba(34,197,94,0.7)" }}>Present Today</div>
                      <div className="text-xl font-bold" style={{ color: "#FFF7ED" }}>132</div>
                      <div className="mt-1 h-1.5 rounded-full" style={{ background: "rgba(34,197,94,0.15)" }}>
                        <div className="h-full w-[89%] rounded-full" style={{ background: "#22C55E" }} />
                      </div>
                    </div>
                    <div className="rounded-xl p-4" style={{ background: "rgba(59,130,246,0.08)" }}>
                      <div className="text-xs uppercase tracking-wide font-mono" style={{ color: "rgba(59,130,246,0.7)" }}>Activities Today</div>
                      <div className="text-xl font-bold" style={{ color: "#FFF7ED" }}>6</div>
                    </div>
                  </div>
                  <div className="rounded-xl p-4" style={{ border: "1px solid rgba(255,247,237,0.06)" }}>
                    <div className="text-xs uppercase tracking-wide font-mono mb-2" style={{ color: "rgba(251,191,36,0.6)" }}>Recent Progress</div>
                    {[["Amara S.", "Math", 92], ["Leo P.", "Reading", 87], ["Zara K.", "Art", 95]].map(([name, subj, score]) => (
                      <div key={name as string} className="flex items-center justify-between py-1.5" style={{ borderBottom: "1px solid rgba(255,247,237,0.04)" }}>
                        <span className="text-sm" style={{ color: "#FFF7ED" }}>{name as string}</span>
                        <span className="text-xs" style={{ color: "rgba(255,247,237,0.4)" }}>{subj as string}</span>
                        <span className="text-sm font-semibold" style={{ color: "#22C55E" }}>{score as number}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why DoodleNest (stats) ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: "#1a0a00" }}>
        <div className="mx-auto max-w-[1831px] px-6 sm:px-10 lg:px-16">
          <Reveal className="text-center mb-12">
            <span
              className="mb-3 inline-flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em]"
              style={{ color: "#FBBF24" }}
            >
              <span className="inline-block h-px w-8" style={{ background: "#FBBF24" }} />
              Why DoodleNest
              <span className="inline-block h-px w-8" style={{ background: "#FBBF24" }} />
            </span>
            <h2
              className="mt-3 text-[32px] font-bold uppercase leading-[1.05] sm:text-[44px] lg:text-[52px]"
              style={{ fontFamily: "var(--font-bricolage, system-ui)", color: "#FFF7ED" }}
            >
              The results speak for themselves
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "60%", label: "Reduction in admin time" },
              { stat: "3×", label: "Parent engagement increase" },
              { stat: "100%", label: "Cloud-based & mobile-ready" },
              { stat: "24/7", label: "Platform availability" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className="liquid-glass rounded-[32px] p-6 text-center transition-colors hover:bg-white/10">
                  <div className="text-5xl font-bold" style={{ fontFamily: "var(--font-bricolage, system-ui)", color: "#FBBF24" }}>{s.stat}</div>
                  <div className="mt-2 text-sm" style={{ color: "rgba(255,247,237,0.5)" }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="liquid-glass rounded-[32px] p-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#FFF7ED" }}>Why institutions choose DoodleNest</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,247,237,0.6)" }}>
                    <CheckCircle className="h-4 w-4 shrink-0" style={{ color: "#FBBF24" }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA — Video Section ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "#1a0a00" }}>
        <video
          autoPlay loop muted playsInline
          className="block h-auto w-full"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
            type="video/mp4"
          />
        </video>

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-end px-6 sm:px-10 lg:pl-[15%] lg:pr-[20%]">
          <div className="relative text-right">
            {/* Cursive accent — above heading */}
            <span
              className="mb-2 block text-[17px] sm:text-[36px] lg:text-[68px] text-left -rotate-1"
              style={{ fontFamily: "var(--font-condiment)", color: "#FBBF24", opacity: 0.9 }}
            >
              Go beyond
            </span>

            <h2
              className="text-[16px] font-bold uppercase leading-[1.15] sm:text-[32px] md:text-[44px] lg:text-[60px]"
              style={{ fontFamily: "var(--font-bricolage, system-ui)", color: "#FFF7ED" }}
            >
              <span className="mb-4 block sm:mb-8 lg:mb-12">Transform your center.</span>
              Nurture what matters.
              <br />
              Define what&apos;s next.
              <br />
              Follow the path.
            </h2>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-4 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(to bottom, #F97316, #EA580C)",
                  boxShadow: "inset -4px -6px 25px 0px rgba(201,201,201,0.08), inset 4px 4px 10px 0px rgba(29,29,29,0.24)",
                }}
              >
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:hello@wenthura.lk"
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all hover:bg-white/10"
                style={{ color: "#FFF7ED" }}
              >
                Email Us <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
