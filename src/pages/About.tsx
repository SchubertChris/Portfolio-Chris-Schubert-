// src/pages/About.tsx
import React from 'react';
import Seo from '../components/shared/Seo';  // SEO-Komponente importieren
import AboutHero from '../components/about/AboutHero';
import AboutDetails from '../components/about/AboutDetails';
import TimelineSection from '../components/about/TimelineSection';
import SkillsSection from '../components/about/SkillsSection';
import InterestsSection from '../components/about/InterestsSection';
import ContactCTA from '../components/shared/ContactCTA';
import ScrollToTop from '../components/ui/ScrollToTop';
import '../styles/pages/About.scss'; // Importiere die CSS-Datei für die About-Seite

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* SEO-Komponente für die About-Seite */}
      <Seo
        title="Über mich – Chris Schubert Webdesign & React Entwicklung"
        description="Erfahren Sie mehr über Chris Schubert, einen Webdesigner und React Entwickler aus Potsdam mit einer Leidenschaft für UI Design und Frontend-Entwicklung."
        keywords="Über mich, Chris Schubert, Webdesign, React, UI Design, Frontend, Potsdam, Entwickler"
        image="https://deine-domain.de/assets/about-og-image.jpg"  // Beispielbild für OG-Image
        url="https://deine-domain.de/about"
      />

      <AboutHero />
      <AboutDetails isVisible={true} />
      <TimelineSection isVisible={true} />
      <SkillsSection isVisible={true} />
      <InterestsSection isVisible={true} />
      <ContactCTA />
      <ScrollToTop />
    </div>
  );
};

export default About;
