// src/pages/Contact.tsx
import React, { useEffect } from 'react';
import Seo from '../components/shared/Seo';  // SEO-Komponente importieren
import ContactHero from '../components/contact/ContactHero';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import ContactForm from '../components/contact/ContactForm';
import ScrollToTop from '../components/ui/ScrollToTop';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import '../styles/pages/Contact.scss'; // Importiere die CSS-Datei für die Kontaktseite

const Contact: React.FC = () => {
  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="contact-page">
      {/* SEO-Komponente für die Contact-Seite */}
      <Seo 
        title="Kontakt – CS-Designcode"
        description="Kontaktieren Sie Chris Schubert für Webdesign, UI/UX Design und React Entwicklung aus Potsdam. Wir bieten maßgeschneiderte Lösungen für Ihr Projekt."
        keywords="Kontakt, Webdesign, React, UI Design, Potsdam, Webentwicklung, Frontend Entwicklung"
        image="https://deine-domain.de/assets/contact-og-image.jpg"  // Beispielbild für OG-Image
        url="https://deine-domain.de/contact"
      />
      
      <ContactHero />
      <ContactInfoSection />
      <ContactForm />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
