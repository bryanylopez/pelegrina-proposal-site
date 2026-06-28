"use client";

import { ArrowUpRight, Eye } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Icon } from "@/components/icons";
import { sections } from "@/lib/content";

export function Showcase() {
  const { locale } = useLanguage();
  const s = sections[locale].showcase;

  return (
    <section id="showcase" className="bg-white py-24 sm:py-32">
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-3xl bg-brand-mist p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                    <Icon name={item.icon} className="h-5 w-5 text-brand-red" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-red">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {item.detail}
                </p>

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 self-start rounded-pill bg-brand-black px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-85"
                  >
                    {item.linkLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="mt-5 inline-flex items-center gap-1.5 self-start rounded-pill border border-black/10 px-4 py-2 text-xs font-semibold text-brand-muted">
                    <Eye className="h-3.5 w-3.5" />
                    {locale === "es" ? "Se revisa en persona" : "Reviewed in person"}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
