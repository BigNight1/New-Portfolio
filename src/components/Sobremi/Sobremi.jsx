import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  Target,
} from "lucide-react";
import SkillsCarousel from "./SkillsCarousel";

gsap.registerPlugin(ScrollTrigger);

const DESCRIPTION = [
  {
    description: "Sobremi.descripcion.1",
  },
  {
    description: "Sobremi.descripcion.2",
  },
  {
    description: "Sobremi.descripcion.3",
  },
];

const Sobremi = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título principal
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación del contenido
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación de las skills carousel
      gsap.fromTo(
        skillsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobremi"
      className="relative min-h-screen bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >

      <div className="relative z-10 max-w-6xl mx-auto sm:px-6 md:px-8 py-12">
        {/* Header Section */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-gray-800 via-cyan-400 to-blue-500 dark:from-white dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            {t("Sobremi.sobre")}
          </h2>
          <div className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            <span className="text-cyan-400 font-bold text-2xl">4+ </span>
            {t("Sobremi.subsobre")}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - About Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                {t("Sobremi.conoceme")}
              </h3>
            </div>

            <div className="space-y-4">
              {DESCRIPTION.map((description, index) => (
                <div
                  key={index}
                  className="group relative p-4 bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-100/70 dark:hover:bg-slate-800/70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-base">
                      {t(description.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#proyecto" aria-label={t("AriaLabels.projects_section")}>
                <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    {t("Sobremi.boton_proyecto")}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                {t("Mishabilidades.habher")}
              </h3>
            </div>

            {/* Skills Carousel */}
            <div ref={skillsRef}>
              <SkillsCarousel />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
