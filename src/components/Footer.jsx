import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUp, ArrowDownRight } from "lucide-react";

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

  const whatsappUrl =
    "https://wa.me/51965728013?text=Hola%20Edu,%20vengo%20de%20tu%20web%20bignight.dev%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto.%20%C2%BFCu%C3%A1ndo%20tienes%20disponibilidad%20para%20hablar?";

  return (
    <footer id="footer" className="relative bg-white dark:bg-slate-900 pt-16 pb-12 transition-colors duration-300">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/30 hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Thin top separator line matching the design */}
        <div className="border-t border-gray-200 dark:border-slate-800 w-full mb-12" />

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-8">
          
          {/* Brand Column (Left) */}
          <div className="md:col-span-5 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-xl font-bold text-gray-800 dark:text-white inline-flex items-center gap-1 group hover:text-purple-600 dark:hover:text-purple-400 transition-colors w-fit"
            >
              <span>Edu Armas</span>
              <ArrowDownRight className="w-4 h-4 text-orange-500 dark:text-orange-400 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              {t("Footer.description")}
            </p>
          </div>

          {/* Links Columns (Right) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 md:justify-items-end">
            
            {/* Pages Column */}
            <div className="flex flex-col min-w-[120px] md:w-36">
              <h4 className="text-xs font-black tracking-widest text-orange-500 dark:text-orange-400 uppercase mb-5">
                {t("Footer.pages")}
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <Link 
                    to="/" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    {t("Footer.home")}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/servicio" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    {t("Footer.services")}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/calculadora" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    {t("Footer.calculator")}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contacto" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    {t("Footer.contact")}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/resumen" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    {t("Footer.resume")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get In Touch Column */}
            <div className="flex flex-col min-w-[120px] md:w-36">
              <h4 className="text-xs font-black tracking-widest text-orange-500 dark:text-orange-400 uppercase mb-5">
                {t("Footer.connect")}
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <a 
                    href="mailto:edu.armas.dev@gmail.com" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/edu-armas" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/BigNight1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Area */}
        <div className="border-t border-gray-100 dark:border-slate-800/60 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
          <span>
            &copy; {new Date().getFullYear()} Edu Armas. {t("Footer.rights")}
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
