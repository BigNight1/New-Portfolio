import React from "react";
import sobre from "../../styles/sobremi.module.css";
import SobremiItem from "./SobremiItem.jsx";

const skills = [
  {
    id: 1,
    name: "HTML",
    img: "/images/html.webp",
  },
  {
    id: 2,
    name: "CSS",
    img: "/images/css.webp",
  },
  {
    id: 3,
    name: "SASS",
    img: "/images/sass.webp",
  },
  {
    id: 4,
    name: "JavaScript",
    img: "/images/javascript.webp",
  },
  {
    id: 5,
    name: "React",
    img: "/images/react.webp",
  },
  {
    id: 6,
    name: "Node.js",
    img: "/images/nodejs.webp",
  },
  {
    id: 7,
    name: "Express",
    img: "/images/express.webp",
  },
  {
    id: 8,
    name: "MongoDB",
    img: "/images/mongodb.webp",
  },

  {
    id: 9,
    name: "Vercel",
    img: "/images/vercel.webp",
  },
  {
    id: 10,
    name: "Git",
    img: "/images/git.webp",
  },
  {
    id: 11,
    name: "GitHub",
    img: "/images/github.webp",
  },
];

const DESCRIPTION = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,neque, itaque assumenda vero incidunt vel sunt, nam alias odiotenetur at. Dolores quidem facere veniam neque voluptate.",
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,neque, itaque assumenda vero incidunt vel sunt, nam alias odiotenetur at. Dolores quidem facere veniam neque voluptate.",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,neque, itaque assumenda vero incidunt vel sunt, nam alias odiotenetur at. Dolores quidem facere veniam neque voluptate.",
  },
];

const Sobremi = () => {
  return (
    <section id="sobremi">
      <div className={sobre.content}>
        <div className={sobre.encabezado}>
          <h2 className={sobre.title}>Sobre Mi</h2>
          <div className={sobre.description}>
            2 año de experiencia programando paginas web y creando paginas
            interesantes
          </div>
        </div>
        <div className={sobre.content_wrapper}>
          <div className={sobre.descripcion_two}>
            <h2 className={sobre.title2}>Conóceme más</h2>
            <div className={sobre.content_parr}>
              {DESCRIPTION.map((description) => (
                <SobremiItem {...description} />
              ))}
            </div>
            <div>
              <button className={sobre.botonProyectos}>Proyecto</button>
            </div>
          </div>
          <div className={sobre.skills}>
            <div className={sobre.myskill}>Mis habilidades y herramientas</div>
            <div className={sobre.skills_list}>
              {skills.map((skill) => (
                <div key={skill.id} className={sobre.skill_block}>
                  {skill.img && (
                    <div className={sobre.logo_img}>
                      <div className={sobre.contiene_img}>
                        <img
                          className={sobre.logo}
                          src={skill.img}
                          alt={skill.name}
                        />
                      </div>
                    </div>
                  )}
                  <span className={sobre.nameskill}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
