import "../styles/header.css";
import { Link } from "react-scroll";
import MyAge from "./myage.jsx";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {}, [theme]);
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
  
  else {
    document.querySelector("html").classList.remove("dark");
  }
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const getImageSource = ()=>{
    return theme  === "light" ? "/noche.webp" : "/dia.webp"
  }
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
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-500 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center"
            onClick={toggleTheme}
          >
            <img src={getImageSource()} alt={theme} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
