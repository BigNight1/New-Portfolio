import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Database,
  Server,
  Terminal,
  GitBranch,
  Cpu,
  Zap,
  Layers,
  Palette,
  Github,
  FileText,
  Monitor,
  Cloud,
  Settings,
  Activity,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: 1,
    name: "HTML",
    category: "Frontend",
    icon: FileText,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    id: 2,
    name: "CSS",
    category: "Frontend",
    icon: Palette,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
    {
      id: 3,
      name: "NestJS",
      category: "Backend",
      icon: Layers,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
  {
    id: 4,
    name: "JavaScript",
    category: "Frontend",
    icon: Code,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    id: 5,
    name: "React",
    category: "Frontend",
    icon: Cpu,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    id: 6,
    name: "Node.js",
    category: "Backend",
    icon: Server,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    id: 7,
    name: "Express",
    category: "Backend",
    icon: Terminal,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
  },
  {
    id: 8,
    name: "MongoDB",
    category: "Database",
    icon: Database,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    id: 9,
    name: "Vercel",
    category: "Deployment",
    icon: Cloud,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    id: 10,
    name: "Git",
    category: "Tools",
    icon: GitBranch,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    id: 11,
    name: "GitHub",
    category: "Tools",
    icon: Github,
    color: "text-gray-400",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
  },
  {
    id: 12,
    name: "Tailwind",
    category: "Frontend",
    icon: Zap,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
  },
  {
    id: 13,
    name: "Postman",
    category: "Tools",
    icon: Settings,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    id: 14,
    name: "Adobe Photoshop",
    category: "Design",
    icon: Monitor,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    id: 15,
    name: "Adobe Premiere",
    category: "Design",
    icon: Activity,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
];

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

      // Animación de las skills
      gsap.fromTo(
        skillsRef.current?.children,
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
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
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%,transparent_100%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
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
                  <p className="relative text-gray-800 dark:text-gray-300 leading-relaxed text-base">
                    {t(description.description)}
                  </p>
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
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                {t("Mishabilidades.habher")}
              </h3>
            </div>

            {/* Skills Grid */}
            <div
              ref={skillsRef}
              className="grid grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.id}
                    className={`group relative p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${skill.bgColor} ${skill.borderColor} hover:shadow-cyan-500/20`}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div
                        className={`w-6 h-6 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className="w-full h-full" />
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white text-xs group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {skill.category}
                      </span>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6">
              <div className="text-center p-3 bg-gray-100/50 dark:bg-slate-800/50 rounded-lg border border-gray-200/50 dark:border-slate-700/50">
                <div className="text-xl font-bold text-cyan-400">15+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Technologies
                </div>
              </div>
              <div className="text-center p-3 bg-gray-100/50 dark:bg-slate-800/50 rounded-lg border border-gray-200/50 dark:border-slate-700/50">
                <div className="text-xl font-bold text-green-400">2+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Years
                </div>
              </div>
              <div className="text-center p-3 bg-gray-100/50 dark:bg-slate-800/50 rounded-lg border border-gray-200/50 dark:border-slate-700/50">
                <div className="text-xl font-bold text-purple-400">∞</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Passion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
