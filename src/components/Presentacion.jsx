import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { Github } from "./Icons/github.jsx";
import { Linkedin } from "./Icons/Linkedim.jsx";
import { useTranslation } from "react-i18next";
import { Gmail } from "./Icons/gmail.jsx";
// Eliminado styled-components
import { gsap } from "gsap";
import FloatingIcons from "./FloatingIcons";
import OrbitingIcons from "./OrbitingIcons";
import OptimizedImage from "./OptimizedImage";

const Presentacion = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del contenido izquierdo
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 }
      );

      gsap.fromTo(
        ".hero-description",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.6 }
      );

      gsap.fromTo(
        ".social-links a",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.9,
        }
      );

      gsap.fromTo(
        ".hero-buttons",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 1.2 }
      );

      // Animación de la imagen derecha
      gsap.fromTo(
        ".hero-image",
        { x: 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 lg:py-8"
    >
      {/* Background claro */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      {/* Background oscuro */}
      <div className="dark:absolute dark:inset-0 dark:-z-10 dark:h-full dark:w-full dark:items-center dark:px-5 dark:py-24 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Iconos flotantes */}
      <FloatingIcons />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Lado Izquierdo - Contenido */}
          <div
            ref={leftContentRef}
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-last lg:order-first mt-4 lg:mt-0"
          >
            <div className="text-black dark:text-white text-center lg:text-left">
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold py-1 font-['Inter'] tracking-tight">
                {t("Presentacion.presentation")}
              </h1>
              <div className="text-lg sm:text-xl dark:text-white">
                <h2 className="hero-subtitle font-['Inter'] font-medium text-gray-600 dark:text-gray-300">
                  <span className="font-['JetBrains_Mono'] font-bold text-green-500">
                    {"</>"}
                  </span>{" "}
                  {t("Presentacion.subtitle")}
                </h2>
              </div>
            </div>

            <div className="hero-description font-['Inter'] text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-0">
              {t("Presentacion.description")}
            </div>

            {/* Botones About y CV - Solo visibles en móvil después de la descripción */}
            <div className="hero-buttons flex flex-row gap-4 justify-center lg:hidden">
              <a href="#sobremi" aria-label={t("AriaLabels.about_section")}>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-['Inter'] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  {t("Presentacion.boton1")}
                </button>
              </a>
              <a
                href={t("Presentacion.link-cv")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar CV de Edu Armas"
                className="inline-block"
              >
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-['Inter'] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  {t("Presentacion.boton2")}
                </button>
              </a>
            </div>

            {/* Enlaces Sociales */}
            <div className="social-links flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://github.com/BigNight1"
                aria-label="GitHub de Edu Armas"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full border border-gray-300 dark:border-gray-600 flex justify-center items-center gap-x-2 py-2 px-4 sm:py-3 sm:px-6 bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                <Github className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white h-4 w-4 sm:h-5 sm:w-5 transition-colors" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white font-['Inter'] font-medium transition-colors text-sm sm:text-base">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/edu-armas-1a4b16260/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Edu Armas"
                className="group rounded-full border border-gray-300 dark:border-gray-600 flex justify-center items-center gap-x-2 py-2 px-4 sm:py-3 sm:px-6 bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                <Linkedin className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white h-4 w-4 sm:h-5 sm:w-5 transition-colors" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white font-['Inter'] font-medium transition-colors text-sm sm:text-base">
                  LinkedIn
                </span>
              </a>
              <a
                href="mailto:edu.armas.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar email a Edu Armas"
                className="group rounded-full border border-gray-300 dark:border-gray-600 flex justify-center items-center gap-x-2 py-2 px-4 sm:py-3 sm:px-6 bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                <Gmail className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white h-4 w-4 sm:h-5 sm:w-5 transition-colors" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white font-['Inter'] font-medium transition-colors text-xs sm:text-sm">
                  eduarmascontact@gmail.com
                </span>
              </a>
            </div>

            {/* Botones About y CV - Solo visibles en desktop al final */}
            <div className="hero-buttons hidden lg:flex gap-4 justify-center lg:justify-start">
              <a href="#sobremi" aria-label={t("AriaLabels.about_section")}>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-['Inter'] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  {t("Presentacion.boton1")}
                </button>
              </a>
              <a
                href={t("Presentacion.link-cv")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar CV de Edu Armas"
                className="inline-block"
              >
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-['Inter'] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  {t("Presentacion.boton2")}
                </button>
              </a>
            </div>
          </div>

          {/* Lado Derecho - Imagen */}
          <div
            ref={rightImageRef}
            className="flex justify-center  order-first lg:order-last mt-24 sm:mt-24 lg:mt-0"
          >
            <div className="hero-image relative group">
              {/* Tu imagen con efectos modernos */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 lg:group-hover:scale-105">
                <OptimizedImage
                  src="/User/Edu_armas288x288.webp"
                  srcSet="
                    /User/Edu_armas120x120.webp 120w,
                    /User/Edu_armas288x288.webp 288w,
                    /User/Edu_armas600x600.webp 600w
                  "
                  sizes="(max-width: 600px) 120px, (max-width: 1200px) 288px, 600px"
                  alt="Edu Armas"
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>

              {/* Efecto de glow animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-emerald-600/40 rounded-full blur-2xl -z-10 lg:group-hover:blur-3xl transition-all duration-500"></div>

              {/* Borde animado */}
              <div className="absolute inset-0 rounded-full border-3 border-green-500/60 lg:group-hover:border-green-400 transition-all duration-500"></div>

              {/* Iconos orbitando alrededor de la imagen */}
              <OrbitingIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Eliminado styled-components - usando Tailwind CSS

export default Presentacion;
