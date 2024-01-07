import React, { useState } from "react";
import pro from "../../styles/proyecto.module.css";

const ProyectoItem = ({ name, description, skills, img, alt, href }) => {
  const [verMas, setVerMas] = useState(false);
  const skillsToShow = verMas ? skills : skills.slice(0, 6);

  const toggleVerMas = () => {
    setVerMas(!verMas);
  };

  const mostrarMenos = () => {
    setVerMas(false);
  };

  return (
    <div className={pro.project}>
      <div className={pro.card_data}>
        <h3 className="text-white text-3xl font-SpaceMono font-bold uppercase">
          {name}
        </h3>
        <div>
          <p className="text-white text-lg font-Roboto">{description}</p>
        </div>
        <div className="flex flex-wrap gap-[1ch]">
          {skillsToShow.map((skill, index) => (
            <span key={index} className={pro.tag_block}>
              {skill}
            </span>
          ))}
          {skills.length > 6 && (
            <div className="mt-2">
              {verMas ? (
                <button
                  onClick={mostrarMenos}
                  className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                >
                  Mostrar menos
                </button>
              ) : (
                <button
                  onClick={toggleVerMas}
                  className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                >
                  Ver más
                </button>
              )}
            </div>
          )}
        </div>
        <div className="pt-5">
          <a href={href} target="__BLANK" className="botonProyectos">
            Ver
          </a>
        </div>
      </div>

      <div className={pro.img_wrapper}>
        <img src={img} alt={alt} className={pro.img_pro} />
      </div>
    </div>
  );
};

export default ProyectoItem;
