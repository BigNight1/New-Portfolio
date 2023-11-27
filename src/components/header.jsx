import "../styles/header.css";

function Header() {
  return (
    <>
      <nav>
        <div className="nav-content">
          <h3>BIGNIGHT.DEV</h3>
          <ul className="links">
            <li className="link-wrapper">
              <a href="#SobreMi">Sobre Mi</a>
            </li>
            <li className="link-wrapper">
              <a href="#Proyectos">Proyectos</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
