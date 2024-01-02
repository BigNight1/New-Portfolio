import "../../styles/header.css";
import { useTheme, getImageSource, LINKS } from "./themeUtils.jsx";
import { Link } from "react-scroll";
import MyAge from "../Myage/myage.jsx";

function Header() {
  const { toggleTheme,theme } = useTheme();
  const imageSource = getImageSource(theme);

  return (
    <nav className="dark:bg-slate-900">
      <div className="nav-content ">
        <div className="flex gap-1 py-5">
          <MyAge />
          <a href="/" className="text-2xl text-black font-black dark:text-[#e8e6e3]">
            BIGNIGHT.DEV
          </a>
        </div>

        <div className="flex items-center">
          <ul className="flex">
            <li className="p-4">
              {LINKS.map((links) => (
                <Link
                  key={links.link}
                  className="text-lg font-semibold text-black dark:text-gray-300 cursor-pointer px-3"
                  to={links.to}
                  smooth={true}
                  duration={500}
                >
                  {links.link}
                </Link>
              ))}
            </li>
          </ul>

          <button
            className=" hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center rotate"
            onClick={toggleTheme}
          >
            <img src={imageSource} alt={theme} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
