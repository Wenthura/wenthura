import Link from "next/link";
import { getIllustration } from "@/components/illustrations";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function SolutionsRail() {
  const featured = solutions.slice(0, 6);

  return (
    <section className="bg-ink-900 py-24">
      <div className="container-p">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Our Solutions</span>
            <h2 className="section-title mt-3">Platform solutions that scale</h2>
          </div>
          <Link href="/solutions" className="btn-ghost shrink-0">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} delay={i * 0.05}>
                <Link
                  href={`/solutions#${s.id}`}
                  className="card-glass group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    {(() => {
                      const Illustration = getIllustration(s.illustrationKey);
                      return <Illustration className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />;
                    })()}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-50/50 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-glow shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 flex-1">
                    <h3 className="font-semibold text-ink-50 transition-colors group-hover:text-glow">
                      {s.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-400">{s.blurb}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-glow">
                    Learn more
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
