"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/icons";
import { sections } from "@/lib/content";

export function Proposal() {
  const { locale } = useLanguage();
  const s = sections[locale].proposal;

  return (
    <section id="proposal" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>{s.label}</SectionLabel>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-black sm:text-5xl">
            {s.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-muted sm:text-lg">
            {s.intro}
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-black/5 border-t border-black/5">
          {s.rows.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mist">
                  <Icon name={r.icon} className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-black sm:text-xl">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted sm:text-base">{r.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
