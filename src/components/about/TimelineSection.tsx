// src/components/about/TimelineSection.tsx
import React from 'react';
import { FaCode, FaLaptopCode, FaGraduationCap, FaCoffee } from 'react-icons/fa';
import TimelineItem from './TimelineItem';

interface TimelineSectionProps {
  isVisible: boolean;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ isVisible }) => {
  return (
    <div id="timeline" className={`timeline-section section-animate ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <div className="title-wrapper">
          <h2 className="section-title" data-reveal="up">Mein Werdegang</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-line"></div>

          <TimelineItem
            year="2016"
            title="Bachelor-Abschluss in Informatik"
            description="Abschluss meines Studiums mit Schwerpunkt auf Softwareentwicklung und Webprogrammierung."
            icon={<FaGraduationCap />}
            isLeft={true}
          />

          <TimelineItem
            year="2017"
            title="Junior Web Developer"
            description="Einstieg in die Berufswelt als Junior Web Developer bei einer Digitalagentur. Erste Erfahrungen mit kommerziellen Projekten und Kundenbetreuung."
            icon={<FaCode />}
            isLeft={false}
          />

          <TimelineItem
            year="2019"
            title="Frontend-Spezialist"
            description="Weiterentwicklung zum Frontend-Spezialisten mit Fokus auf React und moderne JavaScript-Frameworks."
            icon={<FaLaptopCode />}
            isLeft={true}
          />

          <TimelineItem
            year="2021"
            title="Senior Frontend Developer"
            description="Aufstieg zum Senior Frontend Developer. Projektleitung und Verantwortung für das Frontend-Team."
            icon={<FaCode />}
            isLeft={false}
          />

          <TimelineItem
            year="2023"
            title="Freelancer & Entrepreneur"
            description="Start in die Selbstständigkeit. Beratung und Entwicklung für verschiedene Kunden und Branchen."
            icon={<FaCoffee />}
            isLeft={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;