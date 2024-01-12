import React, { useState } from "react";
import pro from "../../styles/proyecto.module.css";
import { useTranslation } from "react-i18next";

const ProyectoItem = ({ name, description, skills, img, alt, href, code }) => {
  const [verMas, setVerMas] = useState(false);
  const skillsToShow = verMas ? skills : skills.slice(0, 6);
  const { t } = useTranslation();

  const toggleVerMas = () => {
    setVerMas(!verMas);
  };

  const mostrarMenos = () => {
    setVerMas(false);
  };

  return (
    <div className={pro.project}>
      <div className={pro.card_data}>
        <h3 className="text-white text-3xl font-SpaceMono font-bold uppercase">
          {name}
        </h3>
        <div>
          <p className="text-white text-lg font-Roboto">{description}</p>
        </div>

        {/* Skills and More */}
        <div className="flex flex-wrap gap-[1ch]">
          {skillsToShow.map((skill, index) => (
            <span key={index} className={pro.tag_block}>
              {skill}
            </span>
          ))}
          {skills.length > 6 && (
            <div className="mt-2">
              {verMas ? (
                <button
                  onClick={mostrarMenos}
                  className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                >
                  {t("Proyecto.menos")}
                </button>
              ) : (
                <button
                  onClick={toggleVerMas}
                  className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                >
                  {t("Proyecto.verMas")}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Button and Code */}
        <div className="flex items-end justify-between	gap-6 w-full h-full 	 mt-3">

          <div>
            <a href={href} target="__BLANK">
              <button>
                <span className="link-content">{t("Proyecto.boton")}</span>
              </button>
            </a>
          </div>

          <div className={pro.code_container}>
            <a
              href={code}
              className="text-green-500		 text-2xl font-Roboto font-bold	"
              target="__BLANK"
            >
              {"</>"}
            </a>
            <div className={pro.code_tooltip}>{t("Proyecto.code")}</div>
          </div>

        </div>

      </div>

      <div className={pro.img_wrapper}>
        <img src={img} alt={alt} className={pro.img_pro} />
      </div>
    </div>
  );
};

export default ProyectoItem;
