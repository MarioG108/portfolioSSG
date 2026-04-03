"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { useLanguage } from "@/hooks/useLanguage";

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useGSAP(() => {
    gsap.fromTo(".about-title",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(".about-content",
      { x: -50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 75%",
        },
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(".stat-item",
      { scale: 0.5, opacity: 0 },
      {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
        },
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        onStart: () => {
          const targets = document.querySelectorAll(".stat-number");
          targets.forEach((target: any) => {
            const endValue = parseInt(target.getAttribute("data-value") || "0");
            const obj = { value: 0 };
            gsap.to(obj, {
              value: endValue,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                target.innerHTML = Math.floor(obj.value).toString();
              },
            });
          });
        },
      }
    );

    gsap.fromTo(".value-card",
      { y: 100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".value-card-container",
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, { scope: sectionRef, dependencies: [language] });

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="about-title text-4xl md:text-6xl font-heading font-black mb-4 neon-text-purple tracking-tighter uppercase shrink-0">
            {language === 'es-DO' ? 'SOBRE' : 'ABOUT'} <span className="text-white">{language === 'es-DO' ? 'MÍ' : 'ME'}</span>
          </h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="about-content relative group mx-auto lg:mx-0 max-w-sm lg:max-w-none">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-2xl opacity-20 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-neon-purple shadow-neon-purple shadow-inner">
              <Image
                src="/pp.jpg"
                alt={t.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-neon-cyan neon-border-cyan rounded-tl-xl transition-all duration-300 group-hover:scale-125"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-neon-pink neon-border-pink rounded-br-xl transition-all duration-300 group-hover:scale-125"></div>
          </div>

          <div className="about-content">
            <p className="text-xl text-text-primary leading-relaxed mb-10 font-light first-letter:text-5xl first-letter:text-neon-cyan first-letter:font-heading first-letter:mr-2">
              {t.about.bio}
            </p>

            <div ref={statsRef} className="grid grid-cols-3 gap-6 mb-10">
              {t.about.stats.map((stat, idx) => (
                <div key={idx} className="stat-item text-center p-6 glass rounded-xl border-neon-purple/20">
                  <div
                    className="stat-number text-4xl font-heading font-black neon-text-cyan mb-2"
                    data-value={stat.value}
                  >
                    0
                  </div>
                  <div className="text-[10px] md:text-sm text-text-muted font-bold uppercase tracking-widest leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="value-card-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.about.values.map((val: any, idx: number) => {
            const Icon = (LucideIcons as any)[val.icon] || LucideIcons.HelpCircle;
            return (
              <div
                key={idx}
                className="value-card group p-8 glass rounded-2xl border-l-4 border-neon-cyan hover:border-neon-pink transition-all duration-300 interactive"
              >
                <div className="w-14 h-14 bg-dark-bg flex items-center justify-center rounded-xl border border-neon-cyan group-hover:border-neon-pink text-neon-cyan group-hover:text-neon-pink group-hover:shadow-neon-pink shadow-neon-cyan transition-all mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{val.title}</h3>
                <p className="text-text-muted">{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
