// src/utils/ThemeManager.ts

/**
 * ThemeManager - Service zur Verwaltung des Themes (Dark/Light Mode)
 */

// Typdefinitionen
type ThemeMode = 'dark' | 'light';

// Theme-Konstanten
const LOCAL_STORAGE_KEY = 'theme';
const DATA_THEME_ATTRIBUTE = 'data-theme';

// Theme Manager Service
export const ThemeManager = {
  /**
   * Aktualisiert das Theme der Anwendung
   * @param mode - Das gewünschte Theme ('dark' oder 'light')
   */
  setTheme(mode: ThemeMode): void {
    // Theme im localStorage speichern
    localStorage.setItem(LOCAL_STORAGE_KEY, mode);
    
    // HTML-Element mit Theme-Attribut aktualisieren
    document.documentElement.setAttribute(DATA_THEME_ATTRIBUTE, mode);
    
    // Zusätzliche CSS-Variablen-Anpassungen können hier vorgenommen werden
  },
  
  /**
   * Aktuelles Theme aus dem localStorage abrufen
   * @returns Das aktuelle Theme oder 'dark' als Fallback
   */
  getCurrentTheme(): ThemeMode {
    return (localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeMode) || 'dark';
  },
  
  /**
   * Theme wechseln zwischen Dark und Light Mode
   */
  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    const newTheme: ThemeMode = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  },
  
  /**
   * System-Präferenz für Dark Mode abrufen
   * @returns true, wenn das System Dark Mode bevorzugt
   */
  prefersDarkMode(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  },
  
  /**
   * Initialisiert das Theme basierend auf localStorage oder System-Präferenz
   */
  initialize(): void {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeMode | null;
    
    if (savedTheme) {
      // Gespeichertes Theme verwenden
      this.setTheme(savedTheme);
    } else {
      // Wenn kein Theme gespeichert ist, System-Präferenz nutzen
      const preferredTheme: ThemeMode = this.prefersDarkMode() ? 'dark' : 'light';
      this.setTheme(preferredTheme);
    }
    
    // Event-Listener für Änderungen der System-Präferenz
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Nur, wenn keine benutzerdefinierte Einstellung existiert
        if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
};

export default ThemeManager;