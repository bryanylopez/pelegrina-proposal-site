"use client";

import { Globe2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { sections } from "@/lib/content";

export function Opportunity() {
  const { locale } = useLanguage();
  const s = sections[locale].opportunity;

  return (
    <section id="opportunity" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionLabel>{s.label}</SectionLabel>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
              {s.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
              {s.body}
            </p>

            <ul className="mt-10 space-y-4">
              {s.regions.map((r) => (
                <li key={r.name} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  <p>
                    <span className="font-semibold text-brand-black">{r.name}</span>{" "}
                    <span className="text-brand-muted">{r.detail}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-3xl bg-brand-mist p-8 sm:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-black">
                <Globe2 className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <dl className="grid grid-cols-2 gap-8">
                {s.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-4xl font-bold text-brand-black sm:text-5xl">
                      {stat.number}
                    </dt>
                    <dd className="mt-1 text-sm text-brand-muted">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
