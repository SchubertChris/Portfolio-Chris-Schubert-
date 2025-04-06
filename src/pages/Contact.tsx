// src/pages/Contact.tsx
import React, { useEffect, memo } from 'react';
import Seo from '../components/shared/Seo';
import ContactHero from '../components/contact/ContactHero';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import ContactForm from '../components/contact/ContactForm';
import ScrollToTop from '../components/ui/ScrollToTop';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import '../styles/pages/Contact.scss';

// Memoized Komponenten für bessere Performance
const MemoizedContactHero = memo(ContactHero);
const MemoizedContactInfoSection = memo(ContactInfoSection);
const MemoizedScrollToTop = memo(ScrollToTop);

const Contact: React.FC = () => {
  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  // SEO-Konstanten - bessere Wartbarkeit und verhindert unnötige Re-Renderings
  const seoData = {
    title: "Kontakt – Chris Schubert Webdesign & React Entwicklung",
    description: "Kontaktieren Sie Chris Schubert für Webdesign, UI/UX Design und React Entwicklung aus Potsdam. Wir bieten maßgeschneiderte Lösungen für Ihr Projekt.",
    keywords: "Kontakt, Webdesign, React, UI Design, Potsdam, Webentwicklung, Frontend Entwicklung",
    image: "https://deine-domain.de/assets/contact-og-image.jpg",
    url: "https://deine-domain.de/contact"
  };

  return (
    <div className="contact-page">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        image={seoData.image}
        url={seoData.url}
      />
      
      <MemoizedContactHero />
      <MemoizedContactInfoSection />
      <ContactForm />
      <MemoizedScrollToTop />
    </div>
  );
};

export default Contact;