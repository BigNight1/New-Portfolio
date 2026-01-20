import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './SkillsCarousel.css';

gsap.registerPlugin(Draggable);

const SkillsCarousel = () => {
  // Refs para los tracks del carousel
  const frontendTrackRef = useRef(null);
  const backendTrackRef = useRef(null);
  const toolsTrackRef = useRef(null);

  // Refs para los timelines de GSAP
  const frontendTimelineRef = useRef(null);
  const backendTimelineRef = useRef(null);
  const toolsTimelineRef = useRef(null);

  // Refs para los draggables
  const frontendDraggableRef = useRef(null);
  const backendDraggableRef = useRef(null);
  const toolsDraggableRef = useRef(null);

  // Ref para el timeout del debounce
  const resizeTimeoutRef = useRef(null);

  // Mapeo de tecnologías a clases de Devicons
  const techIcons = {
    // Frontend
    'HTML5': 'devicon-html5-plain colored',
    'CSS3': 'devicon-css3-plain colored',
    'JavaScript': 'devicon-javascript-plain colored',
    'TypeScript': 'devicon-typescript-plain colored',
    'React': 'devicon-react-original colored',
    'Angular': 'devicon-angularjs-plain colored',
    'Next.js': 'devicon-nextjs-original-wordmark colored',
    'Astro': 'devicon-astro-plain colored',
    'Redux': 'devicon-redux-original colored',
    'Tailwind CSS': 'devicon-tailwindcss-original colored',
    'Material UI': 'devicon-materialui-plain colored',
    'PrimeNG': 'devicon-primeng-plain colored', 
    'Three.js': 'devicon-threejs-original colored',
    // Backend
    'Node.js': 'devicon-nodejs-plain colored',
    'Express.js': 'devicon-express-original colored',
    'MongoDB': 'devicon-mongodb-plain colored',
    'Mongoose': 'devicon-mongoose-original colored',
    'Firebase': 'devicon-firebase-plain colored',
    'Socket.IO': 'devicon-socketio-original colored',
    'C#': 'devicon-csharp-plain colored',
    // Tools
    'Git': 'devicon-git-plain colored',
    'GitHub': 'devicon-github-original colored',
    'GitLab': 'devicon-gitlab-plain colored',
    'Docker': 'devicon-docker-plain colored',
    'Postman': 'devicon-postman-plain colored',
    'Jira': 'devicon-jira-plain colored',
    'Vercel': 'devicon-vercel-original colored'
  };

  // Frontend technologies con iconos
  const frontendTechs = [
    { name: 'HTML5', icon: techIcons['HTML5'] },
    { name: 'CSS3', icon: techIcons['CSS3'] },
    { name: 'JavaScript', icon: techIcons['JavaScript'] },
    { name: 'TypeScript', icon: techIcons['TypeScript'] },
    { name: 'React', icon: techIcons['React'] },
    { name: 'Angular', icon: techIcons['Angular'] },
    { name: 'Next.js', icon: techIcons['Next.js'] },
    { name: 'Astro', icon: techIcons['Astro'] },
    { name: 'Redux', icon: techIcons['Redux'] },
    { name: 'Tailwind CSS', icon: techIcons['Tailwind CSS'] },
    { name: 'Material UI', icon: techIcons['Material UI'] },
    { name: 'PrimeNG', icon: techIcons['PrimeNG'] },
    { name: 'Three.js', icon: techIcons['Three.js'] }
  ];

  // Backend technologies con iconos
  const backendTechs = [
    { name: 'Node.js', icon: techIcons['Node.js'] },
    { name: 'Express.js', icon: techIcons['Express.js'] },
    { name: 'MongoDB', icon: techIcons['MongoDB'] },
    { name: 'Mongoose', icon: techIcons['Mongoose'] },
    { name: 'Firebase', icon: techIcons['Firebase'] },
    { name: 'Socket.IO', icon: techIcons['Socket.IO'] },
    { name: 'C#', icon: techIcons['C#'] }
  ];

  // Tools con iconos
  const tools = [
    { name: 'Git', icon: techIcons['Git'] },
    { name: 'GitHub', icon: techIcons['GitHub'] },
    { name: 'GitLab', icon: techIcons['GitLab'] },
    { name: 'Docker', icon: techIcons['Docker'] },
    { name: 'Postman', icon: techIcons['Postman'] },
    { name: 'Jira', icon: techIcons['Jira'] },
    { name: 'Vercel', icon: techIcons['Vercel'] },
  ];

  const duplicateArray = (arr) => [...arr, ...arr, ...arr];

  const getCSSVariables = (element) => {
    const computedStyle = window.getComputedStyle(element);
    const itemWidth = parseFloat(computedStyle.getPropertyValue('--item-width')) || 110;
    const itemGap = parseFloat(computedStyle.getPropertyValue('--item-gap')) || 20;
    return { itemWidth, itemGap };
  };

  const cleanupCarousel = (timelineRef, draggableRef) => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    if (draggableRef.current) {
      draggableRef.current.kill();
      draggableRef.current = null;
    }
  };

  const initCarousel = (trackRef, itemCount, timelineRef, draggableRef) => {
    if (!trackRef.current) return;

    const { itemWidth, itemGap } = getCSSVariables(trackRef.current);
    const itemTotalWidth = itemWidth + itemGap;
    const totalWidth = itemCount * itemTotalWidth;
    
    const animationDuration = itemCount * 2; 

   
    const proxy = document.createElement("div");

    const timeline = gsap.timeline({
      repeat: -1,
      paused: false, 
      defaults: { ease: "none" }
    });

    timeline.to(trackRef.current, {
      x: -totalWidth,
      duration: animationDuration,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) 
      }
    });

    timelineRef.current = timeline;

   
    const draggable = Draggable.create(proxy, {
      trigger: trackRef.current.parentElement, 
      type: "x",
      inertia: false, 
      
      onPress: function() {
        timeline.pause(); 
      },
      
      onDrag: function() {
        
        const progressChange = this.deltaX / totalWidth;
        
        
        const newProgress = gsap.utils.wrap(0, 1, timeline.progress() - progressChange);
        
        timeline.progress(newProgress);
      },
      
      onRelease: function() {
       
        timeline.play();
      }
    });

    draggableRef.current = draggable[0];
  };

  const initializeAllCarousels = useCallback(() => {
    cleanupCarousel(frontendTimelineRef, frontendDraggableRef);
    cleanupCarousel(backendTimelineRef, backendDraggableRef);
    cleanupCarousel(toolsTimelineRef, toolsDraggableRef);

    requestAnimationFrame(() => {
      initCarousel(
        frontendTrackRef,
        13,
        frontendTimelineRef,
        frontendDraggableRef
      );

      initCarousel(
        backendTrackRef,
        7,
        backendTimelineRef,
        backendDraggableRef
      );

      initCarousel(
        toolsTrackRef,
        8,
        toolsTimelineRef,
        toolsDraggableRef
      );
    });
  }, []);

  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    resizeTimeoutRef.current = setTimeout(() => {
      initializeAllCarousels();
    }, 250);
  }, [initializeAllCarousels]);

  useEffect(() => {
    initializeAllCarousels();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Cleanup
    return () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);

      cleanupCarousel(frontendTimelineRef, frontendDraggableRef);
      cleanupCarousel(backendTimelineRef, backendDraggableRef);
      cleanupCarousel(toolsTimelineRef, toolsDraggableRef);
    };
  }, [initializeAllCarousels, handleResize]);

  return (
    <div className="skills-carousel-container">
      {/* Frontend Section */}
      <div className="skills-section">
        <h3 className="skills-section-title">FRONTEND</h3>
        <div className="carousel-wrapper">
          <div
            ref={frontendTrackRef}
            className="carousel-track frontend-carousel"
          >
            {duplicateArray(frontendTechs).map((tech, index) => (
              <div key={index} className="carousel-item">
                <i className={`${tech.icon} tech-icon`}></i>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backend Section */}
      <div className="skills-section">
        <h3 className="skills-section-title">BACKEND</h3>
        <div className="carousel-wrapper">
          <div
            ref={backendTrackRef}
            className="carousel-track backend-carousel"
          >
            {duplicateArray(backendTechs).map((tech, index) => (
              <div key={index} className="carousel-item">
                <i className={`${tech.icon} tech-icon`}></i>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="skills-section">
        <h3 className="skills-section-title">TOOLS</h3>
        <div className="carousel-wrapper">
          <div
            ref={toolsTrackRef}
            className="carousel-track tools-carousel"
          >
            {duplicateArray(tools).map((tech, index) => (
              <div key={index} className="carousel-item">
                <i className={`${tech.icon} tech-icon`}></i>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
