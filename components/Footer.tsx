"use client";

import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/content";

export function Footer() {
  const { locale } = useLanguage();
  const t = ui[locale];

  return (
    <footer className="bg-brand-black px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footerTag}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left transition-colors hover:text-white/70 sm:text-right"
        >
          {t.backToTop}
        </button>
      </div>
    </footer>
  );
}
