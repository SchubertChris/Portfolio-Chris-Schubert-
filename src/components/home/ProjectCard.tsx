// src/components/home/ProjectCard.tsx
import React, { useRef, useState } from 'react';

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, imageUrl }) => {
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

        // Umrechnung in Rotationswinkel (-10 bis 10 Grad)
        const rotX = 10 - normalizedY * 20;
        const rotY = normalizedX * 20 - 10;

        // CSS-Variablen setzen
        setRotateX(rotX);
        setRotateY(rotY);
        setScale(1.05);
    };

    const handleMouseLeave = () => {
        // Zurücksetzen auf Ausgangswerte
        setRotateX(0);
        setRotateY(0);
        setScale(1);
    };

    const cardStyle = {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: 'transform 0.1s ease'
    };

    return (
        <div
            ref={cardRef}
            className="project-card"
            style={cardStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-image">
                <img src={imageUrl} alt={title} />
                <div className="card-overlay">
                    <a href="https://schubertchris.github.io/React-Abschluss/" className="view-project">Ansehen</a>
                </div>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;