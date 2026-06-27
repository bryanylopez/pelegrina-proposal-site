"use client";

import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { sections } from "@/lib/content";

export function Gap() {
  const { locale } = useLanguage();
  const s = sections[locale].gap;

  return (
    <section id="gap" className="relative overflow-hidden bg-brand-black py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand-red/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            {s.label}
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {s.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            {s.body}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-red">
              <TrendingUp className="h-6 w-6 text-white" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {s.calloutTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                {s.calloutBody}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
