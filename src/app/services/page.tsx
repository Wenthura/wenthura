import type { Metadata } from "next";
import { services } from "@/lib/content";
import { getIllustration } from "@/components/illustrations";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Engineering, Bespoke Product Development, Digital Transformation, Managed Services, Low Code, and Business Transformation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-700/50 pt-40 pb-20">
        <div className="absolute inset-0 grid-lines" />
        <div className="container-p relative">
          <Reveal>
            <span className="eyebrow">Our Services</span>
            <h1 className="display text-6xl leading-[0.95] text-ink-50 sm:text-7xl lg:text-8xl">
              Lead with{" "}
              <span className="italic text-glow">confidence.</span>
            </h1>
            <p className="lead">
              Services crafted to propel your business forward with agility â€”
              driving operational excellence, fostering innovation, and
              delivering measurable results.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-p py-20">
        <div className="grid gap-14 lg:grid-cols-[240px,1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 space-y-1">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">
                Index
              </p>
              {services.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-ink-400 transition-colors hover:text-glow"
                >
                  <span className="mr-2 font-mono text-[10px] text-ink-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-24">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.id}>
                  <article
                    id={s.id}
                    className="grid gap-8 lg:grid-cols-2 lg:items-center"
                  >
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-glow/8 text-glow ring-1 ring-glow/15">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-glow">
                          {String(i + 1).padStart(2, "0")} /{" "}
                          {String(services.length).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="mt-6 display text-4xl text-ink-50 sm:text-5xl">
                        {s.title}
                      </h2>
                      <p className="mt-5 text-ink-400">{s.blurb}</p>
                    </div>
                      <div className="relative h-80 overflow-hidden rounded-xl border border-ink-700/50 sm:h-96">
                      {(() => {
                        const Illustration = getIllustration(s.illustrationKey);
                        return <Illustration className="absolute inset-0 h-full w-full" />;
                      })()}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-50/60 to-transparent" />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
