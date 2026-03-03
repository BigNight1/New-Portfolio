import "../../styles/header.css";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useTheme,
  getImageSource,
  LANGUAGES,
  useLanguage,
} from "./themeUtils.jsx";
import MyAge from "../Myage/myage.jsx";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import Tooltip from "./Tooltip";
import { Menu, X } from "lucide-react";

const OVERLAY_DURATION_MS = 160;

function Header() {
  const { t } = useTranslation();
  const { toggleTheme, theme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const currentLanguage = LANGUAGES.find((lang) => lang.code === language);
  const imageSource = getImageSource(theme);
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [entered, setEntered] = useState(false);
  const exitTimeoutRef = useRef(null);

  // Cierra el menú al cambiar de ruta (sin animación)
  useEffect(() => {
    setMenuOpen(false);
    setIsExiting(false);
  }, [location.pathname]);

  // Bloquea scroll cuando el menú está abierto o cerrando
  const overlayVisible = menuOpen || isExiting;
  useEffect(() => {
    document.body.style.overflow = overlayVisible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [overlayVisible]);

  // Animación de entrada: un frame después de montar
  useEffect(() => {
    if (menuOpen && !isExiting) {
      setEntered(false);
      const id = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(id);
    }
  }, [menuOpen, isExiting]);

  // Cerrar con animación: primero isExiting, luego desmontar
  const closeMenu = () => {
    if (!menuOpen) return;
    setIsExiting(true);
    exitTimeoutRef.current = window.setTimeout(() => {
      setMenuOpen(false);
      setIsExiting(false);
      exitTimeoutRef.current = null;
    }, OVERLAY_DURATION_MS);
  };

  useEffect(() => {
    return () => {
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <nav
        className={
          menuOpen
            ? "fixed inset-x-0 top-0 z-[100] bg-white dark:bg-slate-900"
            : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
        }
      >
        <div className="nav-content">
          {/* ── Lado izquierdo ── */}
          <div className="flex gap-1 py-5 items-center">
            <MyAge />
            <Link
              to="/"
              className="hidden sm:block text-2xl text-gray-800 font-black dark:text-[#e8e6e3] hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              BIGNIGHT.DEV
            </Link>
            <Link
              to="/servicio"
              className="hidden sm:inline-flex ml-4 items-baseline gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {t("Menu.Servicios")}
              <span className="text-[10px] uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-normal">
                freelance
              </span>
            </Link>
          </div>

          {/* ── Lado derecho ── */}
          <div className="flex items-center">
            {currentLanguage && (
              <Tooltip
                text={currentLanguage.code === "es" ? "Español" : "English"}
                position="bottom"
              >
                <div className="relative group mx-2 p-1 rounded-full dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                  <div
                    className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-xl group-active:scale-95 group-hover:brightness-110"
                    onClick={toggleLanguage}
                  >
                    <img
                      src={currentLanguage.icon}
                      alt={currentLanguage.code}
                      className="w-6 h-6 rounded-full border-2 border-transparent transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </Tooltip>
            )}
            <Tooltip
              text={theme === "light" ? "Modo Oscuro" : "Modo Claro"}
              position="bottom"
            >
              <ThemeToggle
                theme={theme}
                toggleTheme={toggleTheme}
                imageSource={imageSource}
              />
            </Tooltip>
            <button
              className="sm:hidden ml-1 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay móvil: pantalla completa + animación slide */}
      {overlayVisible && (
        <div
          className={`sm:hidden fixed inset-0 z-[110] bg-white dark:bg-slate-900 flex flex-col transition-transform duration-300 ease-out ${
            entered && !isExiting ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          {/* Barra superior: logo + BIGNIGHT arriba a la izquierda, X a la derecha */}
          <div className="h-16 flex items-center justify-between px-4 shrink-0 border-b border-gray-200 dark:border-slate-700">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              onClick={closeMenu}
            >
              <img
                src="/others/Bignight.webp"
                alt=""
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                BIGNIGHT.DEV
              </span>
            </Link>
            <button
              type="button"
              className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Servicios: título y debajo "freelance" */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 min-h-0">
            <Link
              to="/servicio"
              className="w-full max-w-sm flex flex-col items-center py-4 px-6 rounded-2xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 active:scale-[0.98] transition-all"
              onClick={closeMenu}
            >
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("Menu.Servicios")}
              </span>
              <span className="text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-normal mt-0.5">
                freelance
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
