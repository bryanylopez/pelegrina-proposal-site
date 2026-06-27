"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { LangToggle } from "./LangToggle";
import { nav as navData, ui } from "@/lib/content";

export function Nav() {
  const { locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = navData[locale];
  const t = ui[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
            PM
          </span>
          <span
            className={`font-display text-sm font-semibold tracking-tight ${
              scrolled ? "text-brand-black" : "text-brand-black"
            }`}
          >
            Pelegrina × Solo
          </span>
        </button>

        <div className="flex items-center gap-3">
          <LangToggle />
          <button
            onClick={() => go("next")}
            className="hidden items-center gap-1 rounded-pill bg-brand-black px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-85 sm:flex"
          >
            {t.contactCta}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label={t.menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-brand-black"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-brand-black text-white transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <span className="font-display text-sm font-semibold">Pelegrina × Solo</span>
          <button
            onClick={() => setOpen(false)}
            aria-label={t.menuClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="mx-auto grid max-w-6xl gap-1 px-5 py-6 sm:px-8">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="group flex items-baseline justify-between border-b border-white/10 py-4 text-left"
            >
              <span className="font-display text-2xl font-semibold transition-colors group-hover:text-brand-red sm:text-3xl">
                {item.label}
              </span>
              <span className="text-xs text-white/40">{String(i + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
