// src/pages/Home.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaCode, FaBriefcase, FaLaptopCode, FaArrowUp } from 'react-icons/fa';
import ParticleBackground from '../components/ui/ParticleBackground';
import { scrollToElementNew, isElementInViewportNew, setupScrollReveal } from '../components/Utils/scrollUtils';
import './Home.scss';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, tags, imageUrl }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Berechnung der Mausposition relativ zur Karte
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalisieren der Position (0 bis 1)
    const normalizedX = x / rect.width;
    const normalizedY = y / rect.height;

    // Umrechnung in Rotationswinkel (-10 bis 10 Grad)
    const rotX = 10 - normalizedY * 20;
    const rotY = normalizedX * 20 - 10;

    // CSS-Variablen setzen
    setRotateX(rotX);
    setRotateY(rotY);
    setScale(1.05);
  };

  const handleMouseLeave = () => {
    // Zurücksetzen auf Ausgangswerte
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  const cardStyle = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
    transition: 'transform 0.1s ease'
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-image">
        <img src={imageUrl} alt={title} />
        <div className="card-overlay">
          <a href="#" className="view-project">Ansehen</a>
        </div>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

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

  // ScrollReveal einrichten
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
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
        <ParticleBackground />
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
        <TechSymbols />
        <div className="section-container">
          <h2 className="section-title">Über Mich</h2>
          <div className="about-content">
            <div className="about-image" data-reveal="left" data-reveal-delay="200">
              <div className="image-frame">
                <div className="image-placeholder">
                  {/* Platzhalter oder Bild einfügen */}
                  <img src="/placeholder-profile.jpg" alt="Profilbild" />
                </div>
                <div className="neon-border"></div>
              </div>
            </div>
            <div className="about-text" data-reveal="right" data-reveal-delay="400">
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
          <h2 className="section-title" data-reveal="up">Aktuelle Projekte</h2>
          <div className="project-cards">
            <ProjectCard
              id={1}
              title="Portfolio Website"
              description="Eine moderne Portfolio-Website mit React, TypeScript und SCSS."
              tags={["React", "TypeScript", "SCSS"]}
              imageUrl="/project-1.jpg"
            />
            <ProjectCard
              id={2}
              title="Dashboard App"
              description="Ein interaktives Dashboard mit Datenvisualisierung und benutzerdefinierten Charts."
              tags={["React", "D3.js", "API"]}
              imageUrl="/project-2.jpg"
            />
            <ProjectCard
              id={3}
              title="E-Commerce Platform"
              description="Eine vollständige E-Commerce-Lösung mit Warenkorb und Zahlungsabwicklung."
              tags={["React", "Node.js", "MongoDB"]}
              imageUrl="/project-3.jpg"
            />
          </div>
          <div className="section-footer" data-reveal="up" data-reveal-delay="400">
            <button
              className="outline-button"
              onClick={() => navigate('/projects')}
            >
              Alle Projekte ansehen
            </button>
          </div>
        </div>
      </div>

      {/* Skills Sektion */}
      <div id="skills" className={`skills-section section-animate ${isVisible.skills ? 'visible' : ''}`}>
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

            <div className="skill-category" data-reveal="up" data-reveal-delay="400">
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
      <div className="contact-cta" data-reveal="up">
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

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;