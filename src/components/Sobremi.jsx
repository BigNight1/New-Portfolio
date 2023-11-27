import React from "react";

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
    <div>
      <div>
        <h2>Sobre Mi</h2>
      </div>
      <div>
        1 año de experiencia programando paginas web y creando paginas
        interesantes
      </div>
      <div className="descripcion">
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
      <div className="skills">
        <div>Mis habilidades y herramientas</div>
        <div className="skills-list">
          {skills.map((skill) => (
            <span className="skill-block" key={skill.id}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sobremi;
