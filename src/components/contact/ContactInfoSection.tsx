import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './ContactInfoSection.scss'; // Importiere die CSS-Datei für das Styling

const ContactInfoSection: React.FC = () => {
  // Hilfsfunktion zum Handhaben der Klicks auf die Kontaktkarten
  const handleCardClick = (url: string, newTab: boolean = false) => {
    if (newTab) {
      window.open(url, '_blank', 'noopener noreferrer');
    } else {
      window.location.href = url;
    }
  };

  return (
    <div className="contact-info-section">
      <div className="section-container">
        <div className="contact-cards">
          <div 
            className="contact-card" 
            data-reveal="up" 
            onClick={() => handleCardClick('mailto:schubert_chris@rocketmail.com')}
          >
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>E-Mail</h3>
            <p>schubert_chris@rocketmail.com</p>
          </div>
          
          <div 
            className="contact-card" 
            data-reveal="up" 
            data-reveal-delay="200"
            onClick={() => handleCardClick('tel:+4916094168348')}
          >
            <div className="icon">
              <FaPhone />
            </div>
            <h3>Telefon</h3>
            <p>+49 (0) 160 9416 8348</p>
          </div>
          
          <div 
            className="contact-card" 
            data-reveal="up" 
            data-reveal-delay="400"
            onClick={() => handleCardClick('https://www.google.com/maps?q=Potsdam,+Deutschland', true)}
          >
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Standort</h3>
            <p>Potsdam, Deutschland</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;