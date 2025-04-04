// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection.tsx';
import AboutSection from '../components/home/AboutSection.tsx';
import ProjectsSection from '../components/home/ProjectsSection.tsx';
import SkillsSection from '../components/home/SkillsSection.tsx';
import ContactCTA from '../components/home/ContactCTA.tsx';
import ScrollToTop from '../components/ui/ScrollToTop.tsx';
import { setupScrollReveal } from '../components/Utils/scrollUtils.tsx';
import '../styles/pages/Home.scss'; // Importiere die CSS-Datei für die Home-Seite

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    about: false,
    projects: false,
    skills: false
  });

  // Überprüfen, ob Elemente im Viewport sind
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-animate');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;

        if (isInViewport) {
          const id = section.id;
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="home-page">
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