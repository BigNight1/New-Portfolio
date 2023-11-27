import React from "react";
import "../styles/Presentacion.css";

const Presentacion = () => {
  return (
    <div className="hero">
      <div className="hero-image"></div>
      <div className="saludo">
        <h1 className="title">Hola, Soy Edu  </h1>
        <div className="sub-title">
          Future Programmer Full Stack
        </div>
      </div>
      <div className="subtitle">
          Desarrollador web experimentado que disfruta creando productos
          digitales rapidos y accesibles
      </div>
      <div>
        <a  className="boton-sobremi" href="#Sobremi">SOBRE MI</a>
      </div>
    </div>
  );
};

export default Presentacion;
