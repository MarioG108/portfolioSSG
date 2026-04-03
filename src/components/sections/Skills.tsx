"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { useLanguage } from "@/hooks/useLanguage";

export const Skills = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  useGSAP(() => {
    gsap.from(".skills-title", {
      scrollTrigger: {
        trigger: ".skills-title",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".skill-category", {
      scrollTrigger: {
        trigger: ".skill-grid",
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".skill-item", {
      scrollTrigger: {
        trigger: ".skill-grid",
        start: "top 60%",
      },
      x: -20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.out",
    });
  }, { scope: containerRef, dependencies: [language] });

  const categories = [
    { name: language === 'es-DO' ? 'Front-end' : 'Frontend', data: t.skills.frontend, color: "neon-cyan" },
    { name: language === 'es-DO' ? 'Back-end' : 'Backend', data: t.skills.backend, color: "neon-purple" },
    { name: language === 'es-DO' ? 'Herramientas' : 'Tools', data: t.skills.tools, color: "neon-pink" },
  ];

  return (
    <section id="skills" ref={containerRef} className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 -z-10 grid-overlay"></div>

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="skills-title text-4xl md:text-6xl font-heading font-black mb-4 neon-text-cyan tracking-tighter uppercase shrink-0">
            {language === 'es-DO' ? 'MIS' : 'MY'} <span className="text-white uppercase">{language === 'es-DO' ? 'HERRAMIENTAS' : 'GEAR'}</span>
          </h2>
          <div className="w-20 h-1 bg-neon-cyan mx-auto"></div>
        </div>

        <div className="skill-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`skill-category p-8 glass rounded-3xl border-t-2 border-${cat.color} group relative transition-all duration-500 hover:shadow-${cat.color}`}
            >
              <h3 className={`text-2xl font-heading font-bold mb-8 uppercase tracking-widest text-center text-${cat.color}`}>
                {cat.name}
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {cat.data.map((skill: string, sIdx: number) => (
                  <div
                    key={sIdx}
                    className={`skill-item px-5 py-3 glass rounded-full flex items-center border border-white/5 hover:border-${cat.color} hover:neon-text-${cat.color.split('-')[1]} transition-all duration-300 interactive group/item select-none`}
                  >
                    <span className="text-sm font-bold tracking-tight uppercase group-hover/item:scale-110 transition-transform">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`absolute -bottom-2 -right-2 w-16 h-16 bg-${cat.color}/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
