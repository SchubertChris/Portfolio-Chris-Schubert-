// src/components/ui/CountUpAnimation.tsx
import React, { useState, useEffect, useRef } from 'react';
import './CountUpAnimation.scss'; // Importiere die CSS-Datei für das Styling


interface CountUpProps {
    end: number;
    duration?: number;
    delay?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

const CountUpAnimation: React.FC<CountUpProps> = ({
    end,
    duration = 2000,
    delay = 0,
    prefix = '',
    suffix = '',
    decimals = 0
}) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    // Warte die verzögerungszeit ab
                    setTimeout(() => {
                        animateCount();
                    }, delay);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [delay, hasAnimated]);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = 0;

        const step = () => {
            const currentTime = Date.now();
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing-Funktion für eine natürlichere Animation
            const easedProgress = easeOutExpo(progress);
            const currentValue = startValue + (end - startValue) * easedProgress;

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    // Easing-Funktion: exponentielles Verlangsamen am Ende
    const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    // Formatierung der Zahl mit Dezimalstellen
    const formatNumber = (num: number): string => {
        return prefix + num.toFixed(decimals) + suffix;
    };

    return (
        <div ref={countRef} className="count-up-animation">
            {formatNumber(count)}
        </div>
    );
};

export default CountUpAnimation;