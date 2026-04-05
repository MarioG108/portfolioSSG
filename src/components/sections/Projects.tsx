"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Code as GitHub, ExternalLink } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { useLanguage } from "@/hooks/useLanguage";

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const projects = [...t.projects].sort((a: any, b: any) => parseInt(b.year) - parseInt(a.year));
  const categories = language === 'es-DO' ? ["All", "Web", "Mobile App"] : ["All", "Web", "Mobile App"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p: any) => p.category === filter);

  useGSAP(() => {
    gsap.fromTo(".projects-title",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(".project-card",
      { scale: 0.9, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 70%",
        },
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, { scope: containerRef, dependencies: [language, filter] });

  return (
    <section id="projects" ref={containerRef} className="py-24 bg-dark-bg relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="projects-title text-4xl md:text-6xl font-heading font-black mb-4 neon-text-pink tracking-tighter uppercase shrink-0">
            {language === 'es-DO' ? 'PROYECTOS' : 'SELECTED'} <span className="text-white uppercase">{language === 'es-DO' ? 'SELECCIONADOS' : 'PROJECTS'}</span>
          </h2>
          <div className="w-20 h-1 bg-neon-pink mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full border-2 font-bold font-heading uppercase tracking-widest text-sm transition-all duration-300 interactive ${filter === cat
                ? "bg-neon-pink text-white border-neon-pink shadow-neon-pink"
                : "border-text-muted text-text-muted hover:border-pink-500/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project: any, idx: number) => (
            <div
              key={idx}
              onClick={() => setActiveProjectId(activeProjectId === idx ? null : idx)}
              className={`project-card group relative aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden glass border-white/5 hover:border-pink-500 transition-all duration-500 interactive cursor-pointer ${activeProjectId === idx ? "border-neon-pink shadow-neon-pink" : ""}`}
            >
              <div className={`absolute inset-0 z-0 transition-all duration-500 ${activeProjectId === idx ? "blur-sm" : "group-hover:blur-sm"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  quality={75}
                  className={`object-cover transition-transform duration-1000 ${activeProjectId === idx ? "scale-110" : "group-hover:scale-110"}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent transition-opacity ${activeProjectId === idx ? "opacity-90" : "opacity-60 group-hover:opacity-80"}`}></div>
              </div>

              <div className="absolute top-6 right-6 z-20 px-4 py-1.5 bg-dark-bg/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-heading font-black text-white/70 uppercase tracking-widest shadow-lg">
                {project.year}
              </div>

              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                <div className={`transform transition-transform duration-500 flex flex-col gap-4 ${activeProjectId === idx ? "translate-y-0" : "translate-y-12 group-hover:translate-y-0"}`}>

                  <h3 className={`text-2xl md:text-3xl font-heading font-black text-white transition-all ${activeProjectId === idx ? "neon-text-pink opacity-100" : "group-hover:neon-text-pink opacity-0 group-hover:opacity-100"}`}>
                    {project.title}
                  </h3>

                  <p className={`text-text-primary text-xs md:text-sm line-clamp-4 md:line-clamp-2 max-w-sm transition-all duration-500 delay-100 ${activeProjectId === idx ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    {project.description}
                  </p>

                  <div className={`flex gap-6 mb-4 transition-all duration-500 delay-200 ${activeProjectId === idx ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="text-text-primary hover:neon-text-cyan transition-all interactive flex items-center gap-2 group/link"
                      >
                        <GitHub size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest group-hover/link:underline">Code</span>
                      </a>
                    )}
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="text-text-primary hover:neon-text-cyan transition-all interactive flex items-center gap-2 group/link"
                      >
                        <ExternalLink size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest group-hover/link:underline">Live Demo</span>
                      </a>
                    )}
                  </div>

                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 bg-neon-pink/20 text-xs border border-neon-pink/30 rounded-full text-[10px] font-bold uppercase tracking-widest font-heading shadow-neon-pink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>


              <div className={`absolute inset-0 bg-neon-pink/10 transition-opacity pointer-events-none ${activeProjectId === idx ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
