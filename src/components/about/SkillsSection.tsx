import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./SkillsSection.scss";

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Management';
  description: string;
  expertise: 'Anfänger' | 'Grundkenntnisse' | 'Fortgeschritten' | 'Experte';
  technologies: string[];
}

interface SkillsSectionProps {
  isVisible: boolean;
}

// Konstanten für Animationsvarianten
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.05 // Reduziert von 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduziert von y: 20
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 } // Reduziert von 0.5
  }
};

// Skill-Daten außerhalb der Komponente definieren, um unnötiges Re-Rendering zu vermeiden
const skillsData: Skill[] = [
  // Frontend Skills
  {
    name: 'HTML',
    category: 'Frontend',
    description: 'Strukturierte Auszeichnungssprache für Webseiten',
    expertise: 'Fortgeschritten',
    technologies: ['HTML5', 'Semantische Elemente', 'Formulare', 'Barrierefreiheit']
  },
  {
    name: 'CSS',
    category: 'Frontend',
    description: 'Gestaltung und Layout von Webseiten',
    expertise: 'Fortgeschritten',
    technologies: ['CSS3', 'Flexbox', 'Grid', 'Responsive Design']
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    description: 'Programmiersprache für interaktive Webseiten',
    expertise: 'Fortgeschritten',
    technologies: ['ES6+', 'DOM-Manipulation', 'AJAX', 'JSON']
  },
  {
    name: 'React',
    category: 'Frontend',
    description: 'JavaScript-Bibliothek für Benutzeroberflächen',
    expertise: 'Fortgeschritten',
    technologies: ['Hooks', 'Components', 'React Router', 'State Management']
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    description: 'CSS-Framework für responsive Webseiten',
    expertise: 'Fortgeschritten',
    technologies: ['Grid-System', 'Komponenten', 'Utilities', 'Responsive']
  },
  {
    name: 'Angular',
    category: 'Frontend',
    description: 'Framework für dynamische Webanwendungen',
    expertise: 'Grundkenntnisse',
    technologies: ['Components', 'Services', 'Templates']
  },
  // Backend Skills
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'JavaScript-Laufzeitumgebung für serverseitige Anwendungen',
    expertise: 'Grundkenntnisse',
    technologies: ['Express', 'API-Entwicklung', 'Server-Logik']
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    description: 'NoSQL-Datenbank für dokumentenorientierte Datenspeicherung',
    expertise: 'Grundkenntnisse',
    technologies: ['CRUD-Operationen', 'Schemadesign', 'Abfragen']
  },
  {
    name: 'MySQL',
    category: 'Backend',
    description: 'Relationales Datenbankmanagementsystem',
    expertise: 'Grundkenntnisse',
    technologies: ['SQL-Abfragen', 'Datenmodellierung', 'Joins']
  },
  {
    name: 'Express',
    category: 'Backend',
    description: 'Webframework für Node.js',
    expertise: 'Grundkenntnisse',
    technologies: ['Routing', 'Middleware', 'REST-APIs']
  },
  // Tools Skills
  {
    name: 'Git',
    category: 'Tools',
    description: 'Versionskontrollsystem für Codeverwaltung',
    expertise: 'Fortgeschritten',
    technologies: ['Branches', 'Commits', 'Pull Requests', 'Merge']
  },
  {
    name: 'Microsoft Office',
    category: 'Tools',
    description: 'Bürosoftware für Dokumentenerstellung und -verwaltung',
    expertise: 'Fortgeschritten',
    technologies: ['Word', 'Excel', 'PowerPoint', 'Outlook']
  },
  {
    name: 'Visual Studio Code',
    category: 'Tools',
    description: 'Code-Editor für Softwareentwicklung',
    expertise: 'Fortgeschritten',
    technologies: ['Extensions', 'Debugging', 'Integrierte Terminals', 'Git-Integration']
  },
  // Management Skills
  {
    name: 'Projektmanagement',
    category: 'Management',
    description: 'Planung, Organisation und Steuerung von Projekten',
    expertise: 'Fortgeschritten',
    technologies: ['Zeitplanung', 'Ressourcenplanung', 'Dokumentation', 'Teamkoordination']
  },
  {
    name: 'Prozessoptimierung',
    category: 'Management',
    description: 'Analyse und Verbesserung von Arbeitsabläufen',
    expertise: 'Fortgeschritten',
    technologies: ['Workflow-Analyse', 'Effizienzsteigerung', 'Dokumentation', 'Implementierung']
  },
  {
    name: 'Datenanalyse',
    category: 'Management',
    description: 'Sammlung, Aufbereitung und Auswertung von Daten',
    expertise: 'Grundkenntnisse',
    technologies: ['Datenaufbereitung', 'Visualisierung', 'Interpretation', 'Berichtserstellung']
  },
  {
    name: 'CRM-Systeme',
    category: 'Management',
    description: 'Verwaltung von Kundenbeziehungen und -daten',
    expertise: 'Grundkenntnisse',
    technologies: ['Kundendatenverwaltung', 'Kontaktmanagement', 'Reporting', 'Prozessautomatisierung']
  },
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
  const [activeCategory, setActiveCategory] = useState<Skill['category'] | 'All'>('All');
  const [activeSkills, setActiveSkills] = useState<Skill[]>(skillsData);
  const sectionRef = useRef<HTMLDivElement>(null);

  // useCallback für bessere Performance
  const handleCategoryChange = useCallback((category: Skill['category'] | 'All') => {
    setActiveCategory(category);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setActiveSkills(skillsData);
    } else {
      setActiveSkills(
        skillsData.filter(skill => skill.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const getExpertiseClasses = useCallback((expertise: Skill['expertise']) => {
    const expertiseClasses = {
      'Anfänger': 'text-yellow-500',
      'Grundkenntnisse': 'text-blue-500',
      'Fortgeschritten': 'text-green-500',
      'Experte': 'text-primary'
    };
    return expertiseClasses[expertise];
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`skills-section section-padding ${isVisible ? 'visible' : ''}`}
    >
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="section-title"
        >
          Meine Expertise
        </motion.h2>

        <div className="skills-category-filters">
          {(['All', 'Frontend', 'Backend', 'Tools', 'Management'] as const).map(category => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`skills-category-btn ${activeCategory === category ? 'active' : ''}`}
              whileHover={{ scale: 1.03 }} // Reduziert von 1.05
              whileTap={{ scale: 0.97 }} // Reduziert von 0.95
            >
              {category === 'All' ? 'Alle' : category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {activeSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skills-card"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }} // Reduziert von 1.05
              >
                <div 
                  className="skills-card-header"
                  style={{ 
                    borderBottomColor: {
                      'Frontend': 'var(--blue)', 
                      'Backend': 'var(--green)', 
                      'Tools': 'var(--yellow)',
                      'Management': 'var(--primary)'
                    }[skill.category]
                  }}
                >
                  <h3>{skill.name}</h3>
                  <span 
                    className={`skills-expertise-badge ${getExpertiseClasses(skill.expertise)}`}
                  >
                    {skill.expertise}
                  </span>
                </div>
                <div className="skills-card-body">
                  <p>{skill.description}</p>
                  <div className="skills-technologies">
                    {skill.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="skills-tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;