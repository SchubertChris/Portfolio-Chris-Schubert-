// src/components/projects/ProjectCard.tsx
import React, { useRef, useState } from 'react';
import { ProjectData } from '../../types';
import '../../styles/shared/ProjectCard.scss'; // Importiere die CSS-Datei für das Styling

interface ProjectCardProps {
    project: ProjectData;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
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

export default ProjectCard;
