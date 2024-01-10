import React from "react";
import pro from "../../styles/proyecto.module.css";
import ProyectoItem from "./ProyectoItem.jsx";
import { useTranslation } from "react-i18next";

const PROYECTO = [
  {
    id: 1,
    name: "Full Stack - FireBase",
    description: "descripcion del proyecto hecho",
    skills: [
      "React",
      "Material-UI",
      "Axios",
      "Bootstrap",
      "Firebase",
      "Formik",
      "Yup",
      "React Router",
      "JSON Server",
      "SweetAlert2",
    ],
    img: "/proyectos-img/Proyecto.webp",
    alt: "contexto de la imagen",
    href: "https://proyect-react-2.vercel.app/",
  },
  {
    id: 2,
    name: "Full Stack",
    description: "descripcion del proyecto hecho",
    skills: [
      "Handlebars",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Bootstrap",
    "JWT",
    "Swagger",
    "Socket.io",
    "Mongoose",
    "Handlebars",
    "Passport",
    "bcrypt",
    "Winston",
    "Chai",
    "Mocha",
    "Supertest"
    ],
    img: "/proyectos-img/Proyecto2.webp",
    alt: "contexto de la imagen",
    href: "https://probandoloscambios.onrender.com",
  },
  {
    id: 3,
    name: "proyecto3",
    description: "descripcion del proyecto hecho",
    skills: ["JavaScript", "HTML", "CSS"],
    img: "/proyectos-img/Proyecto.webp",
    alt: "contexto de la imagen",
    href: "https://probandoloscambios.onrender.com",
  },
];

const Proyecto = () => {
  const {t} =useTranslation()
  return (
    <section id="proyecto" className="bg-white dark:bg-slate-900	  ">
      <div className="mx-auto max-w-screen-xl w-full">
        <h2 className="text-black text-4xl uppercase text-center pt-4 dark:text-white">
          {t("Proyecto.title-project")}
        </h2>
        <div className={pro.wrapper}>
          {PROYECTO.map((proyecto) => (
            <ProyectoItem key={proyecto.id} {...proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyecto;
