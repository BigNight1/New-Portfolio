import React from "react";
import sobre from "../../styles/sobremi.module.css";
import SobremiItem from "./SobremiItem.jsx";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

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
  {
    id: 12,
    name: "Tailwind",
    img: "/icons/tailwind.webp",
  },
  {
    id: 13,
    name: "Postmam",
    img: "/icons/postman.webp",
  },
  {
    id: 14,
    name: "Adobe Photoshop",
    img: "/icons/Adobe_Photoshop.webp",
  },
  {
    id: 15,
    name: "Adobe Premiere",
    img: "/icons/Premiere-Pro.webp",
  }
];

const DESCRIPTION = [
  {
    description: "Sobremi.descripcion.1",
  },
  {
    description: "Sobremi.descripcion.2",
  },
  {
    description: "Sobremi.descripcion.3",
  },
];

const Sobremi = () => {
  const { t } = useTranslation();

  return (
    <section id="sobremi" className="bg-white dark:bg-slate-900	">
      <div className={sobre.content}>
        <div className="py-12 lg:py-28 sm:py-8 md:py-8">
          <h2 className="text-black pb-5	 text-5xl flex justify-center font-bold	dark:text-white">
            {t("Sobremi.sobre")}
          </h2>
          <div className="text-xl text-gray-500 font-normal font-Roboto	text-center	max-w-[750px]	">
            <span className="text-[#67fd67] font-Roboto">2 </span> 
             {t("Sobremi.subsobre")}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-20 ">
          {/* Contenido de la primera columna */}
          <div className="flex gap-1 flex-col	 ">
            <h2 className="text-black text-4xl font-bold font-Roboto dark:text-white">
              {t("Sobremi.conoceme")}
            </h2>
            <div className=" text-pretty">
              {DESCRIPTION.map((description, index) => (
                <SobremiItem
                  key={index}
                  description={t(description.description)}
                />
              ))}
            </div>
            <div>
              <Link
                className="font-black"
                smooth={true}
                duration={500}
                to="proyecto"
              >
                <button>{t("Sobremi.boton_proyecto")}</button>
              </Link>
            </div>
          </div>

          {/* Contenido de la segunda columna */}
          <div className="lg:py-0  sm:py-6  py-6">
            <div className="text-black text-4xl font-bold mb-4 font-Roboto dark:text-white 	">
              {t("Mishabilidades.habher")}
            </div>
            <div className="flex flex-wrap gap-3 ">
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
