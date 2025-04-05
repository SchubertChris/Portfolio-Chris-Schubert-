// src/components/about/TimelineSection.tsx
import React from 'react';
import { FaCode, FaLaptopCode, FaGraduationCap, FaCoffee } from 'react-icons/fa';
import TimelineItem from './TimelineItem';
import './TimelineSection.scss'; // Importiere die CSS-Datei für das Styling

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
            year="2012-2015"
            title="Abschluss als Hotelfachmann"
            description="Weitere berufliche Erfahrungen in der Gastronomie und Hotellerie. Entwicklung von Kommunikations- und Teamfähigkeiten."
            icon={<FaGraduationCap />}
            isLeft={true}
          />

          <TimelineItem
            year="2015 -2018"
            title="Stationskellner"
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