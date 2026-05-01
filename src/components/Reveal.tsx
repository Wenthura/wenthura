"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

type Direction = "up" | "left" | "right";

function buildVariants(direction: Direction): Variants {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 28 : 0,
      x: direction === "left" ? -36 : direction === "right" ? 36 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      variants={buildVariants(direction)}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}

