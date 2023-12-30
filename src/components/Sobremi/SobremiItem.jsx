import React from "react";
import sobre from "../../styles/sobremi.module.css";

const SobremiItem = ({ description, id }) => {
  return (
    <p className={sobre.proyectos_pa} key={id}>
      {description}
    </p>
  );
};

export default SobremiItem;
