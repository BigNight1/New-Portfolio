import React from "react";
import "../styles/Presentacion.css";
import { Link } from "react-scroll";
const Presentacion = () => {
  const fondoEstilo = {
    position: "absolute",
    inset: "0",
    zIndex: "-10",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "5px",
    paddingTop: "24px",
    background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
  };
  return (
    <div className="hero">
            <div style={fondoEstilo}></div>

      <div className="saludo">
        <h1 className="title">Hola, Soy Edu </h1>
        <div className="sub-title">
          Futuro Programador Full Stack
          {/* Future Programmer Full Stack */}
        </div>
      </div>
      <div className="subtitle">
        Desarrollador web experimentado que disfruta creando productos digitales
        rapidos y accesibles
      </div>
      <div>
        <Link
          to="sobremi"
          className="boton-sobremi"
          smooth={true}
          duration={500}
        >
          Sobre Mi
        </Link>
        <a
          className="boton-sobremi"
          href="/cv-EduArmas.pdf"
          download="cv-EduArmas.pdf"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default Presentacion;
