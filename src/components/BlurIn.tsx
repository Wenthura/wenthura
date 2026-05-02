"use client";

import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

type BlurInProps = PropsWithChildren<{
  className?: string;
}>;

export function BlurIn({ children, className }: BlurInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : undefined}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
