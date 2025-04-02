// src/pages/Home.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaCode, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import './Home.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    about: false,
    projects: false,
    skills: false
  });

  // Parallax Effekt für Hero-Sektion
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPos = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPos * 0.4}px)`;
        
        // Überprüfen, ob Elemente im Viewport sind
        const sections = document.querySelectorAll('.section-animate');
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const isInViewport = rect.top <= window.innerHeight * 0.8;
          
          if (isInViewport) {
            const id = section.id;
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typwriter Effekt
  const [displayText, setDisplayText] = useState("");
  const fullText = "Ich entwickle moderne Webapplikationen.";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prevText => prevText + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero-Sektion mit Parallax-Effekt */}
      <div className="hero-section">
        <div className="hero-content" ref={heroRef}>
          <h1 className="animated-title">Willkommen auf meiner Portfolio-Seite</h1>
          <div className="typewriter-container">
            <p className="typewriter">{displayText}</p>
          </div>
          <div className="hero-cta">
            <button 
              className="primary-button" 
              onClick={() => navigate('/projects')}
            >
              Meine Projekte
            </button>
            <button 
              className="secondary-button" 
              onClick={() => navigate('/contact')}
            >
              Kontakt
            </button>
          </div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </div>
          <div className="scroll-indicator">
            <FaArrowDown className="bounce" />
          </div>
        </div>
        {/* Hintergrund mit Neon-Gradient-Effekt */}
        <div className="hero-background">
          <div className="gradient-overlay"></div>
          <div className="grid-overlay"></div>
        </div>
      </div>

      {/* Über Mich Sektion */}
      <div id="about" className={`about-section section-animate ${isVisible.about ? 'visible' : ''}`}>
        <div className="section-container">
          <h2 className="section-title">Über Mich</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-frame">
                <div className="image-placeholder">
                  {/* Platzhalter oder Bild einfügen */}
                  <img src="/placeholder-profile.jpg" alt="Profilbild" />
                </div>
                <div className="neon-border"></div>
              </div>
            </div>
            <div className="about-text">
              <p>Als leidenschaftlicher Web-Entwickler verbinde ich kreatives Design mit technischer Präzision. 
              Ich habe Erfahrung in der Entwicklung moderner, reaktionsfähiger und benutzerfreundlicher Webanwendungen.</p>
              
              <p>Mein Technologie-Stack umfasst <span className="highlight">React</span>, <span className="highlight">TypeScript</span>, 
              <span className="highlight"> SCSS</span> und verschiedene moderne Frontend-Frameworks.</p>
              
              <button 
                className="glow-button" 
                onClick={() => navigate('/about')}
              >
                Mehr über mich
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projekte Vorschau */}
      <div id="projects" className={`projects-preview section-animate ${isVisible.projects ? 'visible' : ''}`}>
        <div className="section-container">
          <h2 className="section-title">Aktuelle Projekte</h2>
          <div className="project-cards">
            <div className="project-card">
                <div className="card-image">
                <img src="/assets/REACTDASHBOARD.jpg" alt="Projekt 1" />
                <div className="card-overlay">
                  <a href="https://schubertchris.github.io/React-Abschluss/" className="view-project">Ansehen</a>
                </div>
                </div>
              <div className="card-content">
                <h3>Projekt 1</h3>
                <p>Eine React-basierte Anwendung mit TypeScript und SCSS.</p>
                <div className="card-tags">
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">SCSS</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="card-image">
                <img src="/project-2.jpg" alt="Projekt 2" />
                <div className="card-overlay">
                  <a href="https://schubertchris.github.io/Javascript-Test-DCI/" className="view-project">Ansehen</a>
                </div>
              </div>
              <div className="card-content">
                <h3>Projekt 2</h3>
                <p>Ein responsives Design-Projekt mit HTML, CSS und JavaScript.</p>
                <div className="card-tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="card-image">
                <img src="/project-3.jpg" alt="Projekt 3" />
                <div className="card-overlay">
                  <a href="https://example.com/project-3" className="view-project">Ansehen</a>
                </div>
              </div>
              <div className="card-content">
                <h3>Projekt 3</h3>
                <p>Eine Full-Stack-Webanwendung mit Node.js, Express und MongoDB.</p>
                <div className="card-tags">
                  <span className="tag">Node.js</span>
                  <span className="tag">Express</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Sektion */}
      <div id="skills" className={`skills-section section-animate ${isVisible.skills ? 'visible' : ''}`}>
        <div className="section-container">
          <h2 className="section-title">Meine Fähigkeiten</h2>
          <div className="skills-container">
            <div className="skill-category">
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
                    <div className="skill-level" style={{ width: '85%' }}></div>
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
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="skill-category">
              <div className="category-icon">
                <FaLaptopCode />
              </div>
              <h3>Backend</h3>
              <ul className="skill-list">
                <li>
                  <span className="skill-name">Node.js</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Express</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">MongoDB</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '65%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">RESTful APIs</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="skill-category">
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
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Responsive Design</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Kontakt CTA */}
      <div className="contact-cta">
        <div className="cta-content">
          <h2>Interessiert an einer Zusammenarbeit?</h2>
          <p>Lass uns gemeinsam deine Vision umsetzen!</p>
          <button 
            className="cta-button" 
            onClick={() => navigate('/contact')}
          >
            Kontaktiere mich
          </button>
        </div>
        <div className="cta-background">
          <div className="gradient-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;