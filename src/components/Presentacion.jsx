import React from "react";
import "../styles/Presentacion.css";
import { Link } from "react-scroll";

const Presentacion = () => {
  return (
    <div className="relative min-h-screen p-4 pt-8 flex flex-col items-center justify-center">
      {/* Background claro */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      {/* Background oscuro */}
      <div className="dark:absolute dark:inset-0 dark:-z-10 dark:h-full dark:w-full dark:items-center dark:px-5 dark:py-24 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="text-center text-black py-7">
        <h1 className="text-6xl font-bold py-1 dark:text-white">
          Hola, Soy Edu
        </h1>
        <div className="text-xl dark:text-white">
          Futuro Programador Full Stack
        </div>
      </div>

      <div className="text-center text-lg max-w-[600px] text-black font-semibold	 dark:text-white">
        Desarrollador web experimentado que disfruta creando productos digitales
        rápidos y accesibles
      </div>

      <div className="flex gap-4 mt-4">
        <Link
          to="sobremi"
          className="boton-sobremi text-[#181a1b] font-bold"
          smooth={true}
          duration={500}
        >
          Sobre Mi
        </Link>
        <a
          className="boton-sobremi text-[#181a1b] font-bold font-SpaceMono"
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
