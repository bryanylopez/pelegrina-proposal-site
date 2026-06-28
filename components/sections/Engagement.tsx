"use client";

import { Check, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/icons";
import { sections } from "@/lib/content";

export function Engagement() {
  const { locale } = useLanguage();
  const s = sections[locale].engagement;

  return (
    <section id="engagement" className="bg-brand-mist py-24 sm:py-32">
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.rhythm.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="h-full rounded-3xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-mist">
                  <Icon name={r.icon} className="h-5 w-5 text-brand-red" />
                </div>
                <h3 className="font-display text-base font-semibold text-brand-black">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{r.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={s.rhythm.length * 80}>
          <div className="mt-14">
            <h3 className="font-display text-xl font-semibold text-brand-black sm:text-2xl">
              {s.fit.title}
            </h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-7 shadow-sm">
                <p className="font-display text-base font-semibold text-brand-black">
                  {s.fit.yesLabel}
                </p>
                <ul className="mt-4 space-y-3">
                  {s.fit.yesItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white/60 p-7">
                <p className="font-display text-base font-semibold text-brand-black">
                  {s.fit.noLabel}
                </p>
                <ul className="mt-4 space-y-3">
                  {s.fit.noItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-brand-muted" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-8 max-w-3xl text-sm italic text-brand-muted">{s.footnote}</p>
      </div>
    </section>
  );
}
