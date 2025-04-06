import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./SkillsSection.scss";

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
  description: string;
  expertise: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  technologies: string[];
}

interface SkillsSectionProps {
  isVisible: boolean;
}

const skillsData: Skill[] = [
  {
    name: 'React',
    category: 'Frontend',
    description: 'Modulare Komponentenarchitektur für skalierbare Interfaces',
    expertise: 'Expert',
    technologies: ['Hooks', 'Context API', 'React Router', 'Next.js']
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    description: 'Progressives Framework für interaktive UIs',
    expertise: 'Intermediate',
    technologies: ['Vue Router', 'Vuex', 'Nuxt.js']
  },
  {
    name: 'Sass',
    category: 'Frontend',
    description: 'CSS-Präprozessor für erweiterte Stylesheets',
    expertise: 'Advanced',
    technologies: ['Variablen', 'Mixins', 'Nesting']
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Typsicheres JavaScript für skalierbare Anwendungen',
    expertise: 'Advanced',
    technologies: ['Interfaces', 'Generics', 'Type Guards']
  },
  // Backend Skills
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'JavaScript-Laufzeitumgebung für serverseitige Anwendungen',
    expertise: 'Advanced',
    technologies: ['Express', 'MongoDB', 'REST APIs']
  },
  {
    name: 'Django',
    category: 'Backend',
    description: 'Python-Webframework für schnelle Entwicklung',
    expertise: 'Intermediate',
    technologies: ['Django REST Framework', 'PostgreSQL']
  },
  {
    name: 'GraphQL',
    category: 'Backend',
    description: 'Abfragesprache für APIs',
    expertise: 'Intermediate',
    technologies: ['Apollo Server', 'Relay']
  },
  {
    name: 'Spring Boot',
    category: 'Backend',
    description: 'Java-Framework für die Entwicklung von Microservices',
    expertise: 'Intermediate',
    technologies: ['Spring Data', 'Spring Security', 'Hibernate']
  },
  // Design Skills
  {
    name: 'Figma',
    category: 'Design',
    description: 'UI/UX Design-Tool für Prototyping und Zusammenarbeit',
    expertise: 'Advanced',
    technologies: ['Prototyping', 'Designsysteme', 'Plugins']
  },
  {
    name: 'Adobe XD',
    category: 'Design',         
    description: 'Design- und Prototyping-Tool',
    expertise: 'Intermediate',
    technologies: ['Interaktive Prototypen', 'Designsysteme']
  },
  {
    name: 'Adobe Photoshop',
    category: 'Design',
    description: 'Bildbearbeitung und Grafikdesign-Tool',
    expertise: 'Intermediate',
    technologies: ['Retusche', 'Composing', 'Grafiken']
  },
  {
    name: 'Sketch',
    category: 'Design',
    description: 'Design-Tool für digitale Produkte',
    expertise: 'Intermediate',
    technologies: ['UI Kits', 'Prototyping', 'Plugins']
  },
  // Tools Skills
  {
    name: 'Git',
    category: 'Tools',
    description: 'Versionskontrollsystem für Codeverwaltung',
    expertise: 'Advanced',
    technologies: ['GitHub', 'GitLab', 'Bitbucket']
  },
  {
    name: 'Docker',
    category: 'Tools',
    description: 'Containerisierung für Anwendungsentwicklung',
    expertise: 'Intermediate',
    technologies: ['Docker Compose', 'Docker Swarm']
  },
  {
    name: 'Webpack',
    category: 'Tools',
    description: 'Modulbündler für JavaScript-Anwendungen',
    expertise: 'Intermediate',
    technologies: ['Babel', 'Code Splitting', 'Tree Shaking']
  },
  {
    name: 'Jenkins',
    category: 'Tools',
    description: 'Automatisierung von CI/CD-Pipelines',
    expertise: 'Intermediate',
    technologies: ['Pipeline Scripting', 'Plugins', 'Integration']
  },
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
  const [activeCategory, setActiveCategory] = useState<Skill['category'] | 'All'>('All');
  const [activeSkills, setActiveSkills] = useState<Skill[]>(skillsData);

  useEffect(() => {
    if (activeCategory === 'All') {
      setActiveSkills(skillsData);
    } else {
      setActiveSkills(
        skillsData.filter(skill => skill.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const getExpertiseClasses = (expertise: Skill['expertise']) => {
    const expertiseClasses = {
      'Beginner': 'text-yellow-500',
      'Intermediate': 'text-blue-500',
      'Advanced': 'text-green-500',
      'Expert': 'text-primary'
    };
    return expertiseClasses[expertise];
  };

  return (
    <section className={`skills-section section-padding ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Meine Expertise
        </motion.h2>

        <div className="skills-category-filters">
          {(['All', 'Frontend', 'Backend', 'Design', 'Tools'] as const).map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`skills-category-btn ${activeCategory === category ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="skills-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                delayChildren: 0.2,
                staggerChildren: 0.1 
              }
            }
          }}
        >
          <AnimatePresence>
            {activeSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skills-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                }}
              >
                <div 
                  className="skills-card-header"
                  style={{ 
                    borderBottomColor: {
                      'Frontend': 'var(--blue)', 
                      'Backend': 'var(--green)', 
                      'Design': 'var(--primary)', 
                      'Tools': 'var(--yellow)'
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
