// src/pages/About.tsx
import React, { useEffect, useState } from 'react';
import Seo from '../components/shared/Seo';  // SEO-Komponente importieren
import AboutHero from '../components/about/AboutHero';
import AboutDetails from '../components/about/AboutDetails';
import TimelineSection from '../components/about/TimelineSection';
import SkillsSection from '../components/about/SkillsSection';
import InterestsSection from '../components/about/InterestsSection';
import ContactCTA from '../components/shared/ContactCTA';
import ScrollToTop from '../components/ui/ScrollToTop';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import '../styles/pages/About.scss'; // Importiere die CSS-Datei für die About-Seite

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    about: false,
    timeline: false,
    skills: false,
    interests: false
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
    handleScroll(); // Initiales Auslösen
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

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
      <AboutDetails isVisible={isVisible.about} />
      <TimelineSection isVisible={isVisible.timeline} />
      <SkillsSection isVisible={isVisible.skills} />
      <InterestsSection isVisible={isVisible.interests} />
      <ContactCTA />
      <ScrollToTop />
    </div>
  );
};

export default About;
