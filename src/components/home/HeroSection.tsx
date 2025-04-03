// src/components/home/HeroSection.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import ParticleBackground from '../ui/ParticleBackground';

const HeroSection: React.FC = () => {
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

    // Typwriter Effekt
    const [displayText, setDisplayText] = useState("");
    const fullText = "Ich entwickle moderne Webapplikationen.";
    const typingSpeed = 100;

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(prevText => prevText + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="hero-section">
            <ParticleBackground />
            <div className="hero-content" ref={heroRef}>
                <h1 className="animated-title">Willkommen auf meiner Portfolio-Seite</h1>
                <div className="typewriter-container">
                    <p className="typewriter">{displayText}</p>
                </div>
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
                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaTwitter />
                    </a>
                </div>
                <div className="scroll-indicator">
                    <FaArrowDown className="bounce" />
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

export default HeroSection;