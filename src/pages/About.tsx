// src/pages/About.tsx
import React, { useEffect, useState } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutDetails from '../components/about/AboutDetails';
import TimelineSection from '../components/about/TimelineSection';
import SkillsSection from '../components/about/SkillsSection';
import InterestsSection from '../components/about/InterestsSection';
import ContactCTA from '../components/shared/ContactCTA';
import ScrollToTop from '../components/ui/ScrollToTop';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import './About.scss';

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
      // Überprüfen, ob Elemente im Viewport sind
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
    // Initiales Auslösen, um Elemente zu erkennen, die bereits sichtbar sind
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="about-page">
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