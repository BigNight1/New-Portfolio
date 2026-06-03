import "../../styles/header.css";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useTheme,
  getImageSource,
  LANGUAGES,
  useLanguage,
} from "./themeUtils.jsx";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const exitTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  // Cierra dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cierra menús al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
    setIsExiting(false);
    setDropdownOpen(false);
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
            <Link
              to="/"
              className="text-2xl text-gray-800 font-black dark:text-[#e8e6e3] hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              BIGNIGHT.DEV
            </Link>
          </div>

          {/* ── Lado derecho ── */}
          <div className="flex items-center">
            {/* Dropdown desktop */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="ml-1 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => {
                  if (window.innerWidth >= 640) {
                    setDropdownOpen(!dropdownOpen);
                  } else {
                    menuOpen ? closeMenu() : setMenuOpen(true);
                  }
                }}
                aria-label={dropdownOpen || menuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <div className={`hamburger-btn ${(dropdownOpen || menuOpen) ? 'hamburger-open' : ''}`}>
                  <span className="hamburger-line hamburger-line--top" />
                  <span className="hamburger-line hamburger-line--bottom" />
                </div>
              </button>
              <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <Link to="/servicio" onClick={() => setDropdownOpen(false)}>
                  {t("Menu.Servicios")}
                </Link>
                <Link to="/calculadora" onClick={() => setDropdownOpen(false)}>
                  {t("Menu.Calculadora")}
                </Link>
                <Link to="/proyectos" onClick={() => setDropdownOpen(false)}>
                  {t("Menu.Proyectos")}
                </Link>
                <Link to="/resumen" onClick={() => setDropdownOpen(false)}>
                  {t("Menu.Resumen")}
                </Link>
                <Link to="/contacto" onClick={() => setDropdownOpen(false)}>
                  {t("Menu.Contacto")}
                </Link>
                <div className="border-t border-gray-100 dark:border-slate-700 flex">
                  <button
                    onClick={toggleLanguage}
                    className="w-1/2 flex items-center justify-center gap-2 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <img src={currentLanguage?.icon} alt={currentLanguage?.code} className="w-5 h-5 rounded-full" />
                    <span>{currentLanguage?.code === "es" ? "Español" : "English"}</span>
                  </button>
                  <div className="w-px bg-gray-100 dark:bg-slate-700" />
                  <button
                    onClick={toggleTheme}
                    className="w-1/2 flex items-center justify-center gap-2 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <img src={imageSource} alt={theme} className="w-5 h-5" />
                    <span>{theme === "light" ? "Oscuro" : "Claro"}</span>
                  </button>
                </div>
              </div>
            </div>
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

          {/* Servicios & Calculadora: links en móvil */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 min-h-0">
            <Link
              to="/servicio"
              className="w-full max-w-sm flex flex-col items-center py-4 px-6 rounded-2xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 active:scale-[0.98] transition-all"
              onClick={closeMenu}
            >
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("Menu.Servicios")}
              </span>
            </Link>
            <Link
              to="/calculadora"
              className="w-full max-w-sm flex flex-col items-center py-4 px-6 rounded-2xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 active:scale-[0.98] transition-all"
              onClick={closeMenu}
            >
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("Menu.Calculadora")}
              </span>
            </Link>
            <Link
              to="/contacto"
              className="w-full max-w-sm flex flex-col items-center py-4 px-6 rounded-2xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 active:scale-[0.98] transition-all"
              onClick={closeMenu}
            >
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("Menu.Contacto")}
              </span>
            </Link>
            <Link
              to="/proyectos"
              className="w-full max-w-sm flex flex-col items-center py-4 px-6 rounded-2xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 active:scale-[0.98] transition-all"
              onClick={closeMenu}
            >
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("Menu.Proyectos")}
              </span>
            </Link>
            <Link
              to="/resumen"
              className="w-full max-w-sm flex flex-col items-center py-4 px-6 rounded-2xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 active:scale-[0.98] transition-all"
              onClick={closeMenu}
            >
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {t("Menu.Resumen")}
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
