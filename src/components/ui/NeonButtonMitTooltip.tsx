// src/components/ui/NeonButtonMitTooltip.tsx

import React, { useState, useRef } from 'react'
import '../../styles/utilities/_NeonButtonMitTooltip.scss' // Importiere die CSS-Datei für den NeonButton mit Tooltip

interface NeonButtonMitTooltipProps {
  icon: React.ReactNode
  color: 'blue' | 'yellow' | 'red' | 'green' | 'purple' | 'orange' | 'indigo' | 'pink' | 'lightpink' | 'gray' | 'gold'
  tooltipText: string
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left'
  onClick?: () => void
}

const NeonButtonMitTooltip: React.FC<NeonButtonMitTooltipProps> = ({
  icon,
  color,
  tooltipText,
  tooltipPosition = 'bottom',
  onClick
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const handleMouseDown = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(2px) scale(0.95)'
    }
  }
  
  const handleMouseUp = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translateY(-3px) scale(1.05)'
    }
  }

  return (
    <div className="tooltip-container">
      <button
        ref={buttonRef}
        className={`neon-button btn-${color}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
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
  )
}

export default NeonButtonMitTooltip