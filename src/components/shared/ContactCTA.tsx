// src/components/shared/ContactCTA.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/shared/ContactCTA.scss'; // Importiere die CSS-Datei für das Styling

const ContactCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-cta" data-reveal="up">
      <div className="cta-content">
        <h2>Bereit für eine Zusammenarbeit?</h2>
        <p>Lassen Sie uns gemeinsam Ihr nächstes Projekt zum Leben erwecken!</p>
        <button
          className="cta-button"
          onClick={() => navigate('/contact')}
        >
          Kontaktiere mich
        </button>
      </div>
      <div className="cta-background">
        <div className="gradient-overlay"></div>
      </div>
    </div>
  );
};

export default ContactCTA;
// CTA (Call to Action) für die Kontaktseite