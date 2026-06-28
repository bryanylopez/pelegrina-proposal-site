"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/icons";
import { sections } from "@/lib/content";

export function Capabilities() {
  const { locale } = useLanguage();
  const s = sections[locale].capabilities;

  return (
    <section id="capabilities" className="bg-white py-24 sm:py-32">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="flex h-full flex-col rounded-3xl bg-brand-mist p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon name={item.icon} className="h-5 w-5 text-brand-red" />
                </div>
                <h3 className="font-display text-base font-semibold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm italic text-brand-muted">{s.footnote}</p>
      </div>
    </section>
  );
}
