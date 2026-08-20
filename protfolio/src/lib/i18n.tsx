"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages, type Lang } from "./translations";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

function getByPath(source: Record<string, unknown>, key: string): string | undefined {
  const value = key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, source);
  return typeof value === "string" ? value : undefined;
}

async function detectLang(): Promise<Lang> {
  if (typeof window !== "undefined") {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "ja" || param === "en") return param;
  }

  try {
    const response = await fetch("https://get.geojs.io/v1/ip/country.json", {
      cache: "no-store",
    });
    if (response.ok) {
      const data = (await response.json()) as { country?: string };
      if (String(data.country || "").toUpperCase() === "JP") return "ja";
    }
  } catch {
    // Fall through to browser language, then English.
  }

  if (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("ja")) {
    return "ja";
  }

  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const applyLang = (next: Lang, persistChoice = false) => {
    setLangState(next);
    document.documentElement.lang = next;
    sessionStorage.setItem("katsl-lang", next);
    if (persistChoice) {
      localStorage.setItem("katsl-lang-choice", next);
    }
  };

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("lang");
    const choice = localStorage.getItem("katsl-lang-choice");

    if (param === "ja" || param === "en") {
      applyLang(param, true);
      return;
    }

    if (choice === "ja" || choice === "en") {
      applyLang(choice);
      return;
    }

    detectLang().then((next) => {
      applyLang(next);
    });
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang: (next) => applyLang(next, true),
      t: (key: string) => getByPath(messages[lang] as Record<string, unknown>, key) ?? key,
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function T({ k }: { k: string }) {
  const { t } = useI18n();
  return <>{t(k)}</>;
}
