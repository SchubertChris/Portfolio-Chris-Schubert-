// src/pages/Projects.tsx
import React, { useEffect, useState } from 'react';
import Seo from '../components/shared/Seo';  // SEO-Komponente importieren
import ProjectHero from '../components/projects/ProjectHero';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import ScrollToTop from '../components/ui/ScrollToTop';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import { PROJECTS_DATA } from '../data/projects.data';
import { ProjectData } from '../types';
import '../styles/pages/Projects.scss'; // Importiere die CSS-Datei für die Projekte-Seite
import '../styles/shared/ProjectCard.scss'; // Importiere die CSS-Datei für die Projektkarten

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(PROJECTS_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Alle');

  // Suchfunktion verbessern
  const applyFilters = (term: string = searchTerm, category: string = activeFilter) => {
    let filtered = [...PROJECTS_DATA];

    // Suchwort anwenden
    if (term.trim() !== '') {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(term.toLowerCase()) ||
        project.description.toLowerCase().includes(term.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(term.toLowerCase()))
      );
    }

    // Kategorie anwenden
    if (category !== 'Alle') {
      if (category === 'Featured') {
        filtered = filtered.filter(project => project.featured);
      } else {
        filtered = filtered.filter(project => project.category.includes(category));
      }
    }

    setFilteredProjects(filtered);
  };

  // Filter ändern
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    applyFilters(searchTerm, category);
  };

  // Suche ändern
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    applyFilters(term, activeFilter);
  };

  // Scroll Reveal Effekt
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="projects-page">
      {/* SEO-Komponente für die Projects-Seite */}
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
        {/* Grid ohne Inline-Styles, stattdessen CSS-Klassen verwenden */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))
          ) : (
            <div className="no-results">
              <h3>Keine Projekte gefunden</h3>
              <p>Versuchen Sie eine andere Suche oder Filter-Kategorie.</p>
            </div>
          )}
        </div>
      </div>

      {/* Projektdetail-Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <ScrollToTop />
    </div>
  );
};

export default Projects;