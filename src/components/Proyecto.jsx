import React from "react";

const proyectos = [
  {
    id: 1,
    name: "proyecto1",
    description: "descripcion del proyecto hecho",
    skills: ["JavaScript", "Html", "Css"],
    img: "imagen del proyecto",
    alt: "contexto de la imagen",
  },
];

const Proyecto = () => {
  return (
    <div>
      <div>Proyectos</div>
      <div className="wrapper">

        <div className="project">
          <div className="card-data">
            <h3>Name Project</h3>
            <div>what is the project about?</div>
            <div>
              <span className="skill-block">javascript</span>
            </div>
            <div>
              <a href="#gopage">Revisalo</a>
            </div>
          </div>
          <div className="img-project">
            <img src="" alt="Imagen" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Proyecto;
