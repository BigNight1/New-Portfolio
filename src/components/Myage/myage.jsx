
import { useState } from "react";
import age from "../../styles/myage.module.css";
import useMyAgeLogic from "./MyAgeLogic.jsx";
import { useTranslation } from "react-i18next";

const MyAge = () => {
  const {t} = useTranslation()
  const [fechaNacimiento, setFechaNacimiento] = useState("2004-12-11");
  const edad = useMyAgeLogic(fechaNacimiento);
  
  return (
    <div className={age.contenedor}>
      <div className={age.corazonIcon}>
        <img src="/others/corazon.webp" alt="corazon" />
        <p className={age.edadTexto}>{edad}</p>
        <div className={age.textoEncima}>
          <p className="text-slate-900 dark:text-[#ecdddd]">{t("TiempodeVida.Edad")}</p>
        </div>
      </div>
    </div>
  );
};

export default MyAge;
