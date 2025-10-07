// myAgeLogic.js - Optimizado sin Moment.js
import { useState, useEffect } from "react";

const useMyAgeLogic = (fechaNacimiento) => {
  const [edad, setEdad] = useState(0);

  useEffect(() => {
    const calcularEdad = () => {
      const fechaNac = new Date(fechaNacimiento);
      const hoy = new Date();
      
      if (!isNaN(fechaNac.getTime())) {
        let edadCalculada = hoy.getFullYear() - fechaNac.getFullYear();
        const mesDiferencia = hoy.getMonth() - fechaNac.getMonth();
        
        if (mesDiferencia < 0 || (mesDiferencia === 0 && hoy.getDate() < fechaNac.getDate())) {
          edadCalculada--;
        }
        
        setEdad(edadCalculada);
      }
    };

    calcularEdad();
    // Solo recalcular una vez al día, no cada segundo
    const interval = setInterval(calcularEdad, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fechaNacimiento]);

  return edad;
};

export default useMyAgeLogic;
