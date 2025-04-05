// src/components/contact/ContactInfoSection.tsx
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './ContactInfoSection.scss'; // Importiere die CSS-Datei für das Styling

const ContactInfoSection: React.FC = () => {
  return (
    <div className="contact-info-section">
      <div className="section-container">
        <div className="contact-cards">
          <div className="contact-card" data-reveal="up">
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>E-Mail</h3>
            <p>
              <a href="mailto:schubert_chris@rocketmail.com">
                schubert_chris@rocketmail.com
              </a>
            </p>
          </div>

          <div className="contact-card" data-reveal="up" data-reveal-delay="200">
            <div className="icon">
              <FaPhone />
            </div>
            <h3>Telefon</h3>
            <p>
              <a href="tel:+49XXXXXXXXXX">
                +49 (0) XX XXXXX XXX
              </a>
            </p>
          </div>

          <div className="contact-card" data-reveal="up" data-reveal-delay="400">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Standort</h3>
            <p>Berlin, Deutschland</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;