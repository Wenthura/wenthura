"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

export function AnimatedLine({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={`mt-2 h-[3px] rounded-full ${className ?? ""}`}
      style={style}
      initial={{ width: 0 }}
      whileInView={{ width: "4rem" }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
    />
  );
}
