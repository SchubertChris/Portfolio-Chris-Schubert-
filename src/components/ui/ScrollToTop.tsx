// src/components/ui/ScrollToTop.tsx
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
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
        >
            <FaArrowUp />
        </div>
    );
};

export default ScrollToTop;