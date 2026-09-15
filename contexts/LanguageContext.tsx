"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { pt, type Translations } from "@/locales/pt";
import { en } from "@/locales/en";
import { es } from "@/locales/es";

export type Lang = "pt" | "en" | "es";

const locales: Record<Lang, Translations> = { pt, en, es };

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  setLang: () => {},
  t: pt,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("site-lang") as Lang | null;
    if (stored && locales[stored]) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("site-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: locales[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
