import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const LINKS = [
  {
    link: "Experiencia",
    to: "experiencia",
  },
  {
    link: "Sobre Mi",
    to: "sobremi",
  },
  {
    link: "Proyectos",
    to: "projectsgrid",
  },
];

export const LANGUAGES = [
  {
    code: "es",
    label: "Es",
    icon: "/languages/spain.webp",
  },
  {
    code: "en",
    label: "En",
    icon: "/languages/Ingles.webp",
  },
];

// Change Theme Night and Sun
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return { theme, toggleTheme };
};

export const getImageSource = (theme) => {
  return theme === "light" ? "/others/noche.webp" : "/others/dia.webp";
};

// Cambio de Bandera-Language
export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  return { language, toggleLanguage };
};
