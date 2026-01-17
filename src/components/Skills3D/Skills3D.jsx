import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';

const Skills3D = () => {
  const mountRef = useRef(null);
  const { t } = useTranslation();

  // Iconos de tecnologías - distribuidas en anillo horizontal
  // Puedes agregar más sin problemas, se distribuyen automáticamente
  const skillsIcons = [
    { id: 1, src: '/icons/react.webp', name: 'React', radius: 6 },
    { id: 2, src: '/icons/javascript.webp', name: 'JavaScript', radius: 6 },
    { id: 3, src: '/icons/nodejs.webp', name: 'Node.js', radius: 6 },
    { id: 4, src: '/icons/mongodb.webp', name: 'MongoDB', radius: 6 },
    { id: 5, src: '/icons/tailwind.webp', name: 'Tailwind', radius: 6 },
    { id: 6, src: '/icons/typescript.webp', name: 'TypeScript', radius: 6 },
    { id: 7, src: '/icons/html.webp', name: 'HTML', radius: 6 },
    { id: 8, src: '/icons/css.webp', name: 'CSS', radius: 6 },
    { id: 9, src: '/icons/git.webp', name: 'Git', radius: 6 },
    { id: 10, src: '/icons/github.webp', name: 'GitHub', radius: 6 },
    { id: 11, src: '/icons/Docker.webp', name: 'Docker', radius: 6 },
    { id: 12, src: '/icons/NestJS.webp', name: 'NestJS', radius: 6 },
    { id: 13, src: '/icons/express.webp', name: 'Express', radius: 6 },
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // Escena
    const scene = new THREE.Scene();

    // Cámara - posicionada para ver el anillo horizontal
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 15);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Obtener anisotropía máxima para texturas nítidas
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    // Iluminación suave y moderna
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ff88, 1.2, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0088ff, 0.8, 100);
    pointLight2.position.set(-5, 5, -5);
    scene.add(pointLight2);

    // Satélite central (Skills)
    const satelliteGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const satelliteMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      emissive: 0x00ff88,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    scene.add(satellite);

    // Anillos decorativos
    const ringGeometry = new THREE.TorusGeometry(0.9, 0.03, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      emissive: 0x00ff88,
      emissiveIntensity: 0.2,
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 2;
    scene.add(ring1);
    
    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring2.rotation.z = Math.PI / 2;
    scene.add(ring2);

    // Texto "Skills" sobre el satélite
    const createTextSprite = (text) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 128;
      
      context.fillStyle = 'rgba(0, 0, 0, 0.7)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.shadowColor = '#00ff88';
      context.shadowBlur = 20;
      context.shadowOffsetX = 2;
      context.shadowOffsetY = 2;
      
      context.fillStyle = '#ffffff';
      context.font = 'Bold 48px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, 256, 64);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true,
        alphaTest: 0.1
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(3, 0.75, 1);
      sprite.position.set(0, 1.2, 0);
      
      return sprite;
    };

    const skillsText = createTextSprite(t("Mishabilidades.habher") || "Skills");
    scene.add(skillsText);

    // Estado del slider
    let currentAngle = 0; // Ángulo actual del anillo
    let targetAngle = 0; // Ángulo objetivo (para suavizado)
    let isDragging = false;
    let lastMouseX = 0;
    let selectedIcon = null;
    const textures = [];
    const iconMeshes = [];

    // Sprite para mostrar el nombre del skill seleccionado
    let nameSprite = null;
    const createNameSprite = (text) => {
      if (nameSprite) {
        scene.remove(nameSprite);
        if (nameSprite.material.map) {
          nameSprite.material.map.dispose();
        }
        nameSprite.material.dispose();
      }

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 128;
      
      // Fondo con gradiente
      const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'rgba(0, 255, 136, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 136, 255, 0.3)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Borde
      context.strokeStyle = '#00ff88';
      context.lineWidth = 3;
      context.strokeRect(0, 0, canvas.width, canvas.height);
      
      // Texto
      context.shadowColor = '#00ff88';
      context.shadowBlur = 15;
      context.shadowOffsetX = 2;
      context.shadowOffsetY = 2;
      
      context.fillStyle = '#ffffff';
      context.font = 'Bold 56px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, 256, 64);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true,
        alphaTest: 0.1
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(3, 0.75, 1); // Tamaño ajustado para que quepa debajo del icono
      sprite.position.set(0, -1.2, 0);
      
      return sprite;
    };

    // Cargar texturas y crear esferas en anillo horizontal
    const textureLoader = new THREE.TextureLoader();
    
    // Promesas para esperar a que todas las texturas se carguen
    const loadPromises = skillsIcons.map((skill, index) => {
      return new Promise((resolve) => {
        textureLoader.load(
          skill.src,
          (texture) => {
          // Configuración optimizada para iconos pequeños 64×64 (UI)
          texture.flipY = true;
          
          // ❌ NO usar mipmaps para imágenes pequeñas de UI (causa blur)
          texture.generateMipmaps = false;
          
          // ✅ Filtros sin mipmaps para máxima nitidez en iconos pequeños
          texture.minFilter = THREE.LinearFilter; // Sin mipmaps
          texture.magFilter = THREE.LinearFilter; // Interpolación suave al escalar
          
          texture.colorSpace = THREE.SRGBColorSpace;
          
          // ✅ NO usar anisotropía alta en iconos pequeños (no es necesario)
          texture.anisotropy = 1;
          
          // ✅ Textura completa sin recortes (NO object-fit: cover)
          texture.center.set(0.5, 0.5);
          texture.rotation = 0;
          texture.repeat.set(1, 1);
          texture.offset.set(0, 0);
          
          texture.needsUpdate = true;
          
          textures.push(texture);
          
          // CircleGeometry para logo plano sin deformación
          const iconGeometry = new THREE.CircleGeometry(0.6, 64);
          
          // MeshBasicMaterial optimizado para iconos pequeños con transparencia
          const iconMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            depthWrite: false,
            // ✅ alphaTest más bajo para bordes suaves (evita cortes)
            alphaTest: 0.01,
            // ✅ PremultipliedAlpha para mejor blending de transparencias
            premultipliedAlpha: false,
          });
          
          const iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
          iconMesh.rotation.x = -Math.PI / 2;
          
          // Fondo circular - mismo tamaño que el outline verde (0.72 es el radio exterior)
          const backgroundGeometry = new THREE.CircleGeometry(0.72, 128);
          const backgroundMaterial = new THREE.MeshBasicMaterial({
            color: 0x808080, // Medio gris
            transparent: true,
            opacity: 0.9,
            depthWrite: false,
            side: THREE.DoubleSide,
          });
          const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
          backgroundMesh.position.z = -0.01; // Detrás del icono
          
          // Agregar elementos al icono
          iconMesh.add(backgroundMesh);
          
          // Borde grueso/Outline - SOLO visible cuando está seleccionado
          const outlineGeometry = new THREE.RingGeometry(0.62, 0.72, 64);
          const outlineMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ff88,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0, // Oculto por defecto
            depthWrite: false,
          });
          const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);
          iconMesh.add(outlineMesh);
          
          // Posición inicial en anillo horizontal (eje X/Z, y = 0)
          const angle = (index / skillsIcons.length) * Math.PI * 2;
          iconMesh.position.x = Math.cos(angle) * skill.radius;
          iconMesh.position.y = 0; // Todos a la misma altura
          iconMesh.position.z = Math.sin(angle) * skill.radius;
          
          // Guardar datos
          iconMesh.userData = {
            name: skill.name,
            originalAngle: angle,
            originalScale: 1,
            isSelected: false,
            outline: outlineMesh,
            background: backgroundMesh,
          };
          
            scene.add(iconMesh);
            iconMeshes.push(iconMesh);
            
            resolve(); // Resolver cuando el icono esté completamente cargado
          },
          undefined,
          (error) => {
            console.error(`Error loading texture ${skill.src}:`, error);
            resolve(); // Resolver incluso si hay error para no bloquear
          }
        );
      });
    });
    
    // Función para centrar un icono por su índice
    const centerIconByIndex = (index = 0) => {
      const icon = iconMeshes[index];
      if (!icon) return;

      // Queremos que este icono quede al frente (Z negativa)
      targetAngle = -icon.userData.originalAngle;
      currentAngle = targetAngle; // snap inmediato

      updateIconPositions();
      
      // Seleccionar el icono centrado
      if (selectedIcon) {
        selectedIcon.userData.isSelected = false;
        selectedIcon.scale.set(1, 1, 1);
        if (selectedIcon.userData.outline) {
          selectedIcon.userData.outline.material.opacity = 0; // Ocultar borde grueso
        }
        // Background siempre gris, no cambiar
      }
      
      selectedIcon = icon;
      if (selectedIcon) {
        selectedIcon.userData.isSelected = true;
        selectedIcon.scale.set(1.25, 1.25, 1.25);
        if (selectedIcon.userData.outline) {
          selectedIcon.userData.outline.material.opacity = 0.8; // Mostrar borde grueso verde
          selectedIcon.userData.outline.material.color.setHex(0x00ff88);
        }
        // Background siempre gris, no cambiar
        
        // Crear texto del nombre
        if (selectedIcon.userData.name) {
          if (nameSprite) {
            scene.remove(nameSprite);
            if (nameSprite.material.map) {
              nameSprite.material.map.dispose();
            }
            nameSprite.material.dispose();
          }
          nameSprite = createNameSprite(selectedIcon.userData.name);
          scene.add(nameSprite);
        }
      }
    };

    // Esperar a que todas las texturas se carguen
    Promise.all(loadPromises).then(() => {
      // Las texturas están cargadas, pero no centramos aún
      // Esperaremos a que la sección sea visible
    });

    // Función para actualizar posiciones según el ángulo
    // Los iconos mantienen orientación fija (sin rotación dinámica)
    const updateIconPositions = () => {
      iconMeshes.forEach((iconMesh) => {
        const totalAngle = iconMesh.userData.originalAngle + currentAngle;
        iconMesh.position.x = Math.cos(totalAngle) * skillsIcons[0].radius;
        iconMesh.position.z = Math.sin(totalAngle) * skillsIcons[0].radius;
        iconMesh.position.y = 0;
        
        // Billboard: hacer que el icono siempre mire a la cámara
        iconMesh.lookAt(camera.position);
      });
    };

    // Función para encontrar el icono más cercano a la cámara (frente)
    const updateSelection = () => {
      let closestIcon = null;
      let closestDistance = Infinity;
      
      iconMeshes.forEach((iconMesh) => {
        // Calcular distancia desde la cámara (en el plano XZ)
        const distance = Math.sqrt(
          Math.pow(iconMesh.position.x - camera.position.x, 2) +
          Math.pow(iconMesh.position.z - camera.position.z, 2)
        );
        
        // También considerar la posición Z (más cerca = más al frente)
        const zDistance = iconMesh.position.z;
        
        // El icono más al frente (Z más negativo) y más cercano
        const score = distance - zDistance * 2;
        
        if (score < closestDistance) {
          closestDistance = score;
          closestIcon = iconMesh;
        }
      });

      // Actualizar selección
      if (closestIcon !== selectedIcon) {
        // Resetear anterior
        if (selectedIcon) {
          selectedIcon.userData.isSelected = false;
          selectedIcon.scale.set(1, 1, 1);
          if (selectedIcon.userData.outline) {
            selectedIcon.userData.outline.material.opacity = 0; // Ocultar borde grueso
          }
          // Background siempre gris, no cambiar
        }

        // Seleccionar nuevo
        selectedIcon = closestIcon;
        if (selectedIcon) {
          selectedIcon.userData.isSelected = true;
          selectedIcon.scale.set(1.25, 1.25, 1.25); // Escala más sutil
          if (selectedIcon.userData.outline) {
            selectedIcon.userData.outline.material.opacity = 0.8; // Mostrar borde grueso verde
            selectedIcon.userData.outline.material.color.setHex(0x00ff88);
          }
          // Background siempre gris, no cambiar

          // Actualizar texto del nombre debajo del icono
          if (selectedIcon.userData.name) {
            if (nameSprite) {
              scene.remove(nameSprite);
              if (nameSprite.material.map) {
                nameSprite.material.map.dispose();
              }
              nameSprite.material.dispose();
            }
            nameSprite = createNameSprite(selectedIcon.userData.name);
            scene.add(nameSprite);
          }
        }
      }
      
      // Actualizar posición del texto para que siga al icono seleccionado (debajo)
      if (selectedIcon && nameSprite) {
        // Posicionar el texto debajo del icono seleccionado
        nameSprite.position.x = selectedIcon.position.x;
        nameSprite.position.y = selectedIcon.position.y - 1.8; // Más abajo del icono
        nameSprite.position.z = selectedIcon.position.z;
        // Hacer que el texto mire a la cámara
        nameSprite.lookAt(camera.position);
      }
    };

    // Event listeners para control horizontal
    const onMouseDown = (event) => {
      isDragging = true;
      lastMouseX = event.clientX;
      renderer.domElement.style.cursor = 'grabbing';
    };

    const onMouseMove = (event) => {
      if (!isDragging) return;

      const deltaX = event.clientX - lastMouseX;
      const sensitivity = 0.01; // Sensibilidad del movimiento
      
      // Actualizar ángulo objetivo (solo horizontal)
      targetAngle += deltaX * sensitivity;
      
      lastMouseX = event.clientX;
    };

    const onMouseUp = () => {
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    const onMouseLeave = () => {
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    // Agregar event listeners
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('mouseleave', onMouseLeave);
    renderer.domElement.style.cursor = 'grab';

    // Animación con suavizado (lerp)
    let animationId;
    const lerpFactor = 0.1; // Factor de suavizado (0.1 = suave, 1.0 = instantáneo)
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Suavizado del ángulo (lerp)
      currentAngle += (targetAngle - currentAngle) * lerpFactor;

      // Actualizar posiciones
      updateIconPositions();

      // Actualizar selección
      updateSelection();

      renderer.render(scene, camera);
    };
    animate();

    // Manejo de resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // IntersectionObserver para detectar cuando la sección entra en viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && iconMeshes.length > 0) {
          // Centrar el primer skill cuando la sección es visible
          centerIconByIndex(0); // React o el primero
        }
      },
      {
        threshold: 0.4, // cuando 40% de la sección es visible
      }
    );

    // Observar el contenedor cuando las texturas estén cargadas
    Promise.all(loadPromises).then(() => {
      if (mountRef.current) {
        observer.observe(mountRef.current);
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Desconectar el IntersectionObserver
      observer.disconnect();
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      // Remover event listeners
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('mousedown', onMouseDown);
        renderer.domElement.removeEventListener('mousemove', onMouseMove);
        renderer.domElement.removeEventListener('mouseup', onMouseUp);
        renderer.domElement.removeEventListener('mouseleave', onMouseLeave);
      }
      
      // Limpiar recursos
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            if (object.material.map) {
              object.material.map.dispose();
            }
            object.material.dispose();
          }
        }
        if (object instanceof THREE.Sprite) {
          if (object.material.map) {
            object.material.map.dispose();
          }
          object.material.dispose();
        }
      });
      
      // Limpiar texturas
      textures.forEach(texture => texture.dispose());
      
      renderer.dispose();
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [t]);

  return (
    <section 
      id="skills-3d" 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center ">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t("Mishabilidades.habher")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t("Mishabilidades.description") || "Technologies I master and use in my projects"}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Arrastra horizontalmente para explorar
          </p>
        </div>
        <div 
          ref={mountRef} 
          className="w-full h-[600px] rounded-lg overflow-hidden shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Skills3D;
