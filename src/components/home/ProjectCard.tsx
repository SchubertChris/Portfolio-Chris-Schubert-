import React, { useRef, useState } from 'react';
import '../../styles/shared/ProjectCard.scss';

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    tilt?: number; // Neue Prop für die Neigung
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
    title, 
    description, 
    tags, 
    imageUrl, 
    tilt = 0 // Standardwert 0 bedeutet keine Neigung
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(tilt); // Startwert ist der übergebene Tilt-Wert
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
        const rotY = tilt + (normalizedX * 20 - 10); // Ursprüngliche Neigung + dynamische Mausbewegung
        // CSS-Variablen setzen
        setRotateX(rotX);
        setRotateY(rotY);
        setScale(1.05);
    };

    const handleMouseLeave = () => {
        // Zurücksetzen auf Ausgangswerte mit ursprünglicher Neigung
        setRotateX(0);
        setRotateY(tilt);
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