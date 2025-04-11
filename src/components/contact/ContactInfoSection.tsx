// src/components/contact/ContactInfoSection.tsx
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './ContactInfoSection.scss'; // Importiere die CSS-Datei für das Styling

const ContactInfoSection: React.FC = () => {
  return (
    <div className="contact-info-section">
      <div className="section-container">
        <div className="contact-cards">
          <div className="contact-card">
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

          <div className="contact-card">
            <div className="icon">
              <FaPhone />
            </div>
            <h3>Telefon</h3>
            <p>
              <a href="tel:+4916094168348">
                +49 (0) 160 9416 8348
              </a>
            </p>
          </div>

          <div className="contact-card">
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