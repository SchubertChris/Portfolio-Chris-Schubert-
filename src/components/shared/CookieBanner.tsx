// src/components/shared/CookieBanner.tsx
import React, { useState, useEffect } from 'react';
import '../../styles/shared/CookieBanner.scss';

// Konstante für den Entwicklungsmodus - umschalten für Tests
const DEV_MODE = false; // Auf false setzen, wenn das Feature live geht

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [testMode, setTestMode] = useState(DEV_MODE);

  useEffect(() => {
    // Im Testmodus immer anzeigen, sonst nur wenn keine Entscheidung getroffen wurde
    if (testMode) {
      setVisible(true);
    } else {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (cookieConsent === null) {
        setVisible(true);
      }
    }
  }, [testMode]);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    if (!testMode) {
      setVisible(false);
      window.location.reload(); // Google Fonts laden 
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    if (!testMode) {
      setVisible(false);
    }
  };

  const toggleTestMode = () => {
    setTestMode(!testMode);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      {testMode && (
        <div className="test-mode-indicator">
          <span>Test-Modus</span>
          <button onClick={toggleTestMode}>Deaktivieren</button>
        </div>
      )}
      <div className="cookie-content">
        <p>
          Diese Website verwendet Cookies und Google Fonts, um Ihnen die bestmögliche Erfahrung zu bieten. 
          <a href="/rechtliches?tab=cookies"> Weitere Informationen</a>
        </p>
        <div className="cookie-buttons">
          <button onClick={acceptCookies} className="accept-button">
            Akzeptieren
          </button>
          <button onClick={declineCookies} className="decline-button">
            Ablehnen
          </button>
          {!testMode && DEV_MODE && (
            <button 
              onClick={toggleTestMode} 
              className="test-button"
              style={{ 
                marginLeft: '10px', 
                background: '#333', 
                border: '1px dashed #666',
                fontSize: '0.7rem'
              }}
            >
              Test-Modus
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;