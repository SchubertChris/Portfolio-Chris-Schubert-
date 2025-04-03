// src/pages/Contact.tsx
import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import ContactForm from '../components/contact/ContactForm';
import ScrollToTop from '../components/ui/ScrollToTop';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import './Contact.scss';

const Contact: React.FC = () => {
  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="contact-page">
      <ContactHero />
      <ContactInfoSection />
      <ContactForm />
      <ScrollToTop />
    </div>
  );
};

export default Contact;