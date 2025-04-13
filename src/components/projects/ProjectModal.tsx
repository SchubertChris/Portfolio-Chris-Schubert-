import React, { useEffect, useRef, useCallback, memo } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectData } from '../../types';
import './ProjectModal.scss';

interface ProjectModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Optimierte Event-Handler mit useCallback
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    }, [onClose]);

    const handleEscKey = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    // Verbesserte Methode zum Sperren des Scrollens
    useEffect(() => {
        if (!project) return;

        // Aktuelle Scrollposition ermitteln
        const scrollY = window.scrollY;
        
        // Body fixieren ohne Position zu ändern
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        
        // Event-Listener hinzufügen
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);
        
        return () => {
            // Cleanup beim Schließen
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
            
            // Scroll-Verhalten wiederherstellen
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            
            // Zur ursprünglichen Position zurückspringen
            window.scrollTo(0, scrollY);
        };
    }, [project, handleClickOutside, handleEscKey]);

    // Frühes Return wenn kein Projekt
    if (!project) return null;

    return (
        <div className="project-modal-backdrop">
            <div className="project-modal" ref={modalRef}>
                <button className="close-button" onClick={onClose} aria-label="Schließen">&times;</button>
                <div className="modal-content">
                    <div className="modal-image">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            loading="lazy"
                            width="100%"
                            height="auto" 
                        />
                    </div>
                    <div className="modal-details">
                        <h2>{project.title}</h2>
                        <p className="modal-description">{project.longDescription}</p>

                        <div className="tech-section">
                            <h3>Technologien</h3>
                            <div className="tech-tags">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-links">
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="github-link"
                                    aria-label="GitHub Repository"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            )}
                            {project.liveDemo && (
                                <a 
                                    href={project.liveDemo} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="demo-link"
                                    aria-label="Live Demo"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ProjectModal);