"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { gsap, TextPlugin } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { useLanguage } from "@/hooks/useLanguage";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const { t, language } = useLanguage();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(".headline-word",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        delay: 0.5,
      }
    );

    const words = t.typewriterRoles;
    let wordIndex = 0;

    const typewriterLoop = () => {
      if (!typewriterRef.current) return;
      gsap.to(typewriterRef.current, {
        duration: 2,
        text: words[wordIndex],
        ease: "none",
        onComplete: () => {
          gsap.delayedCall(2, () => {
            wordIndex = (wordIndex + 1) % words.length;
            typewriterLoop();
          });
        },
      });
    };
    typewriterLoop();

    gsap.to(".neon-text-cyan", {
      textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7, 0 0 40px #00fff7",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    gsap.to(".scroll-indicator", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    tl.fromTo(
      ".cta-btn",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
      },
      "-=0.5"
    );
  }, { scope: sectionRef, dependencies: [language] });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 animated-bg opacity-30 grid-overlay scanlines pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tight overflow-hidden leading-tight"
        >
          <span className="headline-word inline-block mr-4">{language === 'es-DO' ? 'Hola,' : 'Hi,'}</span>
          <span className="headline-word inline-block mr-4 text-white">{language === 'es-DO' ? 'Soy' : "I'm"}</span>
          <span className="headline-word inline-block neon-text-cyan">
            {t.name.split(" ").map((word: string, i: number) => (
              <span key={i} className="inline-block mr-2 ">
                {word}
              </span>
            ))}
          </span>
        </h1>

        <div className="text-xl md:text-3xl text-text-muted mb-12 h-8 font-inter font-light">
          <span className="text-neon-pink mr-2 leading-none uppercase tracking-widest text-sm font-bold">
            [{" "}
          </span>
          <span ref={typewriterRef} className="text-text-primary"></span>
          <span className="text-neon-pink ml-2 leading-none uppercase tracking-widest text-sm font-bold">
            {" "}
            ]
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link href="/#projects" className="cta-btn relative px-8 py-4 bg-neon-cyan text-dark-bg font-bold font-heading rounded-sm neon-border-cyan hover:scale-105 transition-transform interactive group uppercase tracking-widest">
            {language === 'es-DO' ? 'Ver Proyectos' : 'View Work'}
            <span className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link href="/#contact" className="cta-btn px-8 py-4 border-2 border-neon-purple text-neon-purple font-bold font-heading rounded-sm hover:bg-neon-purple/10 hover:shadow-neon-purple transition-all interactive uppercase tracking-widest">
            {language === 'es-DO' ? 'Contactar' : 'Get in Touch'}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted scroll-indicator">
        <ArrowDown size={32} className="neon-text-cyan opacity-70" />
      </div>
    </section>
  );
};
