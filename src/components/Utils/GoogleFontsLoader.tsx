import React, { useEffect } from 'react';

const GoogleFontsLoader: React.FC = () => {
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (cookieConsent === 'accepted') {
      // Google Fonts laden wenn Nutzer zugestimmt hat
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Montserrat:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    } else {
      // System-Schriftarten als Fallback
      document.documentElement.style.setProperty('--font-family-primary', 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif');
      document.documentElement.style.setProperty('--font-family-secondary', 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif');
    }
  }, []);

  return null;
};

export default GoogleFontsLoader;