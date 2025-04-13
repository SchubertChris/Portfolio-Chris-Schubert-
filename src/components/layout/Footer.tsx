import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp, FaMapMarkerAlt } from 'react-icons/fa';
import '../../styles/layout/Footer.scss';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Chris Schubert</h3>
          <p>Frontend-Entwickler mit Leidenschaft für moderne Webtechnologien und benutzerfreundliche Interfaces.</p>
        </div>
        
        <div className="footer-section">
          <h3>Schnellzugriff</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projekte</Link></li>
            <li><Link to="/about">Über mich</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Kontakt</h3>
            <p>
            <a href="mailto:schubert_chris@rocketmail.com" className="MailTo">
              <FaEnvelope className="footer-icon" /> schubert_chris@rocketmail.com
            </a>
            </p>
            <p>
            <a href="https://www.google.com/maps?q=Potsdam,+Deutschland" target="_blank" rel="noopener noreferrer" className="location-link">
              <FaMapMarkerAlt className="footer-icon" /> Potsdam, Deutschland
            </a>
            </p>
        </div>
        
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="https://github.com/SchubertChris" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/chris-schubert-4bb5b0353/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.instagram.com/candlescope" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; Chris Schubert</p>
        <button className="scroll-top-button" onClick={scrollToTop} aria-label="Zum Seitenanfang scrollen">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

// Memo verhindert unnötige Re-Renders, da der Footer statisch ist
export default memo(Footer);