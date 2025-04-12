import React, { useEffect, useCallback, memo } from 'react';
import ParticleBackground from '../ui/ParticleBackground';
import './ProjectHero.scss';

const ProjectHero: React.FC = () => {
    // Verwende useRef mit null-Initialisierung statt explizitem Typ
    const heroRef = React.useRef<HTMLDivElement>(null);

    // Optimierter Scroll-Handler mit Throttling
    const handleScroll = useCallback(() => {
        if (!heroRef.current) return;
        
        // Verwende requestAnimationFrame für Performance
        requestAnimationFrame(() => {
            if (heroRef.current) {
                const scrollPos = window.scrollY;
                heroRef.current.style.transform = `translateY(${scrollPos * 0.3}px)`; // Reduzierter Faktor für bessere Performance
            }
        });
    }, []);

    useEffect(() => {
        // Throttle scroll events
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [handleScroll]);

    return (
        <div className="projects-hero-section">
            <ParticleBackground />
            <div className="hero-content" ref={heroRef}>
                <h1 className="animated-title">Meine Projekte</h1>
                <p className="animated-subtitle">Eine Auswahl meiner Arbeit - von Webapplikationen bis Mobile Apps</p>
            </div>
            <div className="hero-background">
                <div className="gradient-overlay"></div>
                <div className="grid-overlay"></div>
            </div>
        </div>
    );
};

export default memo(ProjectHero);