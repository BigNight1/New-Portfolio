import "../../styles/header.css";
import { useTheme, getImageSource, LINKS } from "./themeUtils.jsx";
import { Link } from "react-scroll";
import MyAge from "../Myage/myage.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const { toggleTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);

  const imageSource = getImageSource(theme);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="dark:bg-slate-900">
      <div className="nav-content ">
        <div className="flex gap-1 py-5">
          <MyAge />
          <a
            href="/"
            className="text-2xl text-black font-black dark:text-[#e8e6e3]  lg:block md:block  desaparece"
          >
            BIGNIGHT.DEV
          </a>
        </div>

        <div className="flex items-center ">
          <ul className="flex menu sm:hidden lg:block md:block  linkdesaparece">
            <li className="p-4">
              {LINKS.map((links) => (
                <Link
                  key={links.link}
                  className="text-lg font-bold text-black dark:text-gray-300 cursor-pointer px-3 dark:hover:text-[#67fd67] hover:text-[#0018CC]"
                  to={links.to}
                  smooth={true}
                  duration={500}
                >
                  {t(`Menu.${links.link}`)}
                </Link>
              ))}
            </li>
          </ul>

          {/* cambio de Idioma */}
          <div className="cambiar_idioma flex gap-2">
            <button
              className="rounded-full"
              onClick={() => i18n.changeLanguage("es")}
            >
              Es
            </button>
            <button
              className="rounded-full"
              onClick={() => i18n.changeLanguage("en")}
            >
              En
            </button>
          </div>

          <span
            className="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center rotate mx-[0.3rem] cursor-pointer"
            onClick={toggleTheme}
          >
            <img src={imageSource} alt={theme} />
          </span>

          {/* {boton hamburguesa} */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Main Menu</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 z-50 ">
          <div className="flex items-center justify-between p-4">
            <div>
              <a href="/" className="text-2xl text-white font-bold">
                BIGNIGHT.DEV
              </a>
            </div>
            <button
              type="button"
              onClick={handleMenu}
              className="text-white focus:outline-none"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
          <div className="px-4 pb-3 space-y-3">
            {LINKS.map((links) => (
              <Link
                key={links.link}
                className="cursor-pointer block text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-300"
                to={links.to}
                smooth={true}
                duration={500}
                onClick={handleMenu}
              >
                {links.link}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Header;
