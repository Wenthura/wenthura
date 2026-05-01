"use client";

import { useState, useRef, type FormEvent } from "react";
import { contact } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

function SuccessCheck() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-4 py-12 text-center"
    >
      <div className="ring-expand relative flex h-16 w-16 items-center justify-center rounded-full bg-glow/10">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
          <path
            d="M5 13l4 4L19 7"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="draw-check"
          />
        </svg>
      </div>
      <div>
        <p className="font-display text-xl font-bold text-ink-50">
          Message ready to send
        </p>
        <p className="mt-2 text-sm text-ink-400">
          Opening your email client… if nothing happens, email us directly at{" "}
          <a href={`mailto:${contact.email}`} className="text-glow underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </motion.div>
  );
}

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [shakeFields, setShakeFields] = useState<Set<string>>(new Set());
  const formRef = useRef<HTMLFormElement>(null);

  function validate(data: FormData) {
    const e: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name) e.name = "We'd love to know your name";
    if (!email) e.email = "We'll need your email to get back to you";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "That doesn't look like a valid email";
    if (!subject) e.subject = "What's this about?";
    if (!message || message.length < 10)
      e.message = "Tell us a bit more — at least 10 characters";
    return { errors: e, name, email, subject, message };
  }

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const { errors: e, name, email, subject, message } = validate(data);
    setErrors(e);

    if (Object.keys(e).length > 0) {
      // Trigger shake on invalid fields
      setShakeFields(new Set(Object.keys(e)));
      setTimeout(() => setShakeFields(new Set()), 500);
      return;
    }

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(
      message
    )}`;
    const href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    window.location.href = href;
    setSent(true);
  }

  const field =
    "input-delight mt-2 block w-full rounded-lg border border-ink-700/50 bg-ink-900 px-4 py-3.5 text-sm text-ink-50 outline-none transition focus:border-glow/60 focus:bg-white focus:ring-1 focus:ring-glow/20 placeholder:text-ink-400";
  const label =
    "font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400";

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <SuccessCheck key="success" />
      ) : (
        <motion.form
          key="form"
          ref={formRef}
          onSubmit={onSubmit}
          noValidate
          className="space-y-5"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className={shakeFields.has("name") ? "shake" : ""}>
              <label htmlFor="name" className={label}>Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" className={field} />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-1 text-xs text-red-500"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className={shakeFields.has("email") ? "shake" : ""}>
              <label htmlFor="email" className={label}>Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" className={field} />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-1 text-xs text-red-500"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className={shakeFields.has("subject") ? "shake" : ""}>
            <label htmlFor="subject" className={label}>Subject</label>
            <input id="subject" name="subject" type="text" placeholder="What's this about?" className={field} />
            <AnimatePresence>
              {errors.subject && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-1 text-xs text-red-500"
                >
                  {errors.subject}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div className={shakeFields.has("message") ? "shake" : ""}>
            <label htmlFor="message" className={label}>Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Tell us about your project…" className={field} />
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-1 text-xs text-red-500"
                >
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <motion.button
            type="submit"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Send className="h-4 w-4" />
            Send message
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
