import React from "react";
import pro from "../styles/proyecto.module.css";

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
    <section id="proyecto" className={pro.projects}>
      <div className={pro.container}>
        <h2 className={pro.title_pro}>Proyectos</h2>
        <div className={pro.wrapper}>
          <div className={pro.project}>
            <div className={pro.card_data}>
              <h3>Proyecto Full Stack</h3>
              <div>
                <p>Ecommerce Frontend Y Backend mas Base de Datos</p>{" "}
              </div>
              <div>
                <span className="skill-block">javascript</span>
              </div>
            </div>
            <div className="img-project">
              <img src="/images/Proyecto.webp" alt="Imagen" className={pro.img_pro} />
            </div>
          </div>
          <div className={pro.project}>
            <div className={pro.card_data}>
              <h3>Proyecto Full Stack</h3>
              <div>
                <p>Ecommerce Frontend Y Backend mas Base de Datos</p>
              </div>
              <div>
                <span className="skill-block">javascript</span>
              </div>
            </div>
            <div className="img-project">
              <img src="/images/Proyecto2.webp" alt="Imagen" className={pro.img_pro} />
            </div>
          </div>
          <div className={pro.project}>
            <div className={pro.card_data}>
              <h3>Proyecto Full Stack</h3>
              <div>
                <p>Ecommerce Frontend Y Backend mas Base de Datos</p>
              </div>
              <div>
                <span className="skill-block">javascript</span>
              </div>
            </div>
            <div className="img-project">
              <img src="/images/Proyecto2.webp" alt="Imagen" className={pro.img_pro} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyecto;
