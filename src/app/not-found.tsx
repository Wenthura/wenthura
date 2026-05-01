"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

const messages = [
  "This page wandered off the map.",
  "Looks like this page took an early lunch.",
  "We searched everywhere. Even behind the server rack.",
  "This route exists in a parallel universe, just not this one.",
];

export default function NotFound() {
  const msg = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[8rem] font-black leading-none text-glow/10 sm:text-[12rem]"
      >
        404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="display -mt-8 text-4xl text-ink-50 sm:-mt-12 sm:text-5xl lg:text-6xl"
      >
        Page not found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 max-w-md text-lg text-ink-400"
      >
        {msg}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Link href="/" className="btn-primary">
          Back to home <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/solutions" className="btn-ghost">
          <Search className="h-4 w-4" />
          Browse solutions
        </Link>
      </motion.div>
    </div>
  );
}
