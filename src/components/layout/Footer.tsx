"use client";

import Link from "next/link";
import { MoveUp } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50 shadow-neon-cyan"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left mb-16">
          <div className="flex flex-col gap-4">
            <Link href="/" className="group flex justify-center md:justify-start">
              <span className="text-3xl font-heading font-black neon-text-cyan tracking-tighter">
                Mario-G<span className="text-neon-pink">.</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm max-w-xs mx-auto md:mx-0">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white font-heading mb-2">Navigation</h4>
            {[t.nav.home, t.nav.about, t.nav.skills, t.nav.projects, t.nav.contact].map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-text-muted hover:neon-text-cyan transition-all text-sm font-medium w-fit mx-auto md:mx-0 interactive"
              >
                {link}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end justify-center md:justify-end gap-6">
            <button
              onClick={scrollToTop}
              className="w-14 h-14 bg-dark-bg border border-neon-cyan/30 rounded-full flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg hover:shadow-neon-cyan transition-all interactive duration-300 group"
            >
              <MoveUp className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="text-xs font-bold uppercase tracking-widest text-text-muted">{t.footer.returnToSource}</div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-text-muted font-medium">
            &copy; {currentYear} {t.name}. {t.footer.allRights}
          </div>
          <div className="text-xs text-text-muted font-medium flex items-center gap-2">
            {t.footer.madeWith} <span className="neon-text-pink">&lt;3</span> and <span className="text-white hover:neon-text-cyan transition-colors cursor-pointer">React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
