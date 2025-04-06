import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark', // Default to dark mode
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check local storage first, default to dark if not set
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    return savedTheme || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('app-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    // Update CSS variables based on theme
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--background-primary', '#ffffff');
      root.style.setProperty('--text-primary', '#121212');
    } else {
      root.style.setProperty('--background-primary', 'var(--background-dark)');
      root.style.setProperty('--text-primary', 'var(--text-light)');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);