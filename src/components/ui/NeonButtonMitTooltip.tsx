import React, { useState, memo } from 'react';
import '../../styles/utilities/_NeonButtonMitTooltip.scss';

interface NeonButtonMitTooltipProps {
  icon: React.ReactNode;
  color: 'blue' | 'yellow' | 'red' | 'green' | 'purple' | 'orange' | 'indigo' | 'pink' | 'lightpink' | 'gray' | 'gold';
  tooltipText: string;
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
  onClick?: () => void;
}

const NeonButtonMitTooltip: React.FC<NeonButtonMitTooltipProps> = ({
  icon,
  color,
  tooltipText,
  tooltipPosition = 'bottom',
  onClick
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="tooltip-container">
      <button
        className={`neon-button btn-${color}`}
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon}
      </button>
      {showTooltip && (
        <div className={`tooltip tooltip-${tooltipPosition}`}>
          {tooltipText}
        </div>
      )}
    </div>
  );
};

// Verhindert unnötige Re-Renders
export default memo(NeonButtonMitTooltip);