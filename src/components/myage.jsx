import React, { useState, useEffect } from "react";
import moment from "moment";
import age from "../styles/myage.module.css";

const MyAge = () => {
  const [fechaNacimiento, setFechaNacimiento] = useState("2004-12-11");
  const [edad, setEdad] = useState(0);

  useEffect(() => {
    const calcularEdad = () => {
      const fechaNacimientoMoment = moment(fechaNacimiento, "YYYY-MM-DD", true);

      if (fechaNacimientoMoment.isValid()) {
        const hoy = moment();
        const edadCalculada = hoy.diff(fechaNacimientoMoment, "years");
        setEdad(edadCalculada);
      }
    };

    // Calcular la edad al cargar el componente
    calcularEdad();

    // Actualizar la edad cada segundo para tener la "edad en tiempo real"
    const interval = setInterval(calcularEdad, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [fechaNacimiento]);

  return (
    <div className={age.contenedor}>
      <div className={age.corazonIcon}>
        <img src="/corazon.webp" alt="corazon"/>
        <p className={age.edadTexto}>{edad}</p>
        <div className={age.textoEncima}>
          <p>Edad</p>
        </div>
      </div>
    </div>
  );
};

export default MyAge;
