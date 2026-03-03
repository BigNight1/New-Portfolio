import React, { useEffect, useRef, useMemo } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Code2,
  Wrench,
  Server,
  Settings,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  Globe,
  Code2,
  Wrench,
  Server,
  Settings,
};

const Services = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const services = useMemo(() => {
    const data = t("Servicios.services", { returnObjects: true });
    if (!Array.isArray(data)) return [];
    return data;
  }, [t]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        gridRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
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
      id="servicios"
      className="relative min-h-screen bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto sm:px-6 md:px-8 py-12">
        <div ref={titleRef} className="text-center mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-gray-800 via-cyan-400 to-blue-500 dark:from-white dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            {t("Servicios.title")}
          </h2>
        </div>
        <p
          ref={subtitleRef}
          className="text-center text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          {t("Servicios.subtitle")}
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="group relative p-6 bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-100/70 dark:hover:bg-slate-800/70"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-400/20 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={ctaRef} className="text-center">
          <Link
            to="footer"
            smooth
            duration={500}
            className="inline-block"
            aria-label={t("Servicios.cta_aria")}
          >
            <button className="group relative px-6 py-3 bg-[#6366F1] dark:bg-[#4F46E5] hover:bg-[#4f46e5] dark:hover:bg-[#4338ca] text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6366F1]/25 dark:hover:shadow-[#4F46E5]/25">
              <span className="relative z-10 flex items-center gap-2">
                <Target className="w-4 h-4" />
                {t("Servicios.cta")}
              </span>
              <div className="absolute inset-0 bg-[#4F46E5] dark:bg-[#4338ca] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
