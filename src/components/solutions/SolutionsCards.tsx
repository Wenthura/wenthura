"use client";

import { motion } from "framer-motion";
import { BlurIn } from "@/components/BlurIn";
import { solutions } from "@/lib/content";
import { getIllustration } from "@/components/illustrations";

export default function SolutionsCards() {
  return (
    <motion.div
      className="flex flex-col gap-14 sm:gap-[90px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {solutions.map((s, i) => {
        const Icon = s.icon;
        const Illustration = getIllustration(s.illustrationKey);
        return (
          <motion.article
            key={s.id}
            id={s.id}
            className="group grid gap-8 lg:grid-cols-2 lg:items-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B56939]/10 via-[#5C3779]/10 to-[#454BBB]/10 text-sintra-accent ring-1 ring-sintra-accent/20">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.3em] text-sintra-accent">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(solutions.length).padStart(2, "0")}
                </span>
              </div>
              <BlurIn>
                <h2 className="mt-6 font-helvetica-neue text-2xl font-medium leading-tight tracking-[-0.03em] text-sintra-dark sm:text-4xl md:text-5xl">
                  {s.title}
                </h2>
              </BlurIn>
              <p className="mt-5 font-helvetica-neue text-base text-sintra-gray md:text-lg">
                {s.blurb}
              </p>
            </div>

            <div className="relative h-56 overflow-hidden rounded-3xl sm:h-80 sm:rounded-[40px] md:h-96">
              <Illustration className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
