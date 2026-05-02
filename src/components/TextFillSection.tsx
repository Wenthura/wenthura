"use client";

import { useEffect, useRef, useState } from "react";

const FILL_TEXT =
  "Designed to push the boundaries of what\u2019s possible. Technology that meets current needs and anticipates future demand \u2014 so you remain at the forefront of your industry.";

export default function TextFillSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;
      const startFill = windowHeight * 0.8;
      const endFill = windowHeight * 0.2;

      if (elementTop >= startFill) {
        setFillPercentage(0);
        return;
      }

      if (elementTop <= endFill) {
        setFillPercentage(100);
        return;
      }

      const value =
        ((startFill - elementTop) / (startFill - endFill)) * 100;
      setFillPercentage(Math.max(0, Math.min(100, value)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mb-[30vh] flex items-center justify-center bg-white px-6 py-24 md:px-16 md:py-32"
    >
      <div className="relative w-full max-w-2xl text-center">
        <h2 className="relative font-helvetica-neue text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl lg:text-6xl">
          <span className="block text-[#B8B7BA]">{FILL_TEXT}</span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-[#B56939] via-[#5C3779] to-[#454BBB] bg-clip-text text-transparent"
            style={{
              clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
              transition: "clip-path 0.1s linear",
            }}
          >
            {FILL_TEXT}
          </span>
        </h2>
      </div>
    </section>
  );
}
