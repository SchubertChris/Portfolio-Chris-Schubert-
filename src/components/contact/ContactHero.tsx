// src/components/contact/ContactHero.tsx
import React, { useRef, useEffect } from 'react';
import ParticleBackground from '../ui/ParticleBackground';
import './ContactHero.scss'; // Importiere die CSS-Datei für das Styling

const ContactHero: React.FC = () => {
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
    <div className="contact-hero-section">
      <ParticleBackground />
      <div className="hero-content" ref={heroRef}>
        <h1 className="animated-title">Kontaktieren Sie mich</h1>
        <p className="animated-subtitle">Lassen Sie uns über Ihr nächstes Projekt sprechen</p>
      </div>
      {/* Hintergrund mit Neon-Gradient-Effekt */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>
      </div>
    </div>
  );
};

export default ContactHero;