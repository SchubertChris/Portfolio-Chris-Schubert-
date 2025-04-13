// src/components/about/AboutDetails.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CountUpAnimation from '../ui/CountUpAnimation';
import './AboutDetails.scss'; // Importiere die CSS-Datei für das Styling

interface AboutDetailsProps {
  isVisible: boolean;
}

const AboutDetails: React.FC<AboutDetailsProps> = ({ isVisible }) => {
  const navigate = useNavigate();

  return (
    <div id="about" className={`about-details-section section-animate ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <div className="title-wrapper">
          <h2 className="section-title">Wer ich bin</h2>
        </div>
        <div className="about-content">
          <div className="about-image" data-reveal="left">
            <div className="image-frame">
              <div className="image-placeholder">
                <img src="/Profilbild2.webp" alt="Profilbild" />
              </div>
              <div className="neon-border"></div>
            </div>
          </div>
          <div className="about-text" data-reveal="right">
            <p>Hey, schön, dass du hier bist! Schon als Kind haben mich Computer und Technik begeistert – heute lebe ich diese Leidenschaft als <span className="highlight">Frontend-Entwickler</span> aus.</p>
            <p>Meine Reise begann schon mit 12 Jahren, als ich mich intensiv mit Hard- und Software beschäftigte. Während meines Informatikstudiums entdeckte ich meine Leidenschaft für Benutzeroberflächen, die nicht nur funktional, sondern auch ästhetisch ansprechend sind.</p>
            <p>Heute spezialisiere ich mich auf die Entwicklung von <span className="highlight">modernen Webapplikationen</span> mit Fokus auf Performance, Benutzerfreundlichkeit und elegantes Design. Ich arbeite hauptsächlich mit dem <span className="highlight">React</span>-Ökosystem und setze auf <span className="highlight">TypeScript</span> für typsichere und wartbare Codebases.</p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">
                  <CountUpAnimation end={15} suffix="+" />
                </div>
                <div className="stat-label">Jahre Erfahrung</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUpAnimation end={5} suffix="+" delay={300} />
                </div>
                <div className="stat-label">Projekte</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUpAnimation end={2} suffix="+" delay={600} />
                </div>
                <div className="stat-label">Zufriedene Kunden</div>
              </div>
            </div>

            <button
              className="glow-button"
              onClick={() => navigate('/contact')}
            >
              Mit mir zusammenarbeiten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;