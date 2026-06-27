"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { sections } from "@/lib/content";

export function Sample() {
  const { locale } = useLanguage();
  const s = sections[locale].sample;

  return (
    <section id="sample" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>{s.label}</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {s.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {s.phases.map((p, i) => {
            const active = i === 1;
            return (
              <Reveal key={p.title} delay={i * 100}>
                <div
                  className={`flex h-full flex-col rounded-3xl p-7 ${
                    active ? "bg-brand-black text-white" : "bg-brand-mist text-brand-black"
                  }`}
                >
                  <span
                    className={`font-display text-4xl font-bold ${
                      active ? "text-brand-red" : "text-brand-red"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`mt-4 text-xs font-bold uppercase tracking-[0.15em] ${
                      active ? "text-white/50" : "text-brand-muted"
                    }`}
                  >
                    {p.range}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      active ? "text-white/70" : "text-brand-muted"
                    }`}
                  >
                    {p.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
