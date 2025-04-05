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
                <img src="/Profilbild.webp" alt="Profilbild" />
              </div>
              <div className="neon-border"></div>
            </div>
          </div>
          <div className="about-text" data-reveal="right">
            <p>Herzlich willkommen auf meiner Portfolio-Seite! Ich bin ein <span className="highlight">Frontend-Entwickler</span> mit über 5 Jahren Erfahrung in der Webentwicklung.</p>

            <p>Meine Reise in der Programmierung begann während meines Informatikstudiums, als ich entdeckte, wie faszinierend es ist, Benutzeroberflächen zu gestalten, die nicht nur funktional, sondern auch ästhetisch ansprechend sind.</p>

            <p>Heute spezialisiere ich mich auf die Entwicklung von <span className="highlight">modernen Webapplikationen</span> mit Fokus auf Performance, Benutzerfreundlichkeit und elegantes Design. Ich arbeite hauptsächlich mit dem <span className="highlight">React</span>-Ökosystem und setze auf <span className="highlight">TypeScript</span> für typsichere und wartbare Codebases.</p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">
                  <CountUpAnimation end={5} suffix="+" />
                </div>
                <div className="stat-label">Jahre Erfahrung</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUpAnimation end={50} suffix="+" delay={300} />
                </div>
                <div className="stat-label">Projekte</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUpAnimation end={20} suffix="+" delay={600} />
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