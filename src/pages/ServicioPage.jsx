import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer.jsx";

const ServicioPage = () => {
  const { t } = useTranslation();

  const pageServices = useMemo(() => {
    const data = t("ServicioPage.pageServices", { returnObjects: true });
    if (!Array.isArray(data)) return [];
    return data;
  }, [t]);

  const whatsappUrl =
    "https://wa.me/51965728013?text=¡Hola!%20Me%20interesa%20contratar%20tus%20servicios.%20¿Podemos%20hablar?";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.12),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-gray-800 via-cyan-400 to-blue-500 dark:from-white dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            {t("ServicioPage.hero_title")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            {t("ServicioPage.hero_subtitle")}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("ServicioPage.hero_cta_aria")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366F1] dark:bg-[#4F46E5] hover:bg-[#4f46e5] dark:hover:bg-[#4338ca] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6366F1]/25 dark:hover:shadow-[#4F46E5]/25"
          >
            {t("ServicioPage.hero_cta")}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Services grid */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12 bg-gradient-to-r from-gray-800 via-cyan-400 to-blue-500 dark:from-white dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
          {t("ServicioPage.section_title")}
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pageServices.map((service) => (
            <article
              key={service.id}
              className="group  overflow-hidden bg-gray-100/50 dark:bg-slate-800/50 border border-gray-200/50 dark:border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="overflow-hidden bg-gray-200 dark:bg-slate-700 h-56 sm:h-64">
                <img
                  src={service.img}
                  alt={service.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium text-sm hover:gap-3 transition-all"
                >
                  {t("ServicioPage.card_button")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Back to home */}
      <div className="border-t border-gray-200/50 dark:border-slate-700/50 py-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm font-medium transition-colors"
        >
          ← {t("ServicioPage.back_to_home")}
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ServicioPage;
