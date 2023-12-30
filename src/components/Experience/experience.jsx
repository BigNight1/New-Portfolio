import React from "react";
import ExperienceItem from "./experienceItem.jsx";

const Experience = () => {
  const EXPERIENCE = [
    {
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
  ];

  return (
    <div class="w-full mx-auto lg:w-[740px] py-44">
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        {EXPERIENCE.map((experiencie) => (
          <li class="mb-10 ms-4">
            <ExperienceItem {...experiencie}/>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
