"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { portfolioData, Translation } from "@/data/portfolio";

type Language = "es-DO" | "en-US";

interface LanguageContextType {
  language: Language;
  t: Translation;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("es-DO");

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("portfolio-lang", lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang && portfolioData[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const t = portfolioData[language];

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage: toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
