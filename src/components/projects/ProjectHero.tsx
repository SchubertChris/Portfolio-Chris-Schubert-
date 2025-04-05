// src/components/projects/ProjectHero.tsx
import React, { useRef, useEffect } from 'react';
import ParticleBackground from '../ui/ParticleBackground';
import './ProjectHero.scss'; // Importiere die CSS-Datei für das Styling

const ProjectHero: React.FC = () => {
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

    return (
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
    );
};

export default ProjectHero;