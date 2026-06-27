"use client";

import { useLanguage } from "./LanguageProvider";

export function LangToggle({ light = false }: { light?: boolean }) {
  const { locale, setLocale } = useLanguage();

  const base =
    "rounded-pill px-1 py-1 text-xs font-semibold tracking-wide flex items-center gap-0.5 border";
  const theme = light
    ? "border-white/25 bg-white/10"
    : "border-black/10 bg-black/5";

  const btn = (active: boolean) =>
    `px-2.5 py-1 rounded-pill transition-colors ${
      active
        ? "bg-brand-red text-white"
        : light
        ? "text-white/70 hover:text-white"
        : "text-brand-muted hover:text-brand-black"
    }`;

  return (
    <div className={`${base} ${theme}`} role="group" aria-label="Language switcher">
      <button
        type="button"
        className={btn(locale === "en")}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={btn(locale === "es")}
        onClick={() => setLocale("es")}
        aria-pressed={locale === "es"}
      >
        ES
      </button>
    </div>
  );
}
