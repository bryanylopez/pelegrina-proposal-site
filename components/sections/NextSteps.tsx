"use client";

import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { sections, contact } from "@/lib/content";

export function NextSteps() {
  const { locale } = useLanguage();
  const s = sections[locale].next;

  return (
    <section id="next" className="relative overflow-hidden bg-brand-black py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-red/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            {s.label}
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">{s.title}</h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {s.steps.map((step, i) => (
            <Reveal key={step} delay={i * 90}>
              <div className="flex items-start gap-5 border-b border-white/10 pb-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-white/80 sm:text-lg">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-14 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                {s.contactLabel}
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">{contact.name}</p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href={`tel:${contact.phoneHref}`}
                className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-red" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand-red" />
                {contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
