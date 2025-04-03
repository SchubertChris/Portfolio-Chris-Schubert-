// src/components/ui/SkillBar.tsx
import React, { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
    name: string;
    level: number;
    color: string;
    delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const skillBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = skillBarRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay]);

    return (
        <div className="skill-item" data-reveal="up" ref={skillBarRef}>
            <div className="skill-info">
                <span className="skill-name">{name}</span>
                <span className="skill-percentage">{level}%</span>
            </div>
            <div className={`skill-bar ${isVisible ? 'animated' : ''}`}>
                <div
                    className="skill-level"
                    style={{
                        width: isVisible ? `${level}%` : '0%',
                        background: `linear-gradient(90deg, var(--${color}-dark), var(--${color}), var(--${color}-light))`
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;