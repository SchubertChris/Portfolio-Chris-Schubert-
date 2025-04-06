// src/components/Utils/scrollUtils.ts

/**
 * Sanftes Scrollen zu einem Element mit einer bestimmten ID
 * @param elementId - Die ID des Ziel-Elements
 * @param offset - Optional: Ein Offset vom oberen Rand (z.B. für fixierte Header)
 */
export const scrollToElement = (elementId: string, offset: number = 80): void => {
    const element = document.getElementById(elementId);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};

/**
 * IntersectionObserver-basierte Scroll Reveal Lösung
 * Reduziert CPU-Last und vermeidet Scroll-Jank
 */
export const setupScrollReveal = (): (() => void) => {
    // Sammle alle Elemente mit data-reveal Attribut
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    // Keine Elemente gefunden, leere Cleanup-Funktion zurückgeben
    if (revealElements.length === 0) {
        return () => {};
    }
    
    // IntersectionObserver konfigurieren
    const observerOptions = {
        root: null, // Viewport als Referenz
        rootMargin: '0px 0px -20% 0px', // Trigger etwas früher (20% vom unteren Rand)
        threshold: 0.1 // 10% des Elements muss sichtbar sein
    };
    
    // Observer erstellen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Verzögerung basierend auf data-reveal-delay Attribut (in ms)
                const delay = element.getAttribute('data-reveal-delay') || '0';
                
                // Animation mit Verzögerung anwenden
                setTimeout(() => {
                    element.classList.add('revealed');
                }, parseInt(delay));
                
                // Element nicht weiter beobachten
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Alle gefundenen Elemente beobachten
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    // Cleanup-Funktion zurückgeben
    return () => {
        if (observer) {
            revealElements.forEach(element => {
                observer.unobserve(element);
            });
            observer.disconnect();
        }
    };
};

// Hook für Sektions-Animationen mit IntersectionObserver
export const setupSectionObserver = (
    callback: (id: string, isVisible: boolean) => void,
    options = { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
): (() => void) => {
    // Sammle alle Elemente mit .section-animate Klasse
    const sections = document.querySelectorAll('.section-animate');
    
    if (sections.length === 0) {
        return () => {};
    }
    
    // Observer erstellen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            const id = element.id;
            
            if (id && entry.isIntersecting) {
                callback(id, true);
                
                // Optional: Element nicht mehr beobachten
                // observer.unobserve(element);
            }
        });
    }, options);
    
    // Alle Sektionen beobachten
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Cleanup-Funktion zurückgeben
    return () => {
        if (observer) {
            sections.forEach(section => {
                observer.unobserve(section);
            });
            observer.disconnect();
        }
    };
};

// Exportiere die alten Funktionen für Abwärtskompatibilität
export const isElementInViewport = (element: Element, threshold: number = 0.2): boolean => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight * (1 - threshold);
};

export const scrollToElementNew = scrollToElement;
export const isElementInViewportNew = isElementInViewport;