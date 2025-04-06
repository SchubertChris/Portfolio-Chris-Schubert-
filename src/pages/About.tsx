// src/pages/About.tsx
import React, { useEffect, useState, useCallback, memo } from 'react';
import Seo from '../components/shared/Seo';
import AboutHero from '../components/about/AboutHero';
import AboutDetails from '../components/about/AboutDetails';
import TimelineSection from '../components/about/TimelineSection';
import SkillsSection from '../components/about/SkillsSection';
import InterestsSection from '../components/about/InterestsSection';
import ContactCTA from '../components/shared/ContactCTA';
import ScrollToTop from '../components/ui/ScrollToTop';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import '../styles/pages/About.scss';

// Definiere einen Typ für die Sichtbarkeitszustände
type VisibilityState = {
  about: boolean;
  timeline: boolean;
  skills: boolean;
  interests: boolean;
};

// Memoized Komponenten für bessere Performance
const MemoizedAboutHero = memo(AboutHero);
const MemoizedContactCTA = memo(ContactCTA);
const MemoizedScrollToTop = memo(ScrollToTop);

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({
    about: false,
    timeline: false,
    skills: false,
    interests: false
  });

  // Memoize handleScroll mit useCallback
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isInViewport = rect.top <= window.innerHeight * 0.8;
      if (isInViewport) {
        const id = section.id;
        setIsVisible(prev => {
          // Nur aktualisieren, wenn sich der Wert ändert
          if (prev[id as keyof VisibilityState] === false) {
            return { ...prev, [id]: true };
          }
          return prev;
        });
      }
    });
  }, []);

  // Scroll-Event-Listener mit passivem Event für bessere Performance
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initiales Auslösen
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  // SEO-Konstanten - bessere Wartbarkeit und verhindert unnötige Re-Renderings
  const seoData = {
    title: "Über mich – Chris Schubert Webdesign & React Entwicklung",
    description: "Erfahren Sie mehr über Chris Schubert, einen Webdesigner und React Entwickler aus Potsdam mit einer Leidenschaft für UI Design und Frontend-Entwicklung.",
    keywords: "Über mich, Chris Schubert, Webdesign, React, UI Design, Frontend, Potsdam, Entwickler",
    image: "https://deine-domain.de/assets/about-og-image.jpg",
    url: "https://deine-domain.de/about"
  };

  return (
    <div className="about-page">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        image={seoData.image}
        url={seoData.url}
      />
      
      <MemoizedAboutHero />
      <AboutDetails isVisible={isVisible.about} />
      <TimelineSection isVisible={isVisible.timeline} />
      <SkillsSection isVisible={isVisible.skills} />
      <InterestsSection isVisible={isVisible.interests} />
      <MemoizedContactCTA />
      <MemoizedScrollToTop />
    </div>
  );
};

export default About;