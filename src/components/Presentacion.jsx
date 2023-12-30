import React from "react";
import "../styles/Presentacion.css";
import { Link } from "react-scroll";
const Presentacion = ({theme}) => {
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
    background: theme === "dark"
      ? "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)"
      : "radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)",
  };

  return (
    <div className="hero ">
      <div style={fondoEstilo}></div>

      <div className="saludo">
        <h1 className="title text-black	">Hola, Soy Edu </h1>
        <div className="sub-title text-black	">
          Futuro Programador Full Stack
          {/* Future Programmer Full Stack */}
        </div>
      </div>
      <div className="subtitle text-black	">
        Desarrollador web experimentado que disfruta creando productos digitales
        rapidos y accesibles
      </div>
      <div>
        <Link
          to="sobremi"
          className="boton-sobremi text-black	"
          smooth={true}
          duration={500}
        >
          Sobre Mi
        </Link>
        <a
          className="boton-sobremi text-black	"
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
