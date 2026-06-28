"use client";

import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { sections, ui } from "@/lib/content";

export function Hero() {
  const { locale } = useLanguage();
  const s = sections[locale].hero;
  const t = ui[locale];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-black pt-24">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-red/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -left-32 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
          {s.kicker}
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          {s.title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-white/70 sm:text-xl">
          {s.subtitle}
        </p>

        <div className="mt-12 flex flex-col gap-1 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{s.preparedBy}</p>
            <p className="text-sm text-white/50">{s.preparedFor}</p>
          </div>
          <button
            onClick={() =>
              document.getElementById("opportunity")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 flex items-center gap-2 self-start rounded-pill border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-black sm:mt-0 sm:self-auto"
          >
            {t.scrollCta}
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
