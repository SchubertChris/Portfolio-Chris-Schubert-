// src/components/projects/ProjectModal.tsx
import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectData } from '../../types';

interface ProjectModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        // Scroll sperren
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);

            // Scroll wieder freigeben
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="project-modal-backdrop">
            <div className="project-modal" ref={modalRef}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="modal-content">
                    <div className="modal-image">
                        <img src={project.image} alt={project.title} />
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
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                    <FaGithub /> GitHub
                                </a>
                            )}
                            {project.liveDemo && (
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="demo-link">
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

export default ProjectModal;