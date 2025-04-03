// src/components/about/TimelineItem.tsx
import React from 'react';

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

export default TimelineItem;