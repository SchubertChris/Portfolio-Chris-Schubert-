// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.scss';

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
          <p><FaEnvelope className="footer-icon" /> schubert_chris@rocketmail.com</p>
          <p>Berlin, Deutschland</p>
        </div>
        
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chris Schubert. Alle Rechte vorbehalten.</p>
        <button className="scroll-top-button" onClick={scrollToTop} aria-label="Zum Seitenanfang scrollen">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;