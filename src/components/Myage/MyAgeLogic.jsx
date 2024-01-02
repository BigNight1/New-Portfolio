// myAgeLogic.js
import { useState, useEffect } from "react";
import moment from "moment";

const useMyAgeLogic = (fechaNacimiento) => {
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

    calcularEdad();
    const interval = setInterval(calcularEdad, 1000);

    return () => clearInterval(interval);
  }, [fechaNacimiento]);

  return edad;
};

export default useMyAgeLogic;
