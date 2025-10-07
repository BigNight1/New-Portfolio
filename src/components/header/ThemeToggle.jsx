import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ThemeToggle = ({ theme, toggleTheme, imageSource }) => {
  const [isChanging, setIsChanging] = useState(false);
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const glowRef = useRef(null);

  const handleToggle = () => {
    setIsChanging(true);
    
    // Animación de salida del icono actual
    gsap.to(iconRef.current, {
      scale: 0,
      rotate: theme === "light" ? 180 : -180,
      opacity: 0,
      duration: 0.15,
      ease: "power2.inOut",
      onComplete: () => {
        // Cambiar tema
        toggleTheme();
        
        // Animación de entrada del nuevo icono
        gsap.fromTo(iconRef.current, {
          scale: 0,
          rotate: theme === "light" ? -180 : 180,
          opacity: 0
        }, {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.15,
          ease: "power2.inOut"
        });
      }
    });

    // Efecto de glow
    gsap.to(glowRef.current, {
      opacity: 1,
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(glowRef.current, {
          opacity: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => setIsChanging(false)
        });
      }
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative cursor-pointer group hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center mx-[0.3rem] transition-colors duration-300 overflow-hidden"
      onClick={handleToggle}
      onMouseEnter={() => gsap.to(containerRef.current, { scale: 1.05, duration: 0.2 })}
      onMouseLeave={() => gsap.to(containerRef.current, { scale: 1, duration: 0.2 })}
      onMouseDown={() => gsap.to(containerRef.current, { scale: 0.95, duration: 0.1 })}
      onMouseUp={() => gsap.to(containerRef.current, { scale: 1.05, duration: 0.1 })}
    >
      {/* Contenedor del icono con animación */}
      <div className="relative w-6 h-6">
        <img
          ref={iconRef}
          src={imageSource}
          alt={theme}
          className="w-6 h-6 absolute inset-0"
        />
      </div>

      {/* Efecto de glow animado */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0"
      />
    </div>
  );
};

export default ThemeToggle;
