import React from "react";
import "../styles/Presentacion.css";
import {Link} from  "react-scroll"
const Presentacion = () => {
  return (
    <div className="hero">
      <div className="hero-image"></div>
      <div className="saludo">
        <h1 className="title">Hola, Soy Edu  </h1>
        <div className="sub-title">
          Futuro Programador Full Stack
          {/* Future Programmer Full Stack */}
        </div>
      </div>
      <div className="subtitle">
          Desarrollador web experimentado que disfruta creando productos
          digitales rapidos y accesibles
      </div>
      <div>
      <Link to="sobremi" className="boton-sobremi" smooth={true} duration={500}>Sobre Mi</Link>
      <a className="boton-sobremi" href="
                https://publuu.com/flip-book/333034/766790" target="__BLANK" >CV</a>
      </div>
    </div>
  );
};

export default Presentacion;
