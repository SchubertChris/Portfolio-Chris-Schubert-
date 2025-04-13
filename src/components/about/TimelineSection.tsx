// src/components/about/TimelineSection.tsx
import React from 'react';
import { FaCode, FaGraduationCap, FaCar, FaUtensils, FaLaptopCode } from 'react-icons/fa';
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
            year="07/2012 - 08/2015"
            title="Ausbildung zum Hotelfachmann"
            description="Romantik Hotel am Jägertor 4* in Potsdam. Grundlagen der Serviceorientierung und Kundenbetreuung."
            icon={<FaGraduationCap />}
            isLeft={true}
          />

          <TimelineItem
            year="12/2015 - 12/2018"
            title="Stationskellner"
            description="Käfer im deutschen Bundestag in Berlin. Koordination und Leitung externer Teams, professionelle Betreuung hochrangiger Persönlichkeiten."
            icon={<FaUtensils />}
            isLeft={false}
          />

          <TimelineItem
            year="12/2018 - 03/2021"
            title="Stationskellner"
            description="Brasserie zu Gutenberg in Potsdam. Verantwortung für Serviceabläufe, Anleitung des Servicepersonals und Optimierung der Arbeitsabläufe."
            icon={<FaUtensils />}
            isLeft={true}
          />

          <TimelineItem
            year="04/2021 - 06/2023"
            title="Vorstandsfahrer / Allrounder"
            description="BBU - Verband Berlin Brandenburgischer Wohnungsunternehmen in Berlin. Organisation der Logistik, Koordination komplexer Terminabläufe und eigenverantwortliches Handeln."
            icon={<FaCar />}
            isLeft={false}
          />

          <TimelineItem
            year="07/2023 - 05/2024"
            title="Berufliche Neuorientierung"
            description="Weiterbildung im IT-Bereich und Vorbereitung auf den Einstieg in die Softwareentwicklung. Selbststudium moderner Webtechnologien und Programmiersprachen."
            icon={<FaLaptopCode />}
            isLeft={true}
          />

          <TimelineItem
            year="06/2024 - Gegenwart"
            title="Webdevelopment / Software Engineering"
            description="Digital Carrer Institute GmbH, Berlin. Schwerpunkte in Projektmanagement, Prozessoptimierung und modernen Webtechnologien."
            icon={<FaCode />}
            isLeft={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;