"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const products = [
  { href: "/products/doodlenest",         label: "DoodleNest",         desc: "Early Learning Platform",   dot: "#FBBF24" },
  { href: "/products/autoflow",           label: "AutoFlow",           desc: "Automotive ERP",            dot: "#F97316" },
  { href: "/products/nena-ai",            label: "Nena AI",            desc: "AI Learning Platform",      dot: "#3B82F6" },
];

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/services",  label: "Services"  },
  { href: "/contact",   label: "Contact"   },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoClickRef = useRef(0);
  const logoTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleLogoClick = useCallback(() => {
    logoClickRef.current++;
    clearTimeout(logoTimerRef.current);
    logoTimerRef.current = setTimeout(() => {
      logoClickRef.current = 0;
    }, 800);
    if (logoClickRef.current >= 5) {
      logoClickRef.current = 0;
      // Trigger a spin animation on the logo
      const logo = document.querySelector("[data-logo]") as HTMLElement;
      if (logo) {
        logo.style.transition = "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
        logo.style.transform = "rotate(360deg)";
        setTimeout(() => {
          logo.style.transition = "transform 0.3s";
          logo.style.transform = "rotate(0deg)";
        }, 900);
      }
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 w-full transition-all duration-500",
        scrolled
          ? "border-b border-slate-200 bg-white shadow-sm"
          : "border-b border-slate-100 bg-white/90 backdrop-blur-md"
      )}
    >
      <div className="container-p">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5" onClick={handleLogoClick}>
            <Image
              src="/Logo - White LinkedIn (Without Lines).png"
              alt="Wenthura"
              width={480}
              height={120}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-12"
              data-logo
              priority
              quality={100}
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#2563EB] after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Home
            </Link>

            {/* Products dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                Products
                <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              {/* dropdown panel */}
              <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-64 overflow-hidden rounded-xl border border-ink-700/50 bg-white shadow-xl">
                  <div className="p-1.5">
                    {products.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-ink-900"
                      >
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ background: p.dot }}
                        />
                        <div>
                          <div className="text-sm font-semibold text-ink-50">{p.label}</div>
                          <div className="text-xs text-ink-400">{p.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#2563EB] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary hidden md:inline-flex !py-2.5 !px-5 !text-[10px]"
            >
              Talk to Us
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-slate-200 bg-white md:hidden"
            style={{ maxHeight: 'calc(100dvh - 4rem)' }}
          >
            <div className="container-p py-4">
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                }}
                className="flex flex-col gap-1"
              >
                <motion.div variants={{ closed: { opacity: 0, x: -16 }, open: { opacity: 1, x: 0 } }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Products — direct links */}
                <motion.div variants={{ closed: { opacity: 0, x: -16 }, open: { opacity: 1, x: 0 } }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                  <p className="px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                    Products
                  </p>
                  <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-slate-200 pl-3">
                    {products.map((p, idx) => (
                      <motion.div
                        key={p.href}
                        variants={{ closed: { opacity: 0, x: -12 }, open: { opacity: 1, x: 0 } }}
                        transition={{ duration: 0.25, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          href={p.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        >
                          <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: p.dot }} />
                          <div>
                            <span className="font-semibold">{p.label}</span>
                            <span className="ml-2 text-xs text-slate-400">{p.desc}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {links.map((l) => (
                  <motion.div key={l.href} variants={{ closed: { opacity: 0, x: -16 }, open: { opacity: 1, x: 0 } }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={{ closed: { opacity: 0, y: 8 }, open: { opacity: 1, y: 0 } }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                  <div className="mt-3 border-t border-slate-200 pt-3">
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="btn-primary w-full"
                    >
                      Talk to Us
                    </Link>
                  </div>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
