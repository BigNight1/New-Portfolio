import React from "react";
import sobre from "../styles/sobremi.module.css"

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
    name: "JavaScript",
  },
  {
    id: 4,
    name: "Node.js",
  },
  {
    id: 5,
    name: "SASS",
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
    <section>
      <div className="content">
        <h2 className={sobre.title}>Sobre Mi</h2>
        <div className={sobre.description}>
          1 año de experiencia programando paginas web y creando paginas
          interesantes
        </div>
        <div className={sobre.content_wrapper}>

        <div className={sobre.descripcion}>
          <div className="title2">Conóceme más</div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              necessitatibus deserunt corporis at veritatis vitae, quae id ut
              doloribus adipisci maxime porro perspiciatis amet
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              necessitatibus deserunt corporis at veritatis vitae, quae id ut
              doloribus adipisci maxime porro perspiciatis amet
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              necessitatibus deserunt corporis at veritatis vitae, quae id ut
              doloribus adipisci maxime porro perspiciatis amet
            </p>
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
