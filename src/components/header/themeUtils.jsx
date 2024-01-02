import { useEffect, useState } from "react";

export const LINKS = [
  {
    link: "Trayectoria",
    to: "trayectoria",
  },
  {
    link: "Sobre Mi",
    to: "sobremi",
  },
  {
    link: "Proyectos",
    to: "proyecto",
  },
];

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
