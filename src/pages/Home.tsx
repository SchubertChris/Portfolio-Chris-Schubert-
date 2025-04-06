// src/pages/Home.tsx
import React, { useEffect, useState, useCallback } from 'react';
import Seo from '../components/shared/Seo.tsx';
import HeroSection from '../components/home/HeroSection.tsx';
import AboutSection from '../components/home/AboutSection.tsx';
import ProjectsSection from '../components/home/ProjectsSection.tsx';
import SkillsSection from '../components/home/SkillsSection.tsx';
import ContactCTA from '../components/shared/ContactCTA';
import ScrollToTop from '../components/ui/ScrollToTop.tsx';
import { setupScrollReveal, setupSectionObserver } from '../components/Utils/scrollUtils.tsx';
import '../styles/pages/Home.scss';

// Definiere einen Typ für die Sichtbarkeitszustände
type VisibilityState = {
  about: boolean;
  projects: boolean;
  skills: boolean;
};

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({
    about: false,
    projects: false,
    skills: false
  });

  // Callback für den Sektions-Observer
  const handleSectionVisible = useCallback((id: string, visible: boolean) => {
    if (visible) {
      setIsVisible(prev => {
        // Nur aktualisieren, wenn sich der Wert ändert
        if (prev[id as keyof VisibilityState] === false) {
          return { ...prev, [id]: true };
        }
        return prev;
      });
    }
  }, []);

  // IntersectionObserver für Sektionen einrichten
  useEffect(() => {
    const cleanup = setupSectionObserver(handleSectionVisible);
    return cleanup;
  }, [handleSectionVisible]);

  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="home-page">
      <Seo
        title="Chris Schubert – Webdesign & React Entwicklung in Potsdam"
        description="Willkommen auf dem Portfolio von Chris Schubert. Webdesign, UI Design und React Entwicklung aus Potsdam."
        keywords="Chris Schubert, Webdesign, React, UI Design, Frontend, Potsdam, Portfolio"
        image="https://deine-domain.de/assets/home-og-image.jpg"
        url="https://deine-domain.de"
      />
      <HeroSection />
      <AboutSection isVisible={isVisible.about} />
      <ProjectsSection isVisible={isVisible.projects} />
      <SkillsSection isVisible={isVisible.skills} />
      <ContactCTA />
      <ScrollToTop />
    </div>
  );
};

export default Home;