import React from "react";
import ExperienceItem from "./experienceItem.jsx";
import styled from "styled-components";
import { Briefcase } from "../Icons/Briefcase.jsx";

const Experience = () => {
  const EXPERIENCE = [
    {
      id: 1,
      date: "ENERO 2024",
      title: "Creador de Contenido - Programación",
      description:
        "Genero contenido en el ámbito de la programación, enseñando cómo crear proyectos atractivos y llamativos para atraer a más personas al fascinante mundo de la programación.",
    },
    {
      id: 2,
      date: "Diciembre 2023",
      title: "Proyecto Full Stack - Ecommerce - MongoDb",
      description:
        "Lideré el desarrollo del lado frontend del proyecto, garantizando una interfaz atractiva para el cliente. Implementé un sistema CRUD para la gestión de datos del cliente, creé APIs para facilitar la comunicación entre el frontend y el backend, y seleccioné las librerías clave para el éxito del proyecto.",
    },
    {
      id: 3,
      date: "Octubre 2023",
      title: "Carrera Full Stack - CODERHOUSE",
      description:
        "Completé la Carrera Full Stack de Coderhouse, adquiriendo una sólida base en el desarrollo Frontend y Backend. Ahora estoy enfocado en perfeccionar las habilidades que me proporcionaron durante la formación.",
    },
  ];

  return (
    <StyledCelExperience id="trayectoria" className="dark:bg-slate-900">
      <div className="w-full mx-auto lg:w-[740px] md:w-[670px] py-40 	">
        <h2 className="text-white text-2xl font-semibold  mb-6 flex gap-x-2 items-center">
        <Briefcase className="size-8"/> Experiencia
        </h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {EXPERIENCE.map((experiencie) => (
            <li key={experiencie.id} className="mb-10 ms-4">
              <ExperienceItem {...experiencie} />
            </li>
          ))}
        </ol>
      </div>
    </StyledCelExperience>
  );
};

const StyledCelExperience = styled.div`
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export default Experience;
