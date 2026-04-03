"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useGSAP(() => {
    // Refresh ScrollTrigger to ensure all markers and triggers are correctly positioned
    ScrollTrigger.refresh();

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            gsap.to(window, {
              scrollTo: { y: targetElement, offsetY: 0 },
              duration: 1.5,
              ease: "power3.inOut"
            });
          }
        }
      });
    });

  }, { scope: containerRef, dependencies: [language] });

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* Testimonials */}
      <section className="py-24 bg-dark-bg/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 neon-text-purple tracking-tighter uppercase shrink-0">
              {language === 'es-DO' ? 'VOCES DE' : 'VOICES OF'} <span className="text-white">{language === 'es-DO' ? 'IMPACTO' : 'IMPACT'}</span>
            </h2>
            <div className="w-20 h-1 bg-neon-purple mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {t.testimonials.map((test: any, idx: number) => (
              <div
                key={idx}
                className="testimonial-card p-10 glass rounded-3xl border border-white/5 relative group hover:border-pink-500/30 transition-all duration-500 interactive"
              >
                <div className="text-neon-purple text-6xl font-serif absolute -top-4 -left-4 leading-none select-none">“</div>
                <p className="text-lg text-text-primary mb-8 font-light leading-relaxed italic relative z-10 transition-colors group-hover:text-white">
                  {test.text}
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-neon-purple/30 group-hover:border-neon-purple transition-all">
                    <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading text-white">{test.name}</h4>
                    <div className="text-sm font-bold text-neon-purple uppercase tracking-widest">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
