import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './OrbitingIcons.css';

const OrbitingIcons = ({ icons = [] }) => {
  const containerRef = useRef(null);
  
  // Si no se pasan iconos, usamos placeholders por defecto
  const defaultIcons = [
    { id: 1, src: '/icons/react.webp', alt: 'React' },
    { id: 2, src: '/icons/javascript.webp', alt: 'JavaScript' },
    { id: 3, src: '/icons/nodejs.webp', alt: 'Node.js' },
    { id: 4, src: '/icons/mongodb.webp', alt: 'MongoDB' },
    { id: 5, src: '/icons/tailwind.webp', alt: 'Tailwind' },
    { id: 6, src: '/icons/git.webp', alt: 'Git' },
    { id: 7, src: '/icons/html.webp', alt: 'HTML' },
    { id: 8, src: '/icons/css.webp', alt: 'CSS' },
    { id: 9, src: '/icons/typescript.webp', alt: 'TypeScript' },
    { id: 10, src: '/icons/github.webp', alt: 'Github' },
  ];

  const displayIcons = icons.length > 0 ? icons : defaultIcons;
  const totalIcons = displayIcons.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iconElements = container.querySelectorAll('.orbit-icon');
    
    // Función para calcular radio dinámicamente según el tamaño de pantalla
    const getRadius = () => {
      const width = window.innerWidth;
      if (width <= 640) return 170; // mobile
      if (width <= 1024) return 200; // tablet
      return 240; // desktop
    };

    // Función para posicionar iconos usando trigonometría
    const positionIcons = () => {
      const radius = getRadius();
      
      gsap.set(iconElements, {
        x: (i) => Math.cos((i / totalIcons) * Math.PI * 2) * radius,
        y: (i) => Math.sin((i / totalIcons) * Math.PI * 2) * radius,
        duration: 0,
        transformOrigin: "center center"
      });
    };

    // Posicionar iconos inicialmente
    positionIcons();

    // Recalcular posición en resize
    const handleResize = () => {
      positionIcons();
    };
    
    window.addEventListener('resize', handleResize);

    // Timeline para animaciones coordinadas
    const tl = gsap.timeline({ repeat: -1 });
    
    // Rotación del contenedor
    tl.to(container, { 
      rotation: 360, 
      duration: 20, 
      ease: "none" 
    }, 0);

    // Contra-rotación de cada icono para mantenerlos derechos
    iconElements.forEach((icon) => {
      tl.to(icon, { 
        rotation: -360, 
        duration: 20, 
        ease: "none" 
      }, 0);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.killTweensOf(container);
      gsap.killTweensOf(iconElements);
      tl.kill();
    };
  }, [displayIcons.length, totalIcons]);

  return (
    <div ref={containerRef} className="orbit-container">
      {displayIcons.map((icon, index) => {
        return (
          <div 
            key={icon.id || index} 
            className="orbit-icon"
          >
            <img 
              src={icon.src} 
              alt={icon.alt} 
              className="orbit-icon-image"
            />
          </div>
        );
      })}
    </div>
  );
};

// GSAP optimizado con:
// - Posicionamiento dinámico usando trigonometría
// - Timeline para animaciones coordinadas
// - Responsive automático sin media queries

export default OrbitingIcons;
