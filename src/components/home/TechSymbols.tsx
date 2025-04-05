// src/components/home/TechSymbols.tsx
import React from 'react';
import './TechSymbols.scss'; // Importiere die CSS-Datei für das Styling

const TechSymbols: React.FC = () => {
    return (
        <div className="tech-symbols">
            <div className="ts-logo">TS</div>
            <div className="ts-logo">{'{ }'}</div>
            <div className="ts-logo">{'<>'}</div>
            <div className="react-logo">
                <div className="orbit"></div>
                <div className="orbit" style={{ transform: 'rotate(60deg)' }}></div>
                <div className="orbit" style={{ transform: 'rotate(120deg)' }}></div>
                <div className="core"></div>
            </div>
            <div className="html-logo">
                {'</>'}
            </div>
            <div className="css-logo">
                {'#{}'}
            </div>
        </div>
    );
};

export default TechSymbols;