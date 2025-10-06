import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

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
    { id: 10, src: '/icons/vercel.webp', alt: 'Vercel' },
  ];

  const displayIcons = icons.length > 0 ? icons : defaultIcons;
  const totalIcons = displayIcons.length;
  const angleStep = 360 / totalIcons;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iconElements = container.querySelectorAll('.orbit-icon');
    
    // Animación GSAP para rotación infinita del contenedor
    gsap.to(container, {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });

    // Contra-rotación de cada icono para mantenerlos derechos
    iconElements.forEach((icon) => {
      gsap.to(icon, {
        rotation: -360,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => {
      gsap.killTweensOf(container);
      gsap.killTweensOf(iconElements);
    };
  }, [displayIcons.length]);

  return (
    <OrbitContainer ref={containerRef}>
      {displayIcons.map((icon, index) => {
        const angle = angleStep * index;
        return (
          <IconWrapper 
            key={icon.id || index} 
            angle={angle}
            className="orbit-icon"
          >
            <IconImage src={icon.src} alt={icon.alt} />
          </IconWrapper>
        );
      })}
    </OrbitContainer>
  );
};

// Styled Components
const OrbitContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 56px;
  height: 56px;
  margin: -28px 0 0 -28px;
  
  /* Posicionamiento en círculo perfecto - Solo posición inicial */
  transform: 
    rotate(${props => props.angle}deg) 
    translate(240px) 
    rotate(-${props => props.angle}deg);
  
  /* Responsive - Tablet */
  @media (max-width: 1024px) {
    width: 48px;
    height: 48px;
    margin: -24px 0 0 -24px;
    
    transform: 
      rotate(${props => props.angle}deg) 
      translate(200px) 
      rotate(-${props => props.angle}deg);
  }
  
  /* Responsive - Mobile */
  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    
    transform: 
      rotate(${props => props.angle}deg) 
      translate(170px) 
      rotate(-${props => props.angle}deg);
  }
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    background: rgba(255, 255, 255, 0.2);
  }
`;

export default OrbitingIcons;
