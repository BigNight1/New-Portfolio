import React from "react";
import "../styles/Presentacion.css";
import { Link } from "react-scroll";
import { Github } from "./Icons/github.jsx";
import { Linkedin } from "./Icons/Linkedim.jsx";

const Presentacion = () => {
  return (
    <div className="relative min-h-screen p-4 pt-8 flex flex-col items-center justify-center">
      {/* Background claro */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      {/* Background oscuro */}
      <div className="dark:absolute dark:inset-0 dark:-z-10 dark:h-full dark:w-full dark:items-center dark:px-5 dark:py-24 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="text-center text-black py-7">
        <h1 className="text-6xl font-bold py-1 dark:text-white">
          Hola,Soy Edu
        </h1>
        <div className="text-xl dark:text-white ">
          <h2 className="font-Roboto font-normal">Programador Full Stack</h2>
        </div>
      </div>

      <div className="text-center text-lg max-w-[650px] text-black font-normal font-Roboto	 dark:text-white">
        Desarrollador web full stack con experiencia en diseño y desarrollo de
        aplicaciones web utilizando tecnologías front-end y back-end. Experto en
        crear soluciones interactivas y funcionales.
      </div>

      <div className="flex gap-x-3 py-2">
        <a
          href="https://github.com/BigNitgh"
          target="__BLANK"
          alt="GitHub"
          className="rounded-full border dark:border-white/30 border-black flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition"
        >
          <Github className="dark:text-white h-6 w-6" />
          <span className="dark:text-white font-Roboto font-semibold">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/edu-armas-1a4b16260/"
          target="__BLANK"
          alt="Linkedin"
          className="rounded-full border dark:border-white/30 border-black flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition"
        >
          <Linkedin className="dark:text-white h-6 w-6" />
          <span className="dark:text-white font-Roboto font-semibold">Linkedim</span>
        </a>
      </div>

      <div className="flex gap-4 mt-4">
        <Link
          to="sobremi"
          className="boton-sobremi text-[#181a1b] font-bold font-Roboto"
          smooth={true}
          duration={500}
        >
          Sobre Mi
        </Link>
        <a
          className="boton-sobremi text-[#181a1b] font-bold font-Roboto"
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
