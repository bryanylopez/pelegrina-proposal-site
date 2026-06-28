"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/icons";
import { sections } from "@/lib/content";

export function QuickStart() {
  const { locale } = useLanguage();
  const s = sections[locale].quickStart;

  return (
    <section id="quickstart" className="bg-brand-mist py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>{s.label}</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {s.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-muted sm:text-base">
            {s.intro}
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-black/5 rounded-3xl bg-white p-2 shadow-sm sm:p-4">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mist">
                  <Icon name={item.icon} className="h-5 w-5 text-brand-red" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-brand-black">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted">{item.detail}</p>
                </div>
                <p className="font-display text-xl font-bold text-brand-black sm:text-right">
                  {item.price}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={s.items.length * 80}>
          <div className="mt-6 flex flex-col items-start justify-between gap-2 rounded-3xl bg-brand-black px-6 py-5 text-white sm:flex-row sm:items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-white/60">
              {s.totalLabel}
            </p>
            <p className="font-display text-2xl font-bold">{s.total}</p>
          </div>
        </Reveal>

        <p className="mt-6 max-w-3xl text-sm italic text-brand-muted">{s.footnote}</p>
      </div>
    </section>
  );
}
