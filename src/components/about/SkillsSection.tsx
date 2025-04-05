// src/components/about/SkillsSection.tsx
import React from 'react';
import SkillBarComponent from '../ui/SkillBar';
import './SkillsSection.scss'; // Importiere die CSS-Datei für das Styling

interface SkillsSectionProps {
  isVisible: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
  return (
    <div id="skills" className={`about-skills-section section-animate ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <div className="title-wrapper">
          <h2 className="section-title" data-reveal="up">Meine Fähigkeiten</h2>
        </div>

        <div className="skills-container">
          <div className="skills-group">
            <h3 data-reveal="left">Frontend Development</h3>
            <div className="skills-list">
              <SkillBarComponent name="React" level={90} color="primary" delay={0} />
              <SkillBarComponent name="TypeScript" level={85} color="primary" delay={200} />
              <SkillBarComponent name="HTML5 & CSS3" level={95} color="primary" delay={400} />
              <SkillBarComponent name="SCSS/SASS" level={90} color="primary" delay={600} />
            </div>
          </div>

          <div className="skills-group">
            <h3 data-reveal="right">Backend & Tools</h3>
            <div className="skills-list">
              <SkillBarComponent name="Node.js" level={75} color="blue" delay={200} />
              <SkillBarComponent name="Git & GitHub" level={85} color="blue" delay={400} />
              <SkillBarComponent name="Webpack/Vite" level={80} color="blue" delay={600} />
              <SkillBarComponent name="RESTful APIs" level={85} color="blue" delay={800} />
            </div>
          </div>

          <div className="skills-group">
            <h3 data-reveal="left">Design & Sonstiges</h3>
            <div className="skills-list">
              <SkillBarComponent name="UI/UX Design" level={80} color="yellow" delay={400} />
              <SkillBarComponent name="Responsive Design" level={95} color="yellow" delay={600} />
              <SkillBarComponent name="Figma/Sketch" level={75} color="yellow" delay={800} />
              <SkillBarComponent name="Performance Optimization" level={85} color="yellow" delay={1000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
