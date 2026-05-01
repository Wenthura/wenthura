import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, CreditCard, ShoppingCart, Cloud, Server, Code2, TrendingUp, ArrowUpRight, Shield, Globe, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FinancialDashboard } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Business Solutions — Fintech, eCommerce, Cloud & Managed Services",
  description:
    "Secure, scalable fintech, ecommerce, and custom engineering solutions designed to support digital transformation and operational efficiency for modern enterprises.",
};

const services = [
  {
    Icon: CreditCard,
    title: "Fintech Solutions",
    desc: "Payment platforms, core banking, digital lending, card issuance, payment switching — built on globally trusted infrastructure.",
    items: ["Payment Processing & Switching", "Core Banking Integration", "Digital Lending & Collection", "Card Issuance (CMS)"],
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.06)",
    border: "rgba(37,99,235,0.15)",
  },
  {
    Icon: ShoppingCart,
    title: "eCommerce",
    desc: "Scalable online retail platforms and payment infrastructure — from merchant onboarding to transaction processing.",
    items: ["eCommerce Platform Development", "Payment Gateway Integration", "Merchant Management Systems", "Digital Onboarding Solutions"],
    accent: "#F97316",
    bg: "rgba(249,115,22,0.06)",
    border: "rgba(249,115,22,0.15)",
  },
  {
    Icon: Cloud,
    title: "Cloud Services",
    desc: "AWS, Azure, and GCP architecture, migration, and optimization — cloud-ready infrastructure designed for enterprise scale.",
    items: ["Cloud Migration & Architecture", "Infrastructure as Code", "Multi-cloud Strategy", "DevOps & CI/CD Pipelines"],
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.06)",
    border: "rgba(37,99,235,0.15)",
  },
  {
    Icon: Server,
    title: "Managed Services",
    desc: "24/7 monitoring, maintenance, and IT support — keeping your systems running at peak performance around the clock.",
    items: ["24/7 Infrastructure Monitoring", "Security & Compliance Management", "Help Desk & L2/L3 Support", "Disaster Recovery Planning"],
    accent: "#F97316",
    bg: "rgba(249,115,22,0.06)",
    border: "rgba(249,115,22,0.15)",
  },
  {
    Icon: Code2,
    title: "Custom Engineering",
    desc: "Bespoke software development, system integration, and API development — built to your exact specification.",
    items: ["Bespoke Product Development", "System Integration & APIs", "Low-Code Application Development", "Legacy System Modernization"],
    accent: "#2563EB",
    bg: "rgba(37,99,235,0.06)",
    border: "rgba(37,99,235,0.15)",
  },
  {
    Icon: TrendingUp,
    title: "Digital Transformation",
    desc: "Strategy, implementation, and change management — guiding your organization through every phase of digital evolution.",
    items: ["Digital Strategy Consulting", "Process Automation (AI/RPA)", "Change Management", "ERP Implementation & Support"],
    accent: "#F97316",
    bg: "rgba(249,115,22,0.06)",
    border: "rgba(249,115,22,0.15)",
  },
];

const trustSignals = [
  { Icon: Globe,  label: "Global technology partnerships",   desc: "Collaborations with leading global fintech and cloud providers."  },
  { Icon: Shield, label: "Enterprise-grade security",        desc: "PCI-DSS compliant infrastructure with multi-layer protection."    },
  { Icon: Zap,    label: "Proven engineering excellence",    desc: "Expert teams with deep domain knowledge across fintech and cloud." },
  { Icon: TrendingUp, label: "Scalable architecture",        desc: "Solutions designed to grow from startup to enterprise scale."     },
];

export default function BusinessSolutionsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-40 lg:pb-28">
        {/* blue accent line */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, #2563EB, #F97316)" }} />
        {/* grid */}
        <div className="pointer-events-none absolute inset-0 grid-lines" />
        {/* blue orb */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }} />

        <div className="container-p relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <div className="chip w-fit mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-glow" />
                  Enterprise · Fintech · Cloud
                </div>
                <h1 className="display text-5xl leading-[1.05] text-ink-50 sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
                  Fintech &amp; engineering{" "}
                  <span className="italic text-glow">built for scale.</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-400">
                  Secure, scalable fintech, ecommerce, cloud, and custom engineering solutions
                  designed to power digital transformation and operational excellence for
                  modern enterprises.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Start a Project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/solutions" className="btn-ghost">
                    View All Solutions
                  </Link>
                </div>
                <ul className="mt-10 space-y-2">
                  {["PCI-DSS compliant infrastructure", "15+ countries · 200+ enterprises served"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-ink-400">
                      <CheckCircle className="h-4 w-4 shrink-0 text-glow" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-ink-700/50 shadow-2xl aspect-video">
                <FinancialDashboard className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────────────────── */}
      <section className="bg-ink-900 py-24">
        <div className="container-p">
          <Reveal className="mb-16 text-center">
            <span className="eyebrow justify-center">Our Services</span>
            <h2 className="section-title mt-3 text-ink-50">
              Six service pillars. One trusted partner.
            </h2>
            <p className="lead mx-auto text-center">
              From fintech infrastructure to digital transformation strategy —
              we deliver end-to-end technology solutions that create measurable impact.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.Icon;
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl p-6 transition hover:shadow-lg" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                    <span
                      className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${s.accent}15`, color: s.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-ink-50">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{s.desc}</p>
                    <ul className="mt-4 space-y-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-ink-400">
                          <span className="h-1 w-1 rounded-full shrink-0" style={{ background: s.accent }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Wenthura ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-p">
          <Reveal className="mb-16 text-center">
            <span className="eyebrow justify-center">Why Wenthura</span>
            <h2 className="section-title mt-3 text-ink-50">
              The partner enterprises trust
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((t, i) => {
              const Icon = t.Icon;
              return (
                <Reveal key={t.label} delay={i * 0.07}>
                  <div className="card-glass h-full p-6 text-center">
                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-glow/8 text-glow ring-1 ring-glow/15">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-ink-50">{t.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{t.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="bg-ink-900 py-24">
        <div className="container-p">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="eyebrow">Our Approach</span>
              <h2 className="section-title mt-3 text-ink-50">
                How we deliver your solution
              </h2>
              <p className="lead mt-4">
                We follow a disciplined, collaborative process designed to minimize risk
                and maximize the impact of every engagement.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4">
                {[
                  { num: "01", title: "Discovery & Scoping",     desc: "We take time to understand your business, goals, constraints, and success criteria." },
                  { num: "02", title: "Architecture & Design",   desc: "Our engineers design a solution architecture optimized for your scale and budget."  },
                  { num: "03", title: "Agile Build & Delivery",  desc: "Iterative development with frequent releases, demos, and stakeholder feedback."     },
                  { num: "04", title: "Support & Growth",        desc: "Ongoing managed services, monitoring, and evolution as your needs grow."            },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 rounded-xl border border-ink-700/50 bg-white p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-glow text-[11px] font-bold text-white">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-semibold text-ink-50">{step.title}</div>
                      <div className="mt-1 text-sm text-ink-400">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container-p">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "200+",  label: "Enterprises served"         },
              { stat: "15+",   label: "Countries"                  },
              { stat: "$4.2B", label: "Transactions processed"     },
              { stat: "99.9%", label: "Platform uptime SLA"        },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="card-glass p-6 text-center">
                  <div className="display text-5xl text-glow">{s.stat}</div>
                  <div className="mt-2 text-sm text-ink-400">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-glow py-24">
        <div className="container-p text-center">
          <Reveal>
            <h2 className="display text-4xl text-white sm:text-5xl">
              Ready to build your next solution?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
              Let&apos;s discuss your requirements. Our engineering and fintech experts
              are ready to design the right solution for your business.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-glow shadow-xl transition-all hover:-translate-y-0.5"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
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
