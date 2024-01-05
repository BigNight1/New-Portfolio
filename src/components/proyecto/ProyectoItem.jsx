import React from "react";
import pro from "../../styles/proyecto.module.css";

const ProyectoItem = ({ name, description, skills, img, alt }) => {
  return (
    <div className="flex">
      
      <div className={pro.card_data}>
        <h3 className="text-white text-xl	font-SpaceMono font-bold uppercase">{name}</h3>
        <div>
          <p className="text-white font-Roboto">{description}</p>
        </div>
        <div className="flex space-x-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-1 text-white font-Roboto ">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="img-project">
        <img src={img} alt={alt} className={pro.img_pro} />
      </div>
    </div>
  );
};

export default ProyectoItem;
