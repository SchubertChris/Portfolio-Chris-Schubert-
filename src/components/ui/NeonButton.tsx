import React, { useState, useRef } from 'react'
import './NeonButton.scss'

interface NeonButtonProps {
  icon: React.ReactNode
  tooltip: string
  color: 'blue' | 'yellow' | 'red' | 'green' | 'purple' | 'orange' | 'indigo' | 'pink' | 'lightpink' | 'gray'
  onClick?: () => void
}

const NeonButton: React.FC<NeonButtonProps> = ({
  icon,
  tooltip,
  color,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false)
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
    <button
      ref={buttonRef}
      className={`neon-button btn-${color}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >
      {icon}
      <span className={`tooltip ${isHovered ? 'visible' : ''}`}>{tooltip}</span>
    </button>
  )
}

export default NeonButton