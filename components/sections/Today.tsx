"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/icons";
import { sections } from "@/lib/content";

export function Today() {
  const { locale } = useLanguage();
  const s = sections[locale].today;

  return (
    <section id="today" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>{s.label}</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {s.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <div className="h-full rounded-3xl border border-black/5 bg-brand-mist p-6">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <Icon name={c.icon} className="h-5 w-5 text-brand-red" />
                </div>
                <p className="font-display text-4xl font-bold text-brand-black">{c.big}</p>
                <p className="mt-2 text-sm font-semibold text-brand-black">{c.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-brand-muted">{c.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
