import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export default function ExperienceSidebar() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const experiences: Experience[] = t('EXPERIENCE', { returnObjects: true }) as Experience[];

  // GSAP para Desktop
  useEffect(() => {
    if (!containerRef.current) return;
    
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${experiences.length * 800}`,
        pin: true,
        snap: {
          snapTo: 1 / (experiences.length - 1),
          duration: 0.5,
          ease: 'power2.inOut'
        },
        onUpdate: (self) => {
          const index = Math.round(self.progress * (experiences.length - 1));
          setActiveIndex(index);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [experiences.length]);

  // GSAP para Mobile - Timeline con scroll
  useEffect(() => {
    if (!mobileCardsRef.current) return;
    
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.experience-card');
      const timeline = gsap.utils.toArray('.timeline-dot');
      
      cards.forEach((card: any, index) => {
        // Animación de entrada para cada card
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
              onEnter: () => setActiveIndex(index),
              onEnterBack: () => setActiveIndex(index)
            }
          }
        );

        // Animar el dot de la timeline
        if (timeline[index]) {
          gsap.fromTo(timeline[index],
            {
              scale: 0,
              backgroundColor: '#475569'
            },
            {
              scale: 1,
              backgroundColor: '#22d3ee',
              duration: 0.5,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });

      // Animar la línea vertical progresivamente
      const line = document.querySelector('.timeline-line-progress');
      if (line) {
        gsap.fromTo(line,
          {
            scaleY: 0
          },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: mobileCardsRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1
            }
          }
        );
      }
    }, mobileCardsRef);

    return () => ctx.revert();
  }, [experiences.length]);

  return (
    <>
      {/* MOBILE VERSION - Timeline vertical con GSAP */}
      <div className="lg:hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4" id="experiencia">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-16">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('Experiencia.title')}</h2>
          </div>

          {/* Timeline Container */}
          <div ref={mobileCardsRef} className="relative">
            {/* Línea vertical de fondo */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
            
            {/* Línea vertical progresiva (animada) */}
            <div 
              className="timeline-line-progress absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 origin-top"
              style={{ transformOrigin: 'top' }}
            ></div>

            {/* Experience Cards con Timeline */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="experience-card relative pl-12"
                >
                  {/* Dot en la timeline */}
                  <div 
                    className="timeline-dot absolute left-0 top-6 w-8 h-8 rounded-full border-4 border-slate-900 bg-slate-600 shadow-lg z-10"
                  ></div>

                  {/* Card Content */}
                  <div className="bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                    {/* Date */}
                    <div className="text-cyan-400 text-sm font-semibold mb-2">
                      {exp.date}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    {/* Company */}
                    <p className="text-sm sm:text-base text-slate-400 mb-4">
                      {exp.company}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        {t('Experiencia.technologies')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-700 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION - Diseño con sidebar */}
      <div className="hidden lg:block min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="experiencia">
        <div ref={containerRef} className="h-screen flex max-w-7xl mx-auto">
          {/* Sidebar */}
          <div className="w-1/3 bg-gradient-to-b from-slate-800 to-slate-700 p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white">{t('Experiencia.title')}</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`transition-all duration-500 cursor-pointer ${
                    activeIndex === index
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-40 translate-x-2'
                  }`}
                >
                  <div className="text-cyan-400 text-sm font-semibold mb-1">
                    {exp.date}
                  </div>
                  <div className="text-white text-lg font-medium">
                    {exp.title}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {exp.company}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Panel */}
          <div className="w-2/3 p-12 flex items-center justify-center relative overflow-hidden">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`absolute inset-0 p-12 flex flex-col justify-center items-center transition-all duration-700 ${
                  activeIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="max-w-4xl w-full text-center">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-cyan-400 mb-6">
                    {exp.company}
                  </p>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      {t('Experiencia.technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
