import React from "react";
import pro from "../../styles/proyecto.module.css";
import ProyectoItem from "./ProyectoItem.jsx";

const PROYECTO = [
  {
    id: 1,
    name: "Full Stack",
    description: "descripcion del proyecto hecho",
    skills: ["JavaScript", "HTML", "CSS"],
    img: "/proyectos-img/Proyecto.webp",
    alt: "contexto de la imagen",
  },
  {
    id: 2,
    name: "Full Stack - FireBase",
    description: "descripcion del proyecto hecho",
    skills: ["JavaScript", "HTML", "CSS"],
    img: "/proyectos-img/Proyecto.webp",
    alt: "contexto de la imagen",
  },
  {
    id: 3,
    name: "proyecto3",
    description: "descripcion del proyecto hecho",
    skills: ["JavaScript", "HTML", "CSS"],
    img: "/proyectos-img/Proyecto.webp",
    alt: "contexto de la imagen",
  },
];

const Proyecto = () => {
  return (
    <section id="proyecto" className="bg-white dark:bg-slate-900	  ">
      <div className="mx-auto max-w-screen-xl w-full">
        <h2 className="text-black text-4xl uppercase text-center pt-4 dark:text-white">Proyectos</h2>
        <div className={pro.wrapper}>
          {
            PROYECTO.map((proyecto)=>(
              <ProyectoItem key={proyecto.id} {...proyecto}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Proyecto;
