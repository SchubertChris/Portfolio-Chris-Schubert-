// src/components/home/SkillsSection.tsx
import React from 'react';
import { FaCode, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import './SkillsSection.scss'; // Importiere die CSS-Datei für das Styling

interface SkillsSectionProps {
    isVisible: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
    return (
        <div id="skills" className={`skills-section section-animate ${isVisible ? 'visible' : ''}`}>
            <div className="section-container">
                <h2 className="section-title" data-reveal="up">Meine Fähigkeiten</h2>
                <div className="skills-container">
                    <div className="skill-category" data-reveal="left" data-reveal-delay="200">
                        <div className="category-icon">
                            <FaCode />
                        </div>
                        <h3>Frontend</h3>
                        <ul className="skill-list">
                            <li>
                                <span className="skill-name">React</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '90%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name">JavaScript</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '55%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name">TypeScript</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '80%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name">HTML/CSS/SCSS</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '90%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="skill-category" data-reveal="up" data-reveal-delay="400">
                        <div className="category-icon">
                            <FaLaptopCode />
                        </div>
                        <h3>Backend</h3>
                        <ul className="skill-list">
                            <li>
                                <span className="skill-name">Node.js</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '50%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name">Express</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '40%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name">MongoDB</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '40%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name">RESTful APIs</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '50%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="skill-category" data-reveal="right" data-reveal-delay="600">
                        <div className="category-icon">
                            <FaBriefcase />
                        </div>
                        <h3>Tools & Andere</h3>
                        <ul className="skill-list">
                            <li>
                                <span className="skill-name">Git</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '85%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name">Webpack/Vite</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '75%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name">UI/UX Design</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '90%' }}></div>
                                </div>
                            </li>
                            <li>
                                <span className="skill-name">Responsive Design</span>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ width: '85%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;