import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from 'react-icons/fa';
import ParticleBackground from '../ui/ParticleBackground';
import './HeroSection.scss';

const HeroSection: React.FC = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLDivElement>(null);

    // Memoize the scroll handler to prevent unnecessary re-creations
    const handleScroll = useCallback(() => {
        if (heroRef.current) {
            const scrollPos = window.scrollY;
            heroRef.current.style.transform = `translateY(${scrollPos * 0.4}px)`;
        }
    }, []);

    // Use useEffect for scroll event with proper cleanup
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Optimize typewriter effect
    const fullText = useMemo(() => "I ch entwickle moderne Webapplikationen.", []);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        const typingSpeed = 150;
        
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(prevText => prevText + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, [fullText]);

    // Memoize social links to prevent unnecessary re-renders
    const socialLinks = useMemo(() => [
        { 
            icon: FaGithub, 
            href: "https://github.com/SchubertChris", 
            label: "GitHub" 
        },
        { 
            icon: FaLinkedin, 
            href: "https://www.linkedin.com/in/chris-schubert-4bb5b0353/", 
            label: "LinkedIn" 
        },
        { 
            icon: FaInstagram, 
            href: "https://www.instagram.com/candlescope", 
            label: "Instagram" 
        }
    ], []);

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
                        aria-label="Meine Projekte"
                    >
                        Meine Projekte
                    </button>
                    <button
                        className="secondary-button"
                        onClick={() => navigate('/contact')}
                        aria-label="Kontakt"
                    >
                        Kontakt
                    </button>
                </div>
                <div className="social-links">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a 
                            key={href}
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon"
                            aria-label={label}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
                <div className="scroll-indicator" aria-hidden="true">
                    <FaArrowDown className="bounce" />
                </div>
            </div>
            <div className="hero-background">
                <div className="gradient-overlay"></div>
                <div className="grid-overlay"></div>
            </div>
        </div>
    );
};

export default React.memo(HeroSection);
// Hinweis: Der Instagram-Link wurde hinzugefügt, um auf die Trading-Seite hinzuweisen.