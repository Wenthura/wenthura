import type { Metadata } from "next";
import { solutions } from "@/lib/content";
import { BlurIn } from "@/components/BlurIn";
import SolutionsCards from "@/components/solutions/SolutionsCards";
import TextFillSection from "@/components/TextFillSection";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Our solutions span Core Banking, Digital Onboarding, Payments, ERP, AI and more.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] sm:min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16 sm:pt-40 sm:pb-20 md:px-12 lg:px-[60px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_154629_a31a2372-bd54-4f7e-ac9b-21246141a664.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-white/75" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 text-center">
          <BlurIn>
            <span className="mb-4 inline-block font-manrope text-xs font-semibold uppercase tracking-[0.3em] text-sintra-accent">
              Our Solutions
            </span>
            <h1 className="mx-auto max-w-3xl font-helvetica-neue text-3xl font-medium leading-[0.95] tracking-[-0.03em] text-[#010828] sm:text-5xl md:text-6xl lg:text-8xl">
              Innovate with{" "}
              <span className="bg-gradient-to-r from-[#B56939] via-[#5C3779] to-[#454BBB] bg-clip-text italic text-transparent">
                precision.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl font-helvetica-neue text-base text-sintra-gray md:text-lg">
              Designed to push the boundaries of what&rsquo;s possible.
              Technology that meets current needs and anticipates future demand
              &mdash; so you remain at the forefront of your industry.
            </p>
          </BlurIn>
        </div>
      </section>

      {/* Solutions Index + Cards */}
      <section className="bg-white px-6 py-12 sm:py-20 md:px-12 lg:px-[60px]">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-14 lg:grid-cols-[240px,1fr]">
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-1">
                <p className="mb-3 font-manrope text-[10px] font-semibold uppercase tracking-[0.3em] text-sintra-gray">
                  Index
                </p>
                {solutions.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg px-3 py-2 font-inter text-sm text-sintra-gray transition-colors hover:text-sintra-accent"
                  >
                    <span className="mr-2 font-mono text-[10px] text-sintra-gray/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            <SolutionsCards />
          </div>
        </div>
      </section>

      {/* Scroll text fill */}
      <TextFillSection />
    </div>
  );
}
