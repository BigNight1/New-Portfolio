import pro from "../../styles/proyecto.module.css";
import ProyectoItem from "./ProyectoItem.jsx";
import { useTranslation } from "react-i18next";

const Proyecto = () => {
  const { t } = useTranslation();
  const PROYECTO = t("PROYECTOS", { returnObjects: true });
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
