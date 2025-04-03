// src/components/projects/ProjectFilter.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface ProjectFilterProps {
    searchTerm: string;
    activeFilter: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFilterChange: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
    searchTerm,
    activeFilter,
    onSearchChange,
    onFilterChange
}) => {
    const categories = ['Alle', 'Featured', 'Web', 'Mobile', 'Frontend', 'Backend', 'Fullstack', 'Widget'];

    return (
        <div className="projects-filter-section">
            <div className="filter-container">
                <div className="category-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => onFilterChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Projekte durchsuchen..."
                        value={searchTerm}
                        onChange={onSearchChange}
                        className="search-input"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectFilter;