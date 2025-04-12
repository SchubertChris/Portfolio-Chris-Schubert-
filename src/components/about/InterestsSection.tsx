// src/components/about/InterestsSection.tsx
import React from 'react';
import './InterestsSection.scss'; // Importiere die CSS-Datei für das Styling 

interface InterestsSectionProps {
  isVisible: boolean;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ isVisible }) => {
  return (
    <div id="interests" className={`interests-section section-animate ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <div className="title-wrapper">
          <h2 className="section-title" data-reveal="up">Meine Interessen</h2>
        </div>

        <div className="interests-container">
          <div className="interest-card" data-reveal="up" data-reveal-delay="200">
            <div className="interest-icon">
              <img src="/icon-coding.svg" alt="Coding Icon" />
            </div>
            <h3>Programmieren & Technologie</h3>
            <p>Ich bin leidenschaftlich daran interessiert, moderne Technologien zu verstehen und innovative Lösungen zu entwickeln.</p>
          </div>

          <div className="interest-card" data-reveal="up" data-reveal-delay="400">
            <div className="interest-icon">
              <img src="/icon-finance.svg" alt="Finance Icon" />
            </div>
            <h3>Krypto & Blockchain</h3>
            <p>Dezentrale Finanzsysteme und Blockchain-Technologien sind für mich ein spannendes und zukunftsweisendes Feld.</p>
          </div>

          <div className="interest-card" data-reveal="up" data-reveal-delay="800">
            <div className="interest-icon">
              <img src="/icon-cooking.svg" alt="Cooking Icon" />
            </div>
            <h3>Kochen & Kulinarik</h3>
            <p>Abseits der Technik finde ich beim Kochen und in der Kulinarik kreative Entspannung und Freude.</p>
          </div>

          <div className="interest-card" data-reveal="up" data-reveal-delay="1000">
            <div className="interest-icon">
              <img src="/icon-selfgrowth.svg" alt="Self Growth Icon" />
            </div>
            <h3>Persönliche Weiterentwicklung</h3>
            <p>Ich setze mich ständig mit meiner eigenen Weiterentwicklung auseinander, sei es durch Lesen, Lernen oder Reflexion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;
