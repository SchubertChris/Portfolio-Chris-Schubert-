import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import './ProjectsSection.scss';

interface ProjectsSectionProps {
    isVisible: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible }) => {
    const navigate = useNavigate();
    return (
        <div id="projects" className={`projects-preview section-animate ${isVisible ? 'visible' : ''}`}>
            <div className="section-container">
                <h2 className="section-title" data-reveal="up">Aktuelle Projekte</h2>
                <div className="project-cards">
                    <ProjectCard
                        id={1}
                        title="Portfolio Website"
                        description="Eine moderne Portfolio-Website mit React, TypeScript und SCSS."
                        tags={["React", "TypeScript", "SCSS"]}
                        imageUrl="/Placeholder.webp"
                        tilt={15} // Stärkere Neigung nach rechts um Y-Achse
                    />
                    <ProjectCard
                        id={2}
                        title="Dashboard App"
                        description="Ein interaktives Dashboard mit Datenvisualisierung und benutzerdefinierten Charts."
                        tags={["React", "D3.js", "API"]}
                        imageUrl="/Placeholder.webp"
                        tilt={0} // Keine Neigung (gerade)
                    />
                    <ProjectCard
                        id={3}
                        title="E-Commerce Platform"
                        description="Eine vollständige E-Commerce-Lösung mit Warenkorb und Zahlungsabwicklung."
                        tags={["React", "Node.js", "MongoDB"]}
                        imageUrl="/Placeholder.webp"
                        tilt={-15} // Stärkere Neigung nach links um Y-Achse
                    />
                </div>
                <div className="section-footer" data-reveal="up" data-reveal-delay="400">
                    <button
                        className="outline-button"
                        onClick={() => navigate('/projects')}
                    >
                        Alle Projekte ansehen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;