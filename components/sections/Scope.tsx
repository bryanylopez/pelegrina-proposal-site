"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/icons";
import { sections } from "@/lib/content";

export function Scope() {
  const { locale } = useLanguage();
  const s = sections[locale].scope;

  return (
    <section id="scope" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>{s.label}</SectionLabel>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {s.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex h-full flex-col items-center rounded-3xl bg-brand-mist p-6 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon name={item.icon} className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="font-display text-base font-semibold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
