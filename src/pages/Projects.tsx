// src/pages/Projects.tsx
import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaArrowUp } from 'react-icons/fa';
import ParticleBackground from '../components/ui/ParticleBackground';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import './Projects.scss';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
  category: string[];
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Eine moderne Portfolio-Website mit React, TypeScript und SCSS.",
    longDescription: "Diese Portfolio-Website wurde mit React und TypeScript entwickelt, um meine Projekte und Fähigkeiten zu präsentieren. Sie verfügt über verschiedene Animationen, interaktive Elemente und ist vollständig responsive.",
    image: "/project-portfolio.jpg",
    technologies: ["React", "TypeScript", "SCSS", "Vite"],
    github: "https://github.com/username/portfolio",
    liveDemo: "https://portfolio.dev",
    featured: true,
    category: ["Web", "Frontend"]
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "Admin-Dashboard für einen Online-Shop mit Datenvisualisierung.",
    longDescription: "Ein umfassendes Dashboard für E-Commerce-Administratoren mit Echtzeitstatistiken, Bestandsverwaltung und Kundenanalyse. Implementiert mit React für die Benutzeroberfläche und D3.js für komplexe Datenvisualisierungen.",
    image: "/project-dashboard.jpg",
    technologies: ["React", "Node.js", "MongoDB", "D3.js", "Express"],
    github: "https://github.com/username/dashboard",
    liveDemo: "https://dashboard-demo.com",
    featured: true,
    category: ["Web", "Frontend", "Backend"]
  },
  {
    id: 3,
    title: "Reise-App",
    description: "Mobile App für Reiseplanung und Entdeckung lokaler Attraktionen.",
    longDescription: "Eine benutzerfreundliche Reise-App, die es Benutzern ermöglicht, Reisen zu planen, lokale Attraktionen zu entdecken und Erinnerungen zu speichern. Die App nutzt Standortdienste und bietet personalisierte Empfehlungen.",
    image: "/project-travel.jpg",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    github: "https://github.com/username/travel-app",
    featured: false,
    category: ["Mobile", "Frontend"]
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Kollaboratives Aufgabenmanagementsystem für Teams.",
    longDescription: "Ein leistungsstarkes Aufgabenmanagementsystem, das Teamarbeit und Produktivität fördert. Bietet Funktionen wie Aufgabenzuweisung, Fortschrittsverfolgung, Deadlines und Integration mit gängigen Kalenderdiensten.",
    image: "/project-task.jpg",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    github: "https://github.com/username/task-system",
    liveDemo: "https://task-system-demo.com",
    featured: true,
    category: ["Web", "Fullstack"]
  },
  {
    id: 5,
    title: "Wetter-Widget",
    description: "Ein anpassbares Wetter-Widget mit animierten Darstellungen.",
    longDescription: "Ein elegantes und anpassbares Wetter-Widget, das aktuelle Wetterbedingungen und Vorhersagen mit schönen Animationen darstellt. Leicht zu integrieren in bestehende Webseiten und Apps.",
    image: "/project-weather.jpg",
    technologies: ["JavaScript", "CSS", "OpenWeather API"],
    github: "https://github.com/username/weather-widget",
    liveDemo: "https://weather-widget-demo.com",
    featured: false,
    category: ["Web", "Frontend", "Widget"]
  },
  {
    id: 6,
    title: "Finanz-Tracker",
    description: "Persönliche Finanzverwaltung mit Budget-Planung und Ausgabenverfolgung.",
    longDescription: "Eine umfassende Anwendung zur Verwaltung persönlicher Finanzen. Ermöglicht Benutzern, Einnahmen und Ausgaben zu verfolgen, Budgets zu erstellen, finanzielle Ziele zu setzen und detaillierte Berichte zu generieren.",
    image: "/project-finance.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/username/finance-tracker",
    liveDemo: "https://finance-tracker-demo.com",
    featured: false,
    category: ["Web", "Fullstack"]
  }
];

const ProjectCard: React.FC<{ project: ProjectData; onClick: () => void }> = ({ project, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Berechnung der Mausposition relativ zur Karte
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalisieren der Position (0 bis 1)
    const normalizedX = x / rect.width;
    const normalizedY = y / rect.height;

    // Umrechnung in Rotationswinkel (-5 bis 5 Grad für subtileren Effekt)
    const rotX = 5 - normalizedY * 10;
    const rotY = normalizedX * 10 - 5;

    // CSS-Variablen setzen
    setRotateX(rotX);
    setRotateY(rotY);
    setScale(1.03);
  };

  const handleMouseLeave = () => {
    // Zurücksetzen auf Ausgangswerte
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  const cardStyle = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
    transition: 'transform 0.2s ease'
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-reveal="up"
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <button className="view-details-btn" onClick={onClick}>
            Details ansehen
          </button>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-tag more">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectModal: React.FC<{
  project: ProjectData | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    // Scroll sperren
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);

      // Scroll wieder freigeben
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop">
      <div className="project-modal" ref={modalRef}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="modal-content">
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="modal-details">
            <h2>{project.title}</h2>
            <p className="modal-description">{project.longDescription}</p>

            <div className="tech-section">
              <h3>Technologien</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="demo-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(PROJECTS_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Alle');
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax Effekt für Hero-Sektion
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPos = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPos * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  const filterProjects = (category: string) => {
    setActiveFilter(category);

    if (category === 'Alle') {
      setFilteredProjects(PROJECTS_DATA.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else if (category === 'Featured') {
      setFilteredProjects(PROJECTS_DATA.filter(project =>
        project.featured &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()))
      ));
    } else {
      setFilteredProjects(PROJECTS_DATA.filter(project =>
        project.category.includes(category) &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()))
      ));
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (activeFilter === 'Alle') {
      setFilteredProjects(PROJECTS_DATA.filter(project =>
        project.title.toLowerCase().includes(term.toLowerCase()) ||
        project.description.toLowerCase().includes(term.toLowerCase())
      ));
    } else if (activeFilter === 'Featured') {
      setFilteredProjects(PROJECTS_DATA.filter(project =>
        project.featured &&
        (project.title.toLowerCase().includes(term.toLowerCase()) ||
          project.description.toLowerCase().includes(term.toLowerCase()))
      ));
    } else {
      setFilteredProjects(PROJECTS_DATA.filter(project =>
        project.category.includes(activeFilter) &&
        (project.title.toLowerCase().includes(term.toLowerCase()) ||
          project.description.toLowerCase().includes(term.toLowerCase()))
      ));
    }
  };

  const categories = ['Alle', 'Featured', 'Web', 'Mobile', 'Frontend', 'Backend', 'Fullstack', 'Widget'];

  return (
    <div className="projects-page">
      {/* Hero-Sektion mit Parallax-Effekt */}
      <div className="projects-hero-section">
        <ParticleBackground />
        <div className="hero-content" ref={heroRef}>
          <h1 className="animated-title">Meine Projekte</h1>
          <p className="animated-subtitle">Eine Auswahl meiner Arbeit - von Webapplikationen bis Mobile Apps</p>
        </div>
        {/* Hintergrund mit Neon-Gradient-Effekt */}
        <div className="hero-background">
          <div className="gradient-overlay"></div>
          <div className="grid-overlay"></div>
        </div>
      </div>

      {/* Filter und Suchleiste */}
      <div className="projects-filter-section">
        <div className="filter-container">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                onClick={() => filterProjects(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Projekte durchsuchen..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Projekte Raster */}
      <div className="projects-grid-section">
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

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Projects;