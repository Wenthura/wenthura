import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/content";
import { Mail, Phone, Globe, ArrowUpRight, Linkedin, Twitter, MapPin } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

type SocialLink = {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Twitter / X", href: "https://twitter.com", Icon: Twitter },
];

export function Footer() {
  return (
    <footer className="relative mt-32">
      {/* CTA strip */}
      <div className="border-t border-ink-700/50">
        <div className="container-p py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Let&rsquo;s work together</span>
              <h2 className="display mt-3 text-5xl text-ink-50 sm:text-6xl lg:text-7xl">
                Ready to{" "}
                <em className="text-glow not-italic">transform?</em>
              </h2>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 self-start lg:self-auto">
              Start the conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Dark footer body */}
      <div className="bg-ink-50 text-white">
        <div className="container-p pt-16 pb-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/Logo - Blue Square.pub.png"
                  alt="Wenthura"
                  width={300}
                  height={300}
                  className="h-12 w-12 rounded-lg"
                  quality={100}
                />
                <span className="font-display text-lg font-bold text-white">Wenthura</span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Cloud-ready financial infrastructure for enterprises that power tomorrow.
              </p>
              <div className="mt-6 flex items-center gap-1">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <s.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigate */}
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                Navigate
              </p>
              <ul className="space-y-3 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-slate-300 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                Contact
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`https://${contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
                  >
                    <Globe className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                    {contact.website}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                    {contact.phone}
                  </a>
                </li>
              </ul>
            </div>

            {/* Inquiries + Location */}
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                Inquiries
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href={`mailto:${contact.sales}`} className="text-slate-300 transition-colors hover:text-white">
                    {contact.sales}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.partner}`} className="text-slate-300 transition-colors hover:text-white">
                    {contact.partner}
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10">
          <div className="container-p flex flex-col items-center justify-between gap-3 py-5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Wenthura. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="transition-colors hover:text-slate-300">Privacy</a>
              <a href="#" className="transition-colors hover:text-slate-300">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
