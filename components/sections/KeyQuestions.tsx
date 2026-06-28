"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/icons";
import { sections } from "@/lib/content";

export function KeyQuestions() {
  const { locale } = useLanguage();
  const s = sections[locale].keyQuestions;

  return (
    <section id="questions" className="bg-white py-24 sm:py-32">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {s.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <div className="flex h-full items-start gap-4 rounded-3xl bg-brand-mist p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon name={item.icon} className="h-5 w-5 text-brand-red" />
                </div>
                <p className="text-sm leading-relaxed text-brand-black sm:text-base">
                  {item.question}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm italic text-brand-muted">{s.footnote}</p>
      </div>
    </section>
  );
}
