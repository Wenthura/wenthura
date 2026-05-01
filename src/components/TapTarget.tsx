"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps any button/link child with a subtle press-scale micro-interaction.
 * Renders as inline-flex span so it doesn't affect layout.
 */
export function TapTarget({ children }: { children: ReactNode }) {
  return (
    <motion.span
      style={{ display: "inline-flex" }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}
