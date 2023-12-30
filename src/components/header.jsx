import "../styles/header.css";
import { FaRegMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { Link } from "react-scroll";
import MyAge from "./myage.jsx";
import { useState } from "react";

function Header() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <nav>
      <div className="nav-content">
        <div class="flex gap-1">
          <MyAge />
          <h3>BIGNIGHT.DEV</h3>
        </div>

        <div className="container_all">
          <ul className="links">
            <li className="link-wrapper">
              <Link to="sobremi" smooth={true} duration={500}>
                Sobre Mi
              </Link>
            </li>
            <li className="link-wrapper">
              <Link to="proyecto" smooth={true} duration={500}>
                Proyectos
              </Link>
            </li>
          </ul>

          <button
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center"
            onClick={toggleTheme}
          >
            {theme ? (
              <img src="/noche.webp" alt="noche" />
            ) : (
              <img src="/dia.webp" alt="dia" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
