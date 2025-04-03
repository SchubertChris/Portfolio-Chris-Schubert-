// src/pages/About.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaGraduationCap, FaCoffee, FaArrowUp } from 'react-icons/fa';
import ParticleBackground from '../components/ui/ParticleBackground';
import { setupScrollReveal } from '../components/Utils/scrollUtils';
import CountUpAnimation from '../components/ui/CountUpAnimation';
import SkillBarComponent from '../components/ui/SkillBar';
import './About.scss';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, icon, isLeft }) => {
  return (
    <div className={`timeline-item ${isLeft ? 'left' : 'right'}`} data-reveal={isLeft ? 'left' : 'right'}>
      <div className="timeline-icon">{icon}</div>
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Alte SkillBar-Komponente wurde entfernt, da wir jetzt die importierte Komponente verwenden

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

const About: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    about: false,
    timeline: false,
    skills: false,
    interests: false
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

  return (
    <div className="about-page">
      {/* Hero-Sektion mit Parallax-Effekt */}
      <div className="about-hero-section">
        <ParticleBackground />
        <div className="hero-content" ref={heroRef}>
          <h1 className="animated-title">Über Mich</h1>
          <p className="animated-subtitle">Frontend-Entwickler mit Leidenschaft für moderne Webtechnologien</p>
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
        </div>
        {/* Hintergrund mit Neon-Gradient-Effekt */}
        <div className="hero-background">
          <div className="gradient-overlay"></div>
          <div className="grid-overlay"></div>
        </div>
      </div>

      {/* Über Mich Detailsektion */}
      <div id="about" className={`about-details-section section-animate ${isVisible.about ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="title-wrapper">
            <h2 className="section-title">Wer ich bin</h2>
          </div>
          <div className="about-content">
            <div className="about-image" data-reveal="left">
              <div className="image-frame">
                <div className="image-placeholder">
                  <img src="/about-profile.jpg" alt="Profilbild" />
                </div>
                <div className="neon-border"></div>
              </div>
            </div>
            <div className="about-text" data-reveal="right">
              <p>Herzlich willkommen auf meiner Portfolio-Seite! Ich bin ein <span className="highlight">Frontend-Entwickler</span> mit über 5 Jahren Erfahrung in der Webentwicklung.</p>

              <p>Meine Reise in der Programmierung begann während meines Informatikstudiums, als ich entdeckte, wie faszinierend es ist, Benutzeroberflächen zu gestalten, die nicht nur funktional, sondern auch ästhetisch ansprechend sind.</p>

              <p>Heute spezialisiere ich mich auf die Entwicklung von <span className="highlight">modernen Webapplikationen</span> mit Fokus auf Performance, Benutzerfreundlichkeit und elegantes Design. Ich arbeite hauptsächlich mit dem <span className="highlight">React</span>-Ökosystem und setze auf <span className="highlight">TypeScript</span> für typsichere und wartbare Codebases.</p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">
                    <CountUpAnimation end={5} suffix="+" />
                  </div>
                  <div className="stat-label">Jahre Erfahrung</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <CountUpAnimation end={50} suffix="+" delay={300} />
                  </div>
                  <div className="stat-label">Projekte</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <CountUpAnimation end={20} suffix="+" delay={600} />
                  </div>
                  <div className="stat-label">Zufriedene Kunden</div>
                </div>
              </div>

              <button
                className="glow-button"
                onClick={() => navigate('/contact')}
              >
                Mit mir zusammenarbeiten
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Sektion */}
      <div id="timeline" className={`timeline-section section-animate ${isVisible.timeline ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="title-wrapper">
            <h2 className="section-title" data-reveal="up">Mein Werdegang</h2>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>

            <TimelineItem
              year="2016"
              title="Bachelor-Abschluss in Informatik"
              description="Abschluss meines Studiums mit Schwerpunkt auf Softwareentwicklung und Webprogrammierung."
              icon={<FaGraduationCap />}
              isLeft={true}
            />

            <TimelineItem
              year="2017"
              title="Junior Web Developer"
              description="Einstieg in die Berufswelt als Junior Web Developer bei einer Digitalagentur. Erste Erfahrungen mit kommerziellen Projekten und Kundenbetreuung."
              icon={<FaCode />}
              isLeft={false}
            />

            <TimelineItem
              year="2019"
              title="Frontend-Spezialist"
              description="Weiterentwicklung zum Frontend-Spezialisten mit Fokus auf React und moderne JavaScript-Frameworks."
              icon={<FaLaptopCode />}
              isLeft={true}
            />

            <TimelineItem
              year="2021"
              title="Senior Frontend Developer"
              description="Aufstieg zum Senior Frontend Developer. Projektleitung und Verantwortung für das Frontend-Team."
              icon={<FaCode />}
              isLeft={false}
            />

            <TimelineItem
              year="2023"
              title="Freelancer & Entrepreneur"
              description="Start in die Selbstständigkeit. Beratung und Entwicklung für verschiedene Kunden und Branchen."
              icon={<FaCoffee />}
              isLeft={true}
            />
          </div>
        </div>
      </div>

      {/* Skills Sektion */}
      <div id="skills" className={`about-skills-section section-animate ${isVisible.skills ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="title-wrapper">
            <h2 className="section-title" data-reveal="up">Meine Fähigkeiten</h2>
          </div>

          <div className="skills-container">
            <div className="skills-group">
              <h3 data-reveal="left">Frontend Development</h3>
              <div className="skills-list">
                <SkillBarComponent name="React" level={90} color="primary" delay={0} />
                <SkillBarComponent name="TypeScript" level={85} color="primary" delay={200} />
                <SkillBarComponent name="HTML5 & CSS3" level={95} color="primary" delay={400} />
                <SkillBarComponent name="SCSS/SASS" level={90} color="primary" delay={600} />
              </div>
            </div>

            <div className="skills-group">
              <h3 data-reveal="right">Backend & Tools</h3>
              <div className="skills-list">
                <SkillBarComponent name="Node.js" level={75} color="blue" delay={200} />
                <SkillBarComponent name="Git & GitHub" level={85} color="blue" delay={400} />
                <SkillBarComponent name="Webpack/Vite" level={80} color="blue" delay={600} />
                <SkillBarComponent name="RESTful APIs" level={85} color="blue" delay={800} />
              </div>
            </div>

            <div className="skills-group">
              <h3 data-reveal="left">Design & Sonstiges</h3>
              <div className="skills-list">
                <SkillBarComponent name="UI/UX Design" level={80} color="yellow" delay={400} />
                <SkillBarComponent name="Responsive Design" level={95} color="yellow" delay={600} />
                <SkillBarComponent name="Figma/Sketch" level={75} color="yellow" delay={800} />
                <SkillBarComponent name="Performance Optimization" level={85} color="yellow" delay={1000} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interessen Sektion */}
      <div id="interests" className={`interests-section section-animate ${isVisible.interests ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="title-wrapper">
            <h2 className="section-title" data-reveal="up">Meine Interessen</h2>
          </div>

          <div className="interests-container">
            <div className="interest-card" data-reveal="up" data-reveal-delay="200">
              <div className="interest-icon">
                <img src="/icon-coding.svg" alt="Coding Icon" />
              </div>
              <h3>Open Source</h3>
              <p>Ich trage regelmäßig zu Open-Source-Projekten bei und teile mein Wissen mit der Community.</p>
            </div>

            <div className="interest-card" data-reveal="up" data-reveal-delay="400">
              <div className="interest-icon">
                <img src="/icon-learning.svg" alt="Learning Icon" />
              </div>
              <h3>Kontinuierliches Lernen</h3>
              <p>Ich bleibe stets auf dem neuesten Stand der Technologien und lerne täglich Neues dazu.</p>
            </div>

            <div className="interest-card" data-reveal="up" data-reveal-delay="600">
              <div className="interest-icon">
                <img src="/icon-design.svg" alt="Design Icon" />
              </div>
              <h3>UI/UX Design</h3>
              <p>Die Schnittstelle zwischen Design und Entwicklung fasziniert mich besonders.</p>
            </div>

            <div className="interest-card" data-reveal="up" data-reveal-delay="800">
              <div className="interest-icon">
                <img src="/icon-hiking.svg" alt="Hiking Icon" />
              </div>
              <h3>Wandern & Natur</h3>
              <p>Abseits des Computers finde ich Inspiration und Erholung in der Natur.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kontakt CTA */}
      <div className="contact-cta" data-reveal="up">
        <div className="cta-content">
          <h2>Bereit für eine Zusammenarbeit?</h2>
          <p>Lassen Sie uns gemeinsam Ihr nächstes Projekt zum Leben erwecken!</p>
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

export default About;