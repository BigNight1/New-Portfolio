import React from "react";
import { Link } from "react-scroll";
import { Github } from "./Icons/github.jsx";
import { Linkedin } from "./Icons/Linkedim.jsx";
import { useTranslation } from "react-i18next";
import { Gmail } from "./Icons/gmail.jsx";
import styled from "styled-components";

const Presentacion = () => {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen p-4 pt-8 flex flex-col items-center justify-center">
      {/* Background claro */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      {/* Background oscuro */}
      <div className="dark:absolute dark:inset-0 dark:-z-10 dark:h-full dark:w-full dark:items-center dark:px-5 dark:py-24 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="flex flex-col items-center		">
        <div className="text-center text-black py-7">
          <h1 className="text-6xl font-bold py-1 dark:text-white">
            {t("Presentacion.presentation")}
          </h1>
          <div className="text-xl dark:text-white ">
            <h2 className="font-Roboto font-normal">
              <span className="font-Roboto font-bold">{"</>"}</span>{" "}
              {t("Presentacion.subtitle")}
            </h2>
          </div>
        </div>

        <Description className="text-center font-Jersey text-lg max-w-[627px] text-black 	 dark:text-white">
          {t("Presentacion.description")}
        </Description>
        {/* GitHub and Linkedim */}
        <Mobile className="flex gap-x-3 py-2">
          <a
            href="https://github.com/BigNight1"
            target="__BLANK"
            alt="GitHub"
            className="rounded-full border dark:border-white/30 border-black flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition"
          >
            <Github className="dark:text-white h-6 w-6" />
            <span className="dark:text-white font-Roboto font-semibold">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/edu-armas-1a4b16260/"
            target="__BLANK"
            alt="Linkedin"
            className="rounded-full border dark:border-white/30 border-black flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition"
          >
            <Linkedin className="dark:text-white h-6 w-6" />
            <span className="dark:text-white font-Roboto font-semibold">
              Linkedim
            </span>
          </a>
          <a
            target="__BLANK"
            alt="Linkedin"
            className="rounded-full border dark:border-white/30 border-black flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-105 hover:bg-white/10 transition"
          >
            <Gmail className="dark:text-white h-6 w-6" />
            <span className="dark:text-white font-Roboto font-semibold">
              eduarmascontact@gmail.com
            </span>
          </a>
        </Mobile>
        {/* about and Cv */}
        <div className="flex gap-6 mt-4">
          <Link
            to="sobremi"
            className=" text-[#181a1b] font-bold font-Roboto"
            smooth={true}
            duration={500}
          >
            <button className="text-xl button">{t("Presentacion.boton1")}</button>
          </Link>
          <a
            className=" text-[#181a1b] font-bold font-Roboto"
            href={t("Presentacion.link-cv")}
            target="__BLANK"
          >
            <button className="text-xl button">{t("Presentacion.boton2")}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Mobile = styled.div`
  @media (max-width: 623px) {
    flex-direction: column;
    a {
      margin: 6px 0;
    }
  }
`;

const Description = styled.div`
  @media (max-width: 667px) {
    padding: 0 1.5rem;
  }
`;

export default Presentacion;
