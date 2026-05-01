"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    spring.set(progress);
  }, [progress, spring]);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setProgress(window.scrollY / h);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left"
      style={{
        scaleX: spring,
        background: "linear-gradient(90deg, #2563EB 0%, #3B82F6 40%, #F97316 100%)",
      }}
      aria-hidden
    />
  );
}
