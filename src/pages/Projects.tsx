// src/pages/Projects.tsx
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Seo from '../components/shared/Seo';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import ScrollToTop from '../components/ui/ScrollToTop';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import { PROJECTS_DATA } from '../data/projects.data';
import { ProjectData } from '../types';
import '../styles/pages/Projects.scss';
import '../styles/shared/ProjectCard.scss';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(PROJECTS_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Alle');

  // Suchfunktion optimiert mit useCallback
  const applyFilters = useCallback((term: string, category: string) => {
    let filtered = PROJECTS_DATA;

    // Suchwort anwenden (nur wenn nicht leer)
    if (term.trim() !== '') {
      const lowercaseTerm = term.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(lowercaseTerm) ||
        project.description.toLowerCase().includes(lowercaseTerm) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lowercaseTerm))
      );
    }

    // Kategorie anwenden (nur wenn nicht "Alle")
    if (category !== 'Alle') {
      if (category === 'Featured') {
        filtered = filtered.filter(project => project.featured);
      } else {
        filtered = filtered.filter(project => project.category.includes(category));
      }
    }

    return filtered;
  }, []);

  // Filtern der Projekte mit useMemo
  useMemo(() => {
    const newFilteredProjects = applyFilters(searchTerm, activeFilter);
    setFilteredProjects(newFilteredProjects);
  }, [searchTerm, activeFilter, applyFilters]);

  // Filter ändern
  const handleFilterChange = useCallback((category: string) => {
    setActiveFilter(category);
  }, []);

  // Suche ändern
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  // Projekt auswählen
  const handleProjectSelect = useCallback((project: ProjectData) => {
    setSelectedProject(project);
  }, []);

  // Projekt-Modal schließen
  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Scroll Reveal Effekt
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  // Memoized ProjectCards für bessere Performance
  const projectCardsList = useMemo(() => {
    if (filteredProjects.length > 0) {
      return filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => handleProjectSelect(project)}
        />
      ));
    }
    
    return (
      <div className="no-results">
        <h3>Keine Projekte gefunden</h3>
        <p>Versuchen Sie eine andere Suche oder Filter-Kategorie.</p>
      </div>
    );
  }, [filteredProjects, handleProjectSelect]);

  return (
    <div className="projects-page">
      <Seo
        title="Projekte von Chris Schubert – Webdesign & React Entwicklung"
        description="Entdecke die Projekte von Chris Schubert. Webdesign, UI/UX-Design und React-Projekte, die innovative Lösungen bieten."
        keywords="Projekte, Webdesign, React, UI Design, Frontend Entwicklung, Portfolio"
        image="https://deine-domain.de/assets/projects-og-image.jpg"
        url="https://deine-domain.de/projects"
      />

      <ProjectHero />

      <ProjectFilter
        searchTerm={searchTerm}
        activeFilter={activeFilter}
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
      />

      <div className="projects-grid-section">
        <div className="projects-grid">
          {projectCardsList}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}

      <ScrollToTop />
    </div>
  );
};

export default Projects;