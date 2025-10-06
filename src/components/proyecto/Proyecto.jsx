import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Eye, Rocket, Star, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Proyecto = () => {
  const { t } = useTranslation();
  const PROYECTO = t("PROYECTOS", { returnObjects: true });
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación de los proyectos
      gsap.fromTo(
        projectsRef.current?.children,
        { y: 100, opacity: 0, rotationX: 45 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
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
      id="proyecto"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%,transparent_100%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px] animate-pulse"></div>

      {/* Floating Code Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 text-2xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {
              ["</>", "< />", "{ }", "[ ]", "( )"][
                Math.floor(Math.random() * 5)
              ]
            }
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-20">
          <div className="flex sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-white bg-gradient-to-r from-gray-800 via-cyan-400 to-blue-500 dark:from-white dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
          {t("Proyecto.title-project")}
        </h2>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Proyectos que demuestran mi pasión por la programación y la
            innovación
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="space-y-8 lg:space-y-16">
          {PROYECTO.map((proyecto, index) => (
            <div
              key={proyecto.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(proyecto.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-slate-700/50 overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:bg-slate-800/70 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left Side - Project Info */}
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                    <div className="space-y-4 sm:space-y-6">
                      {/* Project Number */}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="h-1 flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                      </div>

                      {/* Project Title */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {proyecto.name}
                        </h3>
                        {/* Status Indicators */}
                        <div className="flex gap-2 flex-wrap">
                          {/* Project Status */}
                          {proyecto.estado && (
                            <div
                              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                proyecto.estado.includes("Cancelado") ||
                                proyecto.estado.includes("Cancelled")
                                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                  : proyecto.estado.includes("En desarrollo") ||
                                    proyecto.estado.includes("In development")
                                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                  : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                              }`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  proyecto.estado.includes("Cancelado") ||
                                  proyecto.estado.includes("Cancelled")
                                    ? "bg-red-400"
                                    : proyecto.estado.includes(
                                        "En desarrollo"
                                      ) ||
                                      proyecto.estado.includes("In development")
                                    ? "bg-yellow-400 animate-pulse"
                                    : "bg-gray-400"
                                }`}
                              ></div>
                              {proyecto.estado}
                            </div>
                          )}

                          {proyecto.href && proyecto.href !== "#" && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              Live
                            </div>
                          )}
                          {proyecto.code && proyecto.code !== "#" && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                              <Github className="w-3 h-3" />
                              Code
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Project Description */}
                      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                        {proyecto.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {proyecto.skills
                          .slice(0, 4)
                          .map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 sm:px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs sm:text-sm font-medium border border-cyan-400/20 hover:bg-cyan-400/10 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        {proyecto.skills.length > 4 && (
                          <span className="px-2 sm:px-3 py-1 bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200 dark:bg-slate-700/50 text-gray-600 dark:text-gray-400 rounded-full text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-500/20">
                            +{proyecto.skills.length - 4} más
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 relative z-10">
                      {/* Live Demo Button */}
                      {proyecto.href && proyecto.href !== "#" ? (
                        <a
                          href={proyecto.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30 w-full sm:min-w-[160px] lg:min-w-[180px] relative z-30 cursor-pointer border-2 border-transparent hover:border-cyan-300"
                        >
                          <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="text-base sm:text-lg">
                            {t("Proyecto.boton")}
                          </span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>
                      ) : (
                        <button
                          disabled
                          className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full cursor-not-allowed w-full sm:min-w-[160px] lg:min-w-[180px] relative z-30 border-2 ${
                            proyecto.estado &&
                            (proyecto.estado.includes("Cancelado") ||
                              proyecto.estado.includes("Cancelled"))
                              ? "bg-red-600/50 text-red-300 border-red-600"
                              : "bg-gray-600/50 text-gray-400 border-gray-600"
                          }`}
                        >
                          <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="text-base sm:text-lg">
                            {t("Proyecto.boton")}
                          </span>
                          <span className="text-xs">
                            {proyecto.estado &&
                            (proyecto.estado.includes("Cancelado") ||
                              proyecto.estado.includes("Cancelled"))
                              ? "(Cancelado)"
                              : "(Próximamente)"}
                          </span>
                        </button>
                      )}

                      {/* Code Button */}
                      {proyecto.code && proyecto.code !== "#" ? (
                        <a
                          href={proyecto.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full border-2 transition-all duration-300 w-full sm:min-w-[160px] lg:min-w-[180px] relative z-30 cursor-pointer ${
                            proyecto.estado &&
                            (proyecto.estado.includes("Cancelado") ||
                              proyecto.estado.includes("Cancelled"))
                              ? "bg-red-700/80 text-red-200 border-red-600/50 hover:bg-red-600 hover:border-red-500/50 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                              : "bg-slate-700/80 text-white border-slate-600/50 hover:bg-slate-600 hover:border-cyan-400/50 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/25"
                          }`}
                        >
                          <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="text-base sm:text-lg">
                            {t("Proyecto.code")}
                          </span>
                          {proyecto.estado &&
                            (proyecto.estado.includes("Cancelado") ||
                              proyecto.estado.includes("Cancelled")) && (
                              <span className="text-xs">(Cancelado)</span>
                            )}
                        </a>
                      ) : (
                        <button
                          disabled
                          className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full border-2 cursor-not-allowed w-full sm:min-w-[160px] lg:min-w-[180px] relative z-30 ${
                            proyecto.estado &&
                            (proyecto.estado.includes("Cancelado") ||
                              proyecto.estado.includes("Cancelled"))
                              ? "bg-red-600/50 text-red-300 border-red-600"
                              : "bg-gray-600/50 text-gray-400 border-gray-600"
                          }`}
                        >
                          <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="text-base sm:text-lg">
                            {t("Proyecto.code")}
                          </span>
                          <span className="text-xs">
                            {proyecto.estado &&
                            (proyecto.estado.includes("Cancelado") ||
                              proyecto.estado.includes("Cancelled"))
                              ? "(Cancelado)"
                              : "(Próximamente)"}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Project Image */}
                  <div className="relative overflow-hidden order-1 lg:order-2 h-64 sm:h-80 lg:h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 pointer-events-none"></div>
                    <img
                      src={proyecto.img}
                      alt={proyecto.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Simple Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyecto;
