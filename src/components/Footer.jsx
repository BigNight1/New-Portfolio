import { useTranslation } from "react-i18next";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-gray-200/50 dark:border-slate-700/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 dark:bg-gradient-to-r dark:from-cyan-500/5 dark:to-blue-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2 bg-gradient-to-r from-gray-800 via-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                Edu Armas
              </h3>
              <p className="text-cyan-400 text-sm font-medium">bignight.dev</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              {t("Footer.description")}
            </p>
          </div>

          {/* Contact & Social */}
          <div className="text-center sm:text-right">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              {t("Footer.connect")}
            </h4>
            <div className="flex justify-center sm:justify-end gap-4 mb-4">
              <a
                href="https://github.com/BigNight1"
                aria-label="GitHub de Edu Armas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200/50 dark:bg-slate-700/50 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-cyan-500/20 hover:border hover:border-cyan-400/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/edu-armas"
                target="_blank"
                aria-label="LinkedIn de Edu Armas"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200/50 dark:bg-slate-700/50 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-blue-500/20 hover:border hover:border-blue-400/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:edu.armas.dev@gmail.com"
                target="_blank" 
                rel="noopener"
                aria-label="Enviar email a Edu Armas"
                className="w-10 h-10 bg-gray-200/50 dark:bg-slate-700/50 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-red-500/20 hover:border hover:border-red-400/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            {/* Small CTA */}
            <div className="flex justify-center sm:justify-end mt-6">
              <a
                href="https://wa.me/51965728013?text=¡Hola!%20Me%20interesa%20colaborar%20contigo%20en%20un%20proyecto.%20¿Podemos%20hablar?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("AriaLabels.whatsapp_contact")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-full border border-gray-300/30 dark:border-slate-600/30 hover:border-cyan-400/50 hover:bg-gray-300/40 dark:hover:bg-slate-700/40 transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-cyan-300 text-xs"
              >
                <Zap className="w-3 h-3" />
                <span>{t("Footer.collaborate")}</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/50 dark:border-slate-700/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            <span>&copy; 2025</span>
            <span>{t("Footer.rights")}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            <span>{t("Footer.made_with")}</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 animate-pulse" />
            <span>{t("Footer.and_coffee")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
