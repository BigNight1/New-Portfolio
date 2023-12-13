import "../styles/header.css";
import { FaRegMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import {Link} from "react-scroll"

function Header() {
  return (
    <nav>
      <div className="nav-content">
        <h3>BIGNIGHT.DEV</h3>
        <div className="container_all">
          <ul className="links">
            <li className="link-wrapper">
              <Link to="sobremi" smooth={true} duration={500}>Sobre Mi</Link>
            </li>
            <li className="link-wrapper">
            <Link to="proyecto" smooth={true} duration={500}>Proyectos</Link>
            </li>
          </ul>
          <div className="theme">
            <button className="buton_theme">
              <div className="black">
                <FaRegMoon />
              </div>
              <div className="white">
                <CiSun />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
