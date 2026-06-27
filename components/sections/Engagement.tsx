"use client";

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
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {s.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {s.tracks.map((tr, i) => (
            <Reveal key={tr.title} delay={i * 100}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mist">
                    <Icon name={tr.icon} className="h-5 w-5 text-brand-red" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brand-black">{tr.title}</h3>
                </div>
                <ul className="space-y-3">
                  {tr.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-brand-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm italic text-brand-muted">{s.footnote}</p>
      </div>
    </section>
  );
}
