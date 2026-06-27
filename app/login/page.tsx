"use client";

import { useState, FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { LangToggle } from "@/components/LangToggle";

const copy = {
  en: {
    eyebrow: "Pelegrina Medical × Solo Agency",
    title: "This proposal is private",
    subtitle: "Enter the password shared with you to continue.",
    placeholder: "Password",
    button: "Enter",
    error: "Incorrect password. Please try again.",
    generic: "Something went wrong. Please try again.",
  },
  es: {
    eyebrow: "Pelegrina Medical × Solo Agency",
    title: "Esta propuesta es privada",
    subtitle: "Ingresa la contraseña que se te compartió para continuar.",
    placeholder: "Contraseña",
    button: "Entrar",
    error: "Contraseña incorrecta. Inténtalo de nuevo.",
    generic: "Algo salió mal. Inténtalo de nuevo.",
  },
};

function LoginForm() {
  const { locale } = useLanguage();
  const t = copy[locale];
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        const dest = params.get("from") || "/";
        router.push(dest);
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error === "Incorrect password." ? t.error : t.generic);
      }
    } catch {
      setError(t.generic);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black px-6 py-16">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-red/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand-red/20 blur-3xl" />

      <div className="absolute right-6 top-6">
        <LangToggle light />
      </div>

      <div className="relative z-10 w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red">
          <Lock className="h-5 w-5 text-white" strokeWidth={2.25} />
        </div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          {t.eyebrow}
        </p>
        <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">
          {t.title}
        </h1>
        <p className="mt-2 text-sm text-white/60">{t.subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-3">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t.placeholder}
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none ring-0 focus:border-brand-red"
          />
          {error && <p className="text-sm text-brand-red">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-pill bg-brand-red px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "…" : t.button}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-black" />}>
      <LoginForm />
    </Suspense>
  );
}
