import React from "react";
import sobre from "../../styles/sobremi.module.css";
import SobremiItem from "./SobremiItem.jsx";
import { Link } from "react-scroll";

const skills = [
  {
    id: 1,
    name: "HTML",
    img: "/icons/html.webp",
  },
  {
    id: 2,
    name: "CSS",
    img: "/icons/css.webp",
  },
  {
    id: 3,
    name: "SASS",
    img: "/icons/sass.webp",
  },
  {
    id: 4,
    name: "JavaScript",
    img: "/icons/javascript.webp",
  },
  {
    id: 5,
    name: "React",
    img: "/icons/react.webp",
  },
  {
    id: 6,
    name: "Node.js",
    img: "/icons/nodejs.webp",
  },
  {
    id: 7,
    name: "Express",
    img: "/icons/express.webp",
  },
  {
    id: 8,
    name: "MongoDB",
    img: "/icons/mongodb.webp",
  },

  {
    id: 9,
    name: "Vercel",
    img: "/icons/vercel.webp",
  },
  {
    id: 10,
    name: "Git",
    img: "/icons/git.webp",
  },
  {
    id: 11,
    name: "GitHub",
    img: "/icons/github.webp",
  },
];

const DESCRIPTION = [
  {
    id: 1,
    description:
    "¡Hola! Soy Edu, un apasionado programador Full Stack con un recorrido emocionante en el mundo del desarrollo web. Comencé mi travesía enfocándome en el frontend, explorando las maravillas de HTML, CSS y JavaScript. Mi curiosidad me llevó a sumergirme en un programa intensivo en CoderHouse, donde no solo consolidé mis conocimientos existentes, sino que también adquirí un conjunto de habilidades Full Stack de alta calidad."  },
  {
    id: 2,
    description:
    "Durante mi formación en CoderHouse, me embarqué en la desafiante pero gratificante carrera de Full Stack. A medida que avanzaba en la carrera, me enfrenté a proyectos centrados en el ecommerce, donde pude aplicar mis habilidades para crear experiencias de usuario sólidas y funcionales. El backend se convirtió en mi próximo desafío, y aunque fue un camino más complicado, encontré una gran satisfacción en superar cada obstáculo.",
  },
  {
    id: 3,
    description:
    "Mis logros académicos en la carrera Full Stack fueron destacados, y ahora me encuentro en un punto emocionante de mi carrera, listo para llevar mis habilidades al mundo laboral. Mi experiencia no solo se basa en la resolución de problemas y el desarrollo técnico, sino también en mi amor por los desafíos que enfrento en cada proyecto. Estoy decidido a seguir aprendiendo y mejorando constantemente mis habilidades para destacarme en el competitivo mundo laboral del desarrollo web.",
  },
];

const Sobremi = () => {
  return (
    <section id="sobremi" className="bg-white dark:bg-slate-900	">
      <div className={sobre.content}>
        <div className="py-24">
          <h2 className="text-black pb-16	 text-5xl flex justify-center font-bold	dark:text-white">
            Sobre Mi
          </h2>
          <div className="text-xl text-gray-500 font-normal	text-center		">
            2 año de experiencia programando paginas web y creando paginas
            interesantes
          </div>
        </div>
        <div className={sobre.content_wrapper}>
          <div className={sobre.descripcion_two}>
            <h2 className="text-black text-2xl font-bold dark:text-white">
              Conóceme más
            </h2>
            <div className="lg:w-[520px]">
              {DESCRIPTION.map((description) => (
                <SobremiItem key={description.id} {...description} />
              ))}
            </div>
            <div>
              <button className={sobre.botonProyectos}>
                <Link smooth={true} duration={500} to="proyecto">
                  Proyecto
                </Link>
              </button>
            </div>
          </div>
          <div>
            <div className="text-black text-2xl font-bold mb-4 dark:text-white 	">
              Mis habilidades y herramientas
            </div>
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
                  <span className="font-bold text-base text-zinc-100">
                    {skill.name}
                  </span>
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
