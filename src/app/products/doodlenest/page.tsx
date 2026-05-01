import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, BookOpen, Users, BarChart2, MessageSquare, Calendar, Building2, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DoodleNestIll } from "@/components/illustrations";

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
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-28" style={{ background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 40%, #FDE68A 100%)" }}>
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #22C55E 0%, transparent 70%)" }} />

        <div className="container-p relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-amber-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Edutech Platform
                </div>
                <h1 className="display text-5xl leading-[1.05] text-amber-900 sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
                  Where every child&apos;s{" "}
                  <span className="italic" style={{ color: "#F97316" }}>journey begins</span>{" "}
                  with{" "}
                  <span className="italic text-green-600">joy.</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-amber-800/70">
                  DoodleNest is the all-in-one digital platform for early learning institutions —
                  simplifying operations, deepening learning, and connecting families.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-lg px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg transition-all hover:-translate-y-0.5"
                    style={{ background: "#F97316" }}
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-amber-400 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-800 transition hover:bg-amber-100">
                    Book a Demo
                  </Link>
                </div>
                <ul className="mt-10 space-y-2">
                  {["Built for nurseries, kindergartens & preschools", "Cloud-based · Secure · Mobile-ready"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-amber-700">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border-2 border-amber-200 shadow-2xl aspect-video">
                <DoodleNestIll className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-p">
          <Reveal className="mb-16 text-center">
            <span className="eyebrow justify-center" style={{ color: "#F97316" }}>
              <span className="h-px w-8 inline-block" style={{ background: "#F97316" }} />
              Features
            </span>
            <h2 className="section-title mt-3 text-amber-900">
              Everything your center needs
            </h2>
            <p className="lead mx-auto text-center text-amber-800/70">
              DoodleNest handles the complexity so your educators can focus on what matters — the children.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.Icon;
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-amber-100 bg-amber-50 p-6 transition hover:shadow-md">
                    <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${f.color}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-amber-900">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-amber-800/65">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(to bottom, #FFFBEB, #FEF9EE)" }}>
        <div className="container-p">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="eyebrow" style={{ color: "#22C55E" }}>
                <span className="inline-block h-px w-8 bg-green-500" />
                How It Works
              </span>
              <h2 className="section-title mt-3 text-amber-900">
                Simple to set up. Powerful to use.
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  { step: "01", title: "Onboard your center", desc: "Set up your institution, add branches, configure classes, and invite your team in minutes." },
                  { step: "02", title: "Enroll students & families", desc: "Import or manually add students and link parent accounts. Everything is secure and private." },
                  { step: "03", title: "Run your operations", desc: "Manage attendance, track learning, plan activities, and communicate with families — all in one place." },
                  { step: "04", title: "Grow with insights", desc: "Use detailed analytics to improve outcomes, report to regulators, and scale your institution." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold" style={{ background: "#FBBF24", color: "white" }}>
                      {s.step}
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900">{s.title}</div>
                      <div className="mt-1 text-sm text-amber-800/65">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-amber-200 bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-amber-600 font-mono">DoodleNest Dashboard</span>
                </div>
                {/* mock dashboard */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-amber-50 p-4">
                    <div>
                      <div className="text-xs text-amber-600 font-mono uppercase tracking-wide">Total Students</div>
                      <div className="text-2xl font-bold text-amber-900">148</div>
                    </div>
                    <div className="h-10 w-10 rounded-lg bg-amber-200 flex items-center justify-center text-amber-700"><Users className="h-5 w-5" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-green-50 p-4">
                      <div className="text-xs text-green-700 font-mono uppercase tracking-wide">Present Today</div>
                      <div className="text-xl font-bold text-green-800">132</div>
                      <div className="mt-1 h-1.5 rounded-full bg-green-200"><div className="h-full w-[89%] rounded-full bg-green-500" /></div>
                    </div>
                    <div className="rounded-xl bg-blue-50 p-4">
                      <div className="text-xs text-blue-700 font-mono uppercase tracking-wide">Activities Today</div>
                      <div className="text-xl font-bold text-blue-800">6</div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-amber-100 p-4">
                    <div className="text-xs text-amber-700 font-mono uppercase tracking-wide mb-2">Recent Progress</div>
                    {[["Amara S.", "Math", 92], ["Leo P.", "Reading", 87], ["Zara K.", "Art", 95]].map(([name, subj, score]) => (
                      <div key={name as string} className="flex items-center justify-between py-1.5 border-b border-amber-50 last:border-0">
                        <span className="text-sm text-amber-900">{name as string}</span>
                        <span className="text-xs text-amber-600">{subj as string}</span>
                        <span className="text-sm font-semibold text-green-600">{score as number}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why DoodleNest ───────────────────────────────────────────────── */}
      <section className="bg-amber-900 py-24">
        <div className="container-p">
          <Reveal className="text-center mb-12">
            <span className="eyebrow justify-center text-amber-300">
              <span className="inline-block h-px w-8 bg-amber-400" />
              Why DoodleNest
            </span>
            <h2 className="section-title mt-3 text-white">The results speak for themselves</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "60%", label: "Reduction in admin time" },
              { stat: "3×",  label: "Parent engagement increase" },
              { stat: "100%", label: "Cloud-based & mobile-ready" },
              { stat: "24/7", label: "Platform availability" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className="rounded-2xl border border-amber-700 bg-amber-800 p-6 text-center">
                  <div className="display text-5xl text-amber-300">{s.stat}</div>
                  <div className="mt-2 text-sm text-amber-200">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 rounded-2xl border border-amber-700 bg-amber-800 p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Why institutions choose DoodleNest</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-amber-200">
                  <CheckCircle className="h-4 w-4 shrink-0 text-green-400" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%)" }}>
        <div className="container-p text-center">
          <Reveal>
            <h2 className="display text-4xl text-amber-900 sm:text-5xl">
              Ready to transform your learning center?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-amber-800/70">
              Join institutions that trust DoodleNest to deliver exceptional early childhood education experiences.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-lg px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-xl transition-all hover:-translate-y-0.5"
                style={{ background: "#F97316" }}
              >
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:hello@wenthura.lk"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-400 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-800 transition hover:bg-amber-100"
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
