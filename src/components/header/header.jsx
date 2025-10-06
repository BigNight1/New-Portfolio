import "../../styles/header.css";
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

function Header() {
  const { t } = useTranslation();
  const { toggleTheme, theme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const currentLanguage = LANGUAGES.find((lang) => lang.code === language);

  const imageSource = getImageSource(theme);

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="nav-content ">
        {/* Web - Live */}
        <div className="flex gap-1 py-5">
          <MyAge />
          <a
            href="/"
            className="text-2xl text-gray-800 font-black dark:text-[#e8e6e3] lg:block md:block desaparece hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            BIGNIGHT.DEV
          </a>
        </div>

        <div className="flex items-center ">

          {/* Bandera del idioma actual */}
          {currentLanguage && (
            <Tooltip
              text={currentLanguage.code === "es" ? "Español" : "English"}
              position="bottom"
            >
              <div className="relative group mx-2 p-1 rounded-full  dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                <div
                  className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-xl  group-active:scale-95 group-hover:brightness-110"
                  onClick={toggleLanguage}
                >
                  <img
                    src={currentLanguage.icon}
                    alt={currentLanguage.code}
                    className="w-6 h-6 rounded-full border-2 border-transparent  transition-all duration-300"
                  />
                  {/* Efecto de glow sutil para la bandera */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0  transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </Tooltip>
          )}

          {/* Dark Mode */}
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

        </div>
      </div>
    </nav>
  );
}

export default Header;
