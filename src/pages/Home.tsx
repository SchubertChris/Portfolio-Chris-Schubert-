// src/pages/Home.tsx
import Seo from '../components/shared/Seo.tsx';
import React from 'react';
import ContactCTA from '../components/shared/ContactCTA';
import ScrollToTop from '../components/ui/ScrollToTop.tsx';
import HeroSection from '../components/home/HeroSection.tsx';
import AboutSection from '../components/home/AboutSection.tsx';
import SkillsSection from '../components/home/SkillsSection.tsx';
import ProjectsSection from '../components/home/ProjectsSection.tsx';
import '../styles/pages/Home.scss'; // Importiere die CSS-Datei für die Home-Seite

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* SEO-Komponente für die Home-Seite */}
      <Seo
        title="Chris Schubert – Webdesign & React Entwicklung in Potsdam"
        description="Willkommen auf dem Portfolio von Chris Schubert. Webdesign, UI Design und React Entwicklung aus Potsdam."
        keywords="Chris Schubert, Webdesign, React, UI Design, Frontend, Potsdam, Portfolio"
        image="https://deine-domain.de/assets/home-og-image.jpg"
        url="https://deine-domain.de"
      />

      <HeroSection />
      <AboutSection isVisible={true} />
      <ProjectsSection isVisible={true} />
      <SkillsSection isVisible={true} />
      <ContactCTA />
      <ScrollToTop />
    </div>
  );
};

export default Home;
