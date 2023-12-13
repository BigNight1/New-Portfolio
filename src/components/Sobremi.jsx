import React from "react";
import sobre from "../styles/sobremi.module.css";

const skills = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "SASS",
  },
  {
    id: 4,
    name: "Node.js",
  },
  {
    id: 5,
    name: "JavaScript",
  },
  {
    id: 6,
    name: "MongoDB",
  },
  {
    id: 7,
    name: "React",
  },
  {
    id: 8,
    name: "Express",
  },
  {
    id: 9,
    name: "Vercel",
  },
  {
    id: 10,
    name: "Git",
  },
];

const Sobremi = () => {
  return (
    <section id="sobremi">
      <div className={sobre.content}>
        <div className={sobre.encabezado}>
          <h2 className={sobre.title}>Sobre Mi</h2>
          <div className={sobre.description}>
            1 año de experiencia programando paginas web y creando paginas
            interesantes
          </div>
        </div>
        <div className={sobre.content_wrapper}>
          <div className={sobre.descripcion_two}>
            <div className={sobre.title2}>Conóceme más</div>
            <div className={sobre.content_parr}>
              <p className={sobre.proyectos_pa}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
                neque, itaque assumenda vero incidunt vel sunt, nam alias odio
                tenetur at. Dolores quidem facere veniam neque voluptate.
              </p>
              <p className={sobre.proyectos_pa}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
                neque, itaque assumenda vero incidunt vel sunt, nam alias odio
                tenetur at. Dolores quidem facere veniam neque voluptate.
              </p>
              <p className={sobre.proyectos_pa}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
                neque, itaque assumenda vero incidunt vel sunt, nam alias odio
                tenetur at. Dolores quidem facere veniam neque voluptate.
              </p>
            </div>
            <div>
            <button className={sobre.botonProyectos}>Proyecto</button>

            </div>
            
          </div>
          <div className={sobre.skills}>
            <div className={sobre.myskill}>Mis habilidades y herramientas</div>
            <div className={sobre.skills_list}>
              {skills.map((skill) => (
                <span className={sobre.skill_block} key={skill.id}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
