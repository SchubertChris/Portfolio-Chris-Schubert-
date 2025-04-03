// src/components/home/AboutSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TechSymbols from './TechSymbols';

interface AboutSectionProps {
    isVisible: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isVisible }) => {
    const navigate = useNavigate();

    return (
        <div id="about" className={`about-section section-animate ${isVisible ? 'visible' : ''}`}>
            <TechSymbols />
            <div className="section-container">
                <h2 className="section-title">Über Mich</h2>
                <div className="about-content">
                    <div className="about-image" data-reveal="left" data-reveal-delay="200">
                        <div className="image-frame">
                            <div className="image-placeholder">
                                <img src="/placeholder-profile.jpg" alt="Profilbild" />
                            </div>
                            <div className="neon-border"></div>
                        </div>
                    </div>
                    <div className="about-text" data-reveal="right" data-reveal-delay="400">
                        <p>Als leidenschaftlicher Web-Entwickler verbinde ich kreatives Design mit technischer Präzision.
                            Ich habe Erfahrung in der Entwicklung moderner, reaktionsfähiger und benutzerfreundlicher Webanwendungen.</p>

                        <p>Mein Technologie-Stack umfasst <span className="highlight">React</span>, <span className="highlight">TypeScript</span>,
                            <span className="highlight"> SCSS</span> und verschiedene moderne Frontend-Frameworks.</p>

                        <button
                            className="glow-button"
                            onClick={() => navigate('/about')}
                        >
                            Mehr über mich
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;