"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/icons";
import { sections } from "@/lib/content";

export function Why() {
  const { locale } = useLanguage();
  const s = sections[locale].why;

  return (
    <section id="why" className="bg-brand-mist py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>{s.label}</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {s.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {s.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <div className="flex h-full gap-5 rounded-3xl bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mist">
                  <Icon name={it.icon} className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-black">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{it.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
