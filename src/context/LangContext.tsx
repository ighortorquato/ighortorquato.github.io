'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Lang, Translations } from '@/lib/translations';

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'pt',
  t: translations.pt,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Lang | null;
    if (saved === 'pt' || saved === 'en') setLang(saved);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
