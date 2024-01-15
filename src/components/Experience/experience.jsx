import React from "react";
import ExperienceItem from "./experienceItem.jsx";
import styled from "styled-components";
import { Briefcase } from "../Icons/Briefcase.jsx";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const EXPERIENCE = t("EXPERIENCE", { returnObjects: true });

  return (
    <StyledCelExperience id="trayectoria" className="dark:bg-slate-900">
      <div className="w-full mx-auto lg:w-[740px] md:w-[670px] py-40 	">
        <h2 className="text-white text-2xl font-semibold  mb-6 flex gap-x-2 items-center">
          <Briefcase className="size-8" /> {t("Experiencia.title")}
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
