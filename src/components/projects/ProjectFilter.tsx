import React, { memo } from 'react';
import { FaSearch } from 'react-icons/fa';
import './ProjectFilter.scss';

interface ProjectFilterProps {
    searchTerm: string;
    activeFilter: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFilterChange: (category: string) => void;
}

const categories = ['Alle', 'Web', 'Mobile', 'Frontend', 'Backend', 'Fullstack', 'Widget'];

const ProjectFilter: React.FC<ProjectFilterProps> = ({
    searchTerm,
    activeFilter,
    onSearchChange,
    onFilterChange
}) => {
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

// Verhindert unnötige Re-Renders
export default memo(ProjectFilter);