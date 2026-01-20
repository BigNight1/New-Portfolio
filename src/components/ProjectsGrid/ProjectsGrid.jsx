import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectsGrid.css';

const ProjectsGrid = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Obtener proyectos desde i18n y ordenarlos
  const projects = useMemo(() => {
    const projectsData = t('ProjectsGrid.projects', { returnObjects: true });
    if (!Array.isArray(projectsData)) return [];
    return [...projectsData].sort((a, b) => a.order - b.order);
  }, [t]);

  // Separar proyectos por layout
  const projectMain = projects.find(p => p.layout === 'main');
  const projectB = projects.find(p => p.layout === 'b');
  const projectC1 = projects.find(p => p.layout === 'c1');
  const projectC2 = projects.find(p => p.layout === 'c2');
  const projectD = projects.find(p => p.layout === 'd');

  const handleProjectClick = (project) => {
    // Guardar la posición del scroll antes de abrir el modal
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    
    // Restaurar el scroll después de cerrar
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    // Delay para permitir la animación de salida (más rápida que entrada)
    setTimeout(() => {
      setSelectedProject(null);
    }, 250);
  };

  const handleOverlayClick = (e) => {
    // Cerrar solo si se hace click en el overlay, no en el contenido del modal
    if (e.target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };

  const renderProjectItem = (project, className, isSubItem = false) => {
    if (!project) return null;

    const ItemComponent = isSubItem ? 'div' : 'div';
    const containerClass = isSubItem ? 'project-sub-item' : 'project-item';
    
    // Obtener primeras 3-4 tecnologías para mostrar como chips
    const topSkills = project.skills ? project.skills.slice(0, 4) : [];
    
    // Crear subtítulo corto (primeras palabras de la descripción)
    const shortDescription = project.description 
      ? project.description.split(' ').slice(0, 12).join(' ') + '...'
      : '';
    
    // Todas las imágenes usan cover para ocupar todo el espacio
    return (
      <ItemComponent
        className={`${containerClass} ${className}`}
        onClick={() => handleProjectClick(project)}
        style={{
          backgroundImage: project.img ? `url(${project.img})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="project-overlay" />
        <div className="project-content">
          <h3 className="project-title">{project.name}</h3>
          <p className="project-subtitle">{shortDescription}</p>
          {topSkills.length > 0 && (
            <div className="project-skills-preview">
              {topSkills.map((skill, index) => (
                <span key={index} className="project-skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </ItemComponent>
    );
  };

  return (
    <section id="projectsgrid" className="projects-grid-section relative min-h-screen bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-gray-800 via-cyan-400 to-blue-500 dark:from-white dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            {t("ProjectsGrid.title")}
          </h2>
          <div className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t("ProjectsGrid.subtitle")}
          </div>
        </div>
        
        {/* Grid Container */}
        <div className="projects-grid-container">
          {/* Proyecto Principal - Columna izquierda, 2 filas */}
          {renderProjectItem(projectMain, 'project-main')}

          {/* Proyecto B - Columna derecha arriba */}
          {renderProjectItem(projectB, 'project-b')}

          {/* Proyecto C1 - Columna derecha abajo izquierda */}
          {renderProjectItem(projectC1, 'project-c1')}

          {/* Proyecto C2 - Columna derecha abajo derecha */}
          {renderProjectItem(projectC2, 'project-c2')}

          {/* Proyecto D - Ancho completo */}
          {renderProjectItem(projectD, 'project-d')}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className={`modal-overlay ${isModalOpen ? 'modal-open' : ''}`}
          onClick={handleOverlayClick}
        >
          <div className="modal-content">
            {/* Header fijo */}
            <div className="modal-header">
              <div className="modal-header-content">
                <h2>{selectedProject.name}</h2>
                
              </div>
              <button 
                className="modal-close-btn"
                onClick={handleCloseModal}
                aria-label="Cerrar modal"
              >
                ×
              </button>
            </div>

            {/* Preview grande (hero) */}
            {selectedProject.img && (
              <div className="modal-image-hero">
                <img src={selectedProject.img} alt={selectedProject.alt || selectedProject.name} />
              </div>
            )}

            {/* Contenido scrolleable */}
            <div className="modal-body">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="modal-description">{selectedProject.description}</p>
              </div>
              
              {selectedProject.skills && selectedProject.skills.length > 0 && (
                <div className="modal-skills">
                  <h3>Tecnologías utilizadas</h3>
                  <div className="skills-list">
                    {selectedProject.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-links">
                {selectedProject.href && selectedProject.href !== '#' && (
                  <a 
                    href={selectedProject.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-link modal-link-primary"
                  >
                    Ver Proyecto
                  </a>
                )}
                {/* {selectedProject.code && selectedProject.code !== '#' && (
                  <a 
                    href={selectedProject.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-link modal-link-secondary"
                  >
                    Ver Código
                  </a>
                )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;
