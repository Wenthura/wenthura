import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Brain, Target, BarChart2, Users, BookOpen, Shield, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { NenaAIIll } from "@/components/illustrations";
import { NenaHero } from "./NenaHero";

export const metadata: Metadata = {
  title: "Nena AI — AI-Powered Learning for Students & Institutions",
  description:
    "Nena AI empowers students and institutions with intelligent academic support — adaptive learning paths, smart assessments, and deep analytics for educators.",
};

const features = [
  {
    Icon: Brain,
    title: "Intelligent Academic Support",
    desc: "AI-powered tutoring across subjects. Nena understands each student's pace, gaps, and learning style to deliver targeted, personalized guidance.",
  },
  {
    Icon: Target,
    title: "Adaptive Learning Paths",
    desc: "Content that evolves with the learner. Assessments dynamically adjust difficulty and topics, ensuring every student is always optimally challenged.",
  },
  {
    Icon: BarChart2,
    title: "Assessment & Analytics",
    desc: "Smart assessments with detailed performance insights. Educators gain a real-time view of class performance, engagement, and at-risk students.",
  },
  {
    Icon: Users,
    title: "Institutional Dashboard",
    desc: "Manage students, courses, cohorts, and academic staff at scale. Full control across departments and branches from one unified platform.",
  },
  {
    Icon: BookOpen,
    title: "Content Library",
    desc: "Access a vast, curriculum-aligned library of learning materials, exercises, videos, and simulations — or upload your own custom content.",
  },
  {
    Icon: Shield,
    title: "Parent & Teacher Portal",
    desc: "Seamless collaboration tools for parents and educators. Share progress, set goals, schedule consultations, and track milestones together.",
  },
];

export default function NenaAIPage() {
  return (
    <>
      {/* ── Cinematic Video Hero ─────────────────────────────────────────── */}
      <NenaHero />

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0F1E40" }}>
        <div className="container-p">
          <Reveal className="mb-16 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] mb-3 inline-flex items-center gap-3" style={{ color: "#60A5FA" }}>
              <span className="h-px w-8 inline-block" style={{ background: "#60A5FA" }} />
              Platform Features
            </span>
            <h2 className="section-title mt-3 text-white">
              Intelligence at every stage of learning
            </h2>
            <p className="lead mx-auto text-center" style={{ color: "rgba(147,197,253,0.6)" }}>
              Nena AI brings together adaptive learning, real-time analytics, and collaborative
              tools into one seamless experience.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.Icon;
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl p-6 transition" style={{ background: "#1E3A8A18", border: "1px solid rgba(96,165,250,0.15)" }}>
                    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(59,130,246,0.15)", color: "#60A5FA" }}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(147,197,253,0.6)" }}>{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How Nena works ───────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0B1945" }}>
        <div className="container-p">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* mock UI panel */}
            <Reveal>
              <div className="rounded-2xl p-8" style={{ background: "#0F2460", border: "1px solid rgba(96,165,250,0.15)", boxShadow: "0 0 40px rgba(37,99,235,0.08)" }}>
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ background: "#60A5FA" }} />
                  <span className="text-xs font-mono" style={{ color: "#475569" }}>Nena AI · Student View</span>
                </div>
                {/* Student progress */}
                <div className="mb-5 rounded-xl p-4" style={{ background: "rgba(30,58,138,0.4)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white">Learning Path — Mathematics</span>
                    <span className="text-xs font-mono" style={{ color: "#60A5FA" }}>72% complete</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: "rgba(96,165,250,0.2)" }}>
                    <div className="h-full rounded-full" style={{ width: "72%", background: "linear-gradient(to right, #2563EB, #60A5FA)" }} />
                  </div>
                </div>
                {/* AI suggestion card */}
                <div className="mb-4 rounded-xl p-4" style={{ background: "rgba(30,58,138,0.3)", border: "1px solid rgba(96,165,250,0.15)" }}>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(37,99,235,0.3)" }}>
                      <Brain className="h-4 w-4" style={{ color: "#60A5FA" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white mb-1">Nena recommends</div>
                      <div className="text-xs leading-relaxed" style={{ color: "rgba(147,197,253,0.7)" }}>
                        Based on your recent quiz scores, I suggest revisiting <strong className="text-blue-300">Quadratic Equations</strong> before moving to Calculus.
                      </div>
                    </div>
                  </div>
                </div>
                {/* subject progress */}
                <div className="space-y-3">
                  {[
                    { subject: "Algebra",     pct: 88, color: "#22C55E" },
                    { subject: "Geometry",    pct: 74, color: "#60A5FA" },
                    { subject: "Statistics",  pct: 62, color: "#F59E0B" },
                    { subject: "Calculus",    pct: 31, color: "#F97316" },
                  ].map((s) => (
                    <div key={s.subject}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs" style={{ color: "rgba(248,250,252,0.6)" }}>{s.subject}</span>
                        <span className="text-xs font-mono" style={{ color: s.color }}>{s.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "rgba(96,165,250,0.1)" }}>
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] mb-3 inline-flex items-center gap-3" style={{ color: "#60A5FA" }}>
                <span className="h-px w-8 inline-block" style={{ background: "#60A5FA" }} />
                How It Works
              </span>
              <h2 className="section-title mt-3 text-white">
                Smart learning in four steps
              </h2>
              <div className="mt-10 space-y-0">
                {[
                  { step: "01", title: "Onboard Your Institution",     desc: "Set up your organization, import your curriculum, and add students, teachers, and courses in minutes." },
                  { step: "02", title: "Students Begin Learning",      desc: "Students start their personalized journey. Nena AI continuously assesses their level and adjusts content." },
                  { step: "03", title: "Educators Get Real-Time Data", desc: "Teachers and administrators receive live dashboards on performance, engagement, and learning gaps." },
                  { step: "04", title: "Outcomes Improve Over Time",   desc: "As more data is gathered, Nena AI becomes smarter — improving recommendations and outcomes institution-wide." },
                ].map((s, i, arr) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white" style={{ background: "#2563EB" }}>
                        {s.step}
                      </div>
                      {i < arr.length - 1 && <div className="mt-1 h-10 w-px" style={{ background: "rgba(37,99,235,0.25)" }} />}
                    </div>
                    <div className="pb-8">
                      <div className="font-semibold text-white">{s.title}</div>
                      <div className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(147,197,253,0.6)" }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0F1E40", borderTop: "1px solid rgba(96,165,250,0.1)" }}>
        <div className="container-p">
          <Reveal className="text-center mb-12">
            <h2 className="section-title text-white">The impact of intelligent learning</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "42%",  label: "Improvement in student scores"   },
              { stat: "3×",   label: "Faster learning progression"      },
              { stat: "80%",  label: "Reduction in educator admin time" },
              { stat: "24/7", label: "AI tutor availability"            },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(30,58,138,0.2)", border: "1px solid rgba(96,165,250,0.15)" }}>
                  <div className="display text-5xl" style={{ color: "#60A5FA" }}>{s.stat}</div>
                  <div className="mt-2 text-sm" style={{ color: "rgba(147,197,253,0.6)" }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(160deg, #1D4ED8 0%, #2563EB 50%, #1E40AF 100%)" }}>
        <div className="container-p text-center">
          <Reveal>
            <h2 className="display text-4xl text-white sm:text-5xl">
              Empower your students with Nena AI
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
              Join forward-thinking institutions already using Nena AI to deliver
              personalized, outcome-driven education at scale.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] shadow-xl transition-all hover:-translate-y-0.5"
                style={{ color: "#1D4ED8" }}
              >
                Start Free Trial <ArrowRight className="h-4 w-4" />
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
