// src/components/ui/ScrollToTop.tsx
import React, { useEffect, useState, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.scss';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const prevScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        // Erstelle einen Sentinel-Element für die Erkennung der Scroll-Position
        const sentinel = document.createElement('div');
        sentinel.style.height = '1px';
        sentinel.style.width = '1px';
        sentinel.style.position = 'absolute';
        sentinel.style.top = '300px'; // Erscheint, wenn mehr als 300px gescrollt wurde
        sentinel.style.left = '0px';
        sentinel.style.visibility = 'hidden';
        document.body.appendChild(sentinel);

        // IntersectionObserver für die Erkennung der Scroll-Position
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setVisible(!entry.isIntersecting); // Button anzeigen, wenn Sentinel nicht sichtbar
            },
            { 
                threshold: 0,
                rootMargin: '0px 0px -100% 0px' // Nur im oberen Teil des Viewports beachten
            }
        );

        observer.observe(sentinel);

        // Fallback für Browser ohne IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            const handleScroll = () => {
                const currentScrollY = window.pageYOffset;
                
                if (!ticking.current) {
                    window.requestAnimationFrame(() => {
                        setVisible(currentScrollY > 300);
                        prevScrollY.current = currentScrollY;
                        ticking.current = false;
                    });
                    
                    ticking.current = true;
                }
            };
            
            (window as Window).addEventListener('scroll', handleScroll, { passive: true });
            return () => {
                window.removeEventListener('scroll', handleScroll);
                document.body.removeChild(sentinel);
            };
        }

        // Cleanup
        return () => {
            observer.disconnect();
            document.body.removeChild(sentinel);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`scroll-to-top ${visible ? 'visible' : ''}`}
            onClick={scrollToTop}
            role="button"
            aria-label="Nach oben scrollen"
            tabIndex={0}
        >
            <FaArrowUp />
        </div>
    );
};

export default ScrollToTop;