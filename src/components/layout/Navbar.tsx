"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Languages } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { useLanguage } from "@/hooks/useLanguage";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/#home" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.skills, href: "/#skills" },
    { name: t.nav.projects, href: "/#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(".nav-link", {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(".logo", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  }, { scope: containerRef, dependencies: [language] });

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power3.out", display: "flex" }
      );
    } else if (menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 0,
        x: 100,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  return (
    <header
      ref={containerRef}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? "py-4 glass shadow-lg" : "py-8 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="logo group">
          <span className="text-3xl font-heading font-bold neon-text-cyan tracking-tighter">
            Mario-G<span className="text-neon-pink text-4xl leading-none">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link relative font-medium group text-text-primary hover:text-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-cyan neon-border-cyan group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Lang Switcher */}
          <button
            onClick={() => setLanguage(language === "es-DO" ? "en-US" : "es-DO")}
            className="flex items-center gap-2 px-3 py-1 glass rounded-full border border-white/10 hover:border-neon-cyan transition-all interactive"
          >
            <Languages size={16} className="text-neon-cyan" />
            <span className="text-xs font-bold font-heading uppercase italic">
              {language === "es-DO" ? "EN" : "ES"}
            </span>
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "es-DO" ? "en-US" : "es-DO")}
            className="flex items-center gap-2 px-2 py-1 glass rounded-full border border-white/10"
          >
            <Languages size={14} className="text-neon-cyan" />
            <span className="text-[10px] font-bold">{language === "es-DO" ? "EN" : "ES"}</span>
          </button>

          <button
            className="text-text-primary hover:neon-text-pink transition-colors interactive flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className="fixed inset-0 h-screen bg-dark-bg/95 backdrop-blur-xl z-[90] flex-col items-center justify-center gap-8 hidden"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="mobile-link text-3xl font-heading text-text-primary hover:neon-text-cyan transition-all"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
