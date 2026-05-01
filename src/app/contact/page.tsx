import type { Metadata } from "next";
import { Mail, Phone, Globe, Users, Handshake, MapPin } from "lucide-react";
import { contact } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Wenthura team.",
};

const rows = [
  { icon: Globe, label: "Website", value: contact.website, href: `https://${contact.website}` },
  { icon: Mail, label: "General", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
  { icon: Users, label: "Sales", value: contact.sales, href: `mailto:${contact.sales}` },
  { icon: Handshake, label: "Partnerships", value: contact.partner, href: `mailto:${contact.partner}` },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-700/50 bg-ink-900 pt-40 pb-20">
        <div className="absolute inset-0 grid-lines" />
        <div className="container-p relative">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="display text-6xl leading-[0.95] text-ink-50 sm:text-7xl lg:text-8xl">
              Let&rsquo;s build{" "}
              <span className="italic text-glow">what&rsquo;s next.</span>
            </h1>
            <p className="lead">
              Tell us about your goals. We&rsquo;ll get back to you with a plan
              to transform your operations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-p py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass h-full p-8">
              <h2 className="display text-3xl text-ink-50">Reach us directly</h2>
              <p className="mt-2 text-sm text-ink-400">
                Prefer email or phone? Use any of the contacts below.
              </p>
              <ul className="mt-8 space-y-5">
                {rows.map((r) => (
                  <li key={r.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-glow/8 text-glow ring-1 ring-glow/15">
                      <r.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">
                        {r.label}
                      </p>
                      <a
                        href={r.href}
                        className="mt-0.5 block text-sm font-medium text-ink-50 hover:text-glow"
                      >
                        {r.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-start gap-3 border-t border-ink-700/50 pt-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-glow/8 text-glow ring-1 ring-glow/15">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400">Headquarters</p>
                  <p className="mt-0.5 text-sm text-ink-50">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-3">
            <div className="glass p-8">
              <h2 className="display text-3xl text-ink-50">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-400">
                Submitting this form opens your email client with your message pre-filled.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
