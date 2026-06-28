"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { sections } from "@/lib/content";

const VIDEO_PRICE = 1500;
const MAX_PEOPLE = 30;

function rateFor(people: number) {
  if (people <= 1) return 200;
  if (people <= 5) return 150;
  return 50;
}

function fmt(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

export function QuickStart() {
  const { locale } = useLanguage();
  const s = sections[locale].quickStart;
  const [people, setPeople] = useState(10);
  const [video, setVideo] = useState(true);

  const rate = rateFor(people);
  const photoTotal = people * rate;
  const videoTotal = video ? VIDEO_PRICE : 0;
  const total = photoTotal + videoTotal;

  const tierLabel =
    people <= 1 ? s.tierIndividual : people <= 5 ? s.tierSmall : s.tierFull;

  return (
    <section id="quickstart" className="bg-brand-mist py-24 sm:py-32">
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

        <Reveal delay={100}>
          <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-muted">
                  {s.sliderLabel}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-brand-black">
                    {people}
                  </span>
                  <span className="text-sm text-brand-muted">{s.unitLabel}</span>
                </div>

                <input
                  type="range"
                  min={1}
                  max={MAX_PEOPLE}
                  step={1}
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-pill bg-brand-mist accent-brand-red"
                  aria-label={s.sliderLabel}
                />
                <div className="mt-1 flex justify-between text-xs text-brand-muted">
                  <span>1</span>
                  <span>{MAX_PEOPLE}+</span>
                </div>

                <p className="mt-3 text-sm text-brand-muted">
                  <span className="font-semibold text-brand-black">{tierLabel}</span> ·{" "}
                  {fmt(rate)}/{s.perPersonLabel}
                </p>

                <button
                  type="button"
                  role="switch"
                  aria-checked={video}
                  onClick={() => setVideo((v) => !v)}
                  className="mt-8 flex items-center gap-3 text-left"
                >
                  <span
                    className={`flex h-6 w-11 shrink-0 items-center rounded-pill p-0.5 transition-colors ${
                      video ? "bg-brand-red" : "bg-black/15"
                    }`}
                  >
                    <span
                      className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                        video ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </span>
                  <span className="text-sm font-semibold text-brand-black">
                    {s.videoLabel}
                  </span>
                </button>
                <p className="mt-2 text-xs leading-relaxed text-brand-muted">
                  {s.videoDetail}
                </p>
              </div>

              <div className="flex flex-col rounded-2xl bg-brand-mist p-6 sm:p-7">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-muted">{s.photoLineLabel}</span>
                  <span className="font-semibold text-brand-black">{fmt(photoTotal)}</span>
                </div>
                {video && (
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-brand-muted">{s.videoLineLabel}</span>
                    <span className="font-semibold text-brand-black">{fmt(videoTotal)}</span>
                  </div>
                )}
                <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-5">
                  <span className="text-sm font-semibold uppercase tracking-[0.1em] text-brand-muted">
                    {s.totalLabel}
                  </span>
                  <span className="font-display text-3xl font-bold text-brand-black">
                    {fmt(total)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("next")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-6 rounded-pill bg-brand-black px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                >
                  {s.ctaLabel}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 max-w-3xl text-sm italic text-brand-muted">{s.footnote}</p>
      </div>
    </section>
  );
}
