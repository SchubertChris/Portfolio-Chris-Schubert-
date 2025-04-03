// src/components/about/InterestsSection.tsx
import React from 'react';

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
            <h3>Open Source</h3>
            <p>Ich trage regelmäßig zu Open-Source-Projekten bei und teile mein Wissen mit der Community.</p>
          </div>

          <div className="interest-card" data-reveal="up" data-reveal-delay="400">
            <div className="interest-icon">
              <img src="/icon-learning.svg" alt="Learning Icon" />
            </div>
            <h3>Kontinuierliches Lernen</h3>
            <p>Ich bleibe stets auf dem neuesten Stand der Technologien und lerne täglich Neues dazu.</p>
          </div>

          <div className="interest-card" data-reveal="up" data-reveal-delay="600">
            <div className="interest-icon">
              <img src="/icon-design.svg" alt="Design Icon" />
            </div>
            <h3>UI/UX Design</h3>
            <p>Die Schnittstelle zwischen Design und Entwicklung fasziniert mich besonders.</p>
          </div>

          <div className="interest-card" data-reveal="up" data-reveal-delay="800">
            <div className="interest-icon">
              <img src="/icon-hiking.svg" alt="Hiking Icon" />
            </div>
            <h3>Wandern & Natur</h3>
            <p>Abseits des Computers finde ich Inspiration und Erholung in der Natur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;
