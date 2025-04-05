// src/components/about/AboutHero.tsx
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '../ui/ParticleBackground';
import './AboutHero.scss'; // Importiere die CSS-Datei für das Styling

const AboutHero: React.FC = () => {
  const navigate = useNavigate();
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
    <div className="about-hero-section">
      <ParticleBackground />
      <div className="hero-content" ref={heroRef}>
        <h1 className="animated-title">Über Mich</h1>
        <p className="animated-subtitle">Frontend-Entwickler mit Leidenschaft für moderne Webtechnologien</p>
        <div className="hero-cta">
          <button
            className="primary-button"
            onClick={() => navigate('/projects')}
          >
            Meine Projekte
          </button>
          <button
            className="secondary-button"
            onClick={() => navigate('/contact')}
          >
            Kontakt
          </button>
        </div>
      </div>
      {/* Hintergrund mit Neon-Gradient-Effekt */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>
      </div>
    </div>
  );
};

export default AboutHero;