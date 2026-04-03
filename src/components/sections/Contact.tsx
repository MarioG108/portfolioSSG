"use client";

import { useRef, useState } from "react";
import * as LucideIcons from "lucide-react";
import { socials } from "@/data/portfolio";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { useLanguage } from "@/hooks/useLanguage";

export const Contact = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(() => {
    gsap.fromTo(".contact-title", 
      { y: 50, opacity: 0 },
      {




































        
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(".contact-card", 
      { x: -50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 70%",
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(".social-card", 
      { x: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 70%",
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(".social-item", 
      { scale: 0.5, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".social-card",
          start: "top 80%",
        },
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );


    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.to(input, { borderColor: "#00fff7", boxShadow: "0 0 15px rgba(0, 255, 247, 0.4)", duration: 0.3 });
      });
      input.addEventListener("blur", () => {
        gsap.to(input, { borderColor: "rgba(255, 255, 255, 0.1)", boxShadow: "none", duration: 0.3 });
      });
    });
  }, { scope: sectionRef, dependencies: [language] });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector("button");
    gsap.to(btn, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    window.alert(language === 'es-DO' ? "¡Mensaje enviado!" : "Message sent!");
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-dark-bg relative">
      <div className="absolute inset-0 opacity-10 -z-10 grid-overlay"></div>

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="contact-title text-4xl md:text-6xl font-heading font-black mb-4 neon-text-cyan tracking-tighter uppercase shrink-0">
            {t.contact.title.split(' ')[0]} <span className="text-white uppercase">{t.contact.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-20 h-1 bg-neon-cyan mx-auto"></div>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="contact-card p-10 glass rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-neon-cyan/10 blur-[100px] rounded-full group-hover:bg-neon-cyan/20 transition-all pointer-events-none"></div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group/input">
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2 font-heading group-focus-within/input:text-neon-cyan transition-colors">{t.contact.form.name}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-6 py-4 outline-none text-white transition-all focus:border-neon-cyan interactive"
                  />
                </div>
                <div className="group/input">
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2 font-heading group-focus-within/input:text-neon-cyan transition-colors">{t.contact.form.email}</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-6 py-4 outline-none text-white transition-all focus:border-neon-cyan interactive"
                  />
                </div>
              </div>
              <div className="group/input">
                <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2 font-heading group-focus-within/input:text-neon-cyan transition-colors">{t.contact.form.subject}</label>
                <input
                  type="text"
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-6 py-4 outline-none text-white transition-all focus:border-neon-cyan interactive"
                />
              </div>
              <div className="group/input">
                <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2 font-heading group-focus-within/input:text-neon-cyan transition-colors">{t.contact.form.message}</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-6 py-4 outline-none text-white transition-all focus:border-neon-cyan interactive resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="mt-4 px-10 py-5 bg-dark-bg border-2 border-neon-cyan text-neon-cyan font-heading font-black uppercase tracking-widest rounded-xl hover:bg-neon-cyan hover:text-dark-bg hover:shadow-neon-cyan transition-all interactive duration-300 flex items-center justify-center gap-3 overflow-hidden group/btn"
              >
                {t.contact.form.submit} <LucideIcons.Send size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

          <div className="social-card flex flex-col justify-between py-6">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-8 flex items-center gap-4">
                {t.contact.collab.split(' ')[0]} <span className="neon-text-pink uppercase shrink-0">{t.contact.collab.split(' ').slice(1).join(' ')}</span>
              </h3>
              <p className="text-xl text-text-muted mb-12 font-light leading-relaxed">
                {t.contact.collabText}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {socials.map((social, idx) => {
                  const Icon = (LucideIcons as any)[social.icon] || LucideIcons.HelpCircle;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      className="social-item group p-6 glass rounded-2xl border border-white/5 hover:border-neon-pink hover:shadow-neon-pink transition-all duration-500 interactive"
                    >
                      <Icon className="text-text-muted group-hover:text-neon-pink transition-colors mb-4" size={32} />
                      <div className="text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-white">{social.platform}</div>
                      <div className="text-xs text-text-muted truncate mt-1">@gonzalez.aquino</div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-8 border-l-2 border-neon-purple glass rounded-r-3xl">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4 font-heading">Location</div>
              <div className="text-lg md:text-2xl font-bold font-inter text-white">{t.contact.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
