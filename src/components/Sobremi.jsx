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
const proyecto = [
  {
    id: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumnecessitatibus deserunt corporis at veritatis vitae, quae id utdoloribus",
  },
  {
    id: 2,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumnecessitatibus deserunt corporis at veritatis vitae, quae id utdoloribus",
  },
  {
    id: 3,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumnecessitatibus deserunt corporis at veritatis vitae, quae id utdoloribus",
  },
];

const Sobremi = () => {
  return (
    <section>
      <div className={sobre.content}>
        <h2 className={sobre.title}>Sobre Mi</h2>
        <div className={sobre.description}>
          1 año de experiencia programando paginas web y creando paginas
          interesantes
        </div>

        <div className={sobre.content_wrapper}>
          <div className={sobre.descripcion_two}>
            <div className={sobre.title2}>Conóceme más</div>
            <div>
              {proyecto.map((proyect) => {
                return (
                  <p className={sobre.proyectos_pa} key={proyect.id}>
                    {proyect.description}
                  </p>
                );
              })}
            </div>
            <div className="botonProyectos">
              <a href="#Proyectos">Proyectos</a>
            </div>
          </div>
          <div className={sobre.skills}>
            <div>Mis habilidades y herramientas</div>
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
