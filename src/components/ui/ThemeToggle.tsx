// src/components/ui/ThemeToggle.tsx
import React, { useEffect, useState } from 'react';
import { ThemeManager } from '../Utils/ThemeManager';
import './ThemeToggle.scss';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  // Zustand für Dark Mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    ThemeManager.getCurrentTheme() === 'dark'
  );

  // Theme beim ersten Laden initialisieren
  useEffect(() => {
    ThemeManager.initialize();
    setIsDarkMode(ThemeManager.getCurrentTheme() === 'dark');
  }, []);

  // Theme umschalten
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    ThemeManager.setTheme(newIsDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`toggle-switch ${className}`} aria-label="Theme umschalten">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          aria-label={isDarkMode ? 'Zu Light Mode wechseln' : 'Zu Dark Mode wechseln'}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;