// src/utils/scrollUtils.ts

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
 * Überprüft, ob ein Element im Viewport sichtbar ist
 * @param element - Das zu überprüfende DOM-Element
 * @param threshold - Optional: Prozentwert, ab dem das Element als sichtbar gilt (0-1)
 */
export const isElementInViewport = (element: Element, threshold: number = 0.2): boolean => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Element gilt als sichtbar, wenn es einen bestimmten Prozentsatz im Viewport ist
    return rect.top <= windowHeight * (1 - threshold);
};

/**
 * Überwacht alle Elemente mit 'data-reveal' Attribut und fügt Klassen hinzu,
 * wenn sie in den Viewport scrollen
 */
export const setupScrollReveal = (): (() => void) => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    const onScroll = () => {
        revealElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('revealed')) {
                // Verzögerung basierend auf data-reveal-delay Attribut (in ms)
                const delay = element.getAttribute('data-reveal-delay') || '0';

                setTimeout(() => {
                    element.classList.add('revealed');
                }, parseInt(delay));
            }
        });
    };

    // Initial auslösen und Scroll-Event-Listener hinzufügen
    onScroll();
    window.addEventListener('scroll', onScroll);

    // Cleanup-Funktion zurückgeben
    return () => window.removeEventListener('scroll', onScroll);
};


// In scrollUtils.ts
export const scrollToElementNew = scrollToElement;
export const isElementInViewportNew = isElementInViewport;