import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface NeonCardProps {
  icon: React.ReactNode
  type: 'coding' | 'trading' | 'sport'
  href: string
}

const NeonCard: React.FC<NeonCardProps> = ({ 
  icon, 
  type, 
  href 
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const deltaX = (x - centerX) / centerX
      const deltaY = (y - centerY) / centerY
      
      gsap.to(card, {
        duration: 0.1,
        rotateY: deltaX * 10,
        rotateX: -deltaY * 10,
        ease: 'power2.out',
        transformPerspective: 1000,
        transformOrigin: 'center'
      })
      
      const icon = card.querySelector('i')
      if (icon) {
        gsap.to(icon, {
          duration: 0.2,
          x: deltaX * 15,
          y: deltaY * 15,
          ease: 'power2.out'
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        duration: 0.5,
        rotateY: 0,
        rotateX: 0,
        ease: 'elastic.out(1, 0.5)'
      })
      
      const icon = card.querySelector('i')
      if (icon) {
        gsap.to(icon, {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: 'elastic.out(1, 0.5)'
        })
      }
    }

    card.addEventListener('mousemove', handleMouseMove as EventListener)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove as EventListener)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <a 
      ref={cardRef}
      href={href} 
      target="_blank" 
      className={`card card-${type}`}
    >
      {icon}
    </a>
  )
}

export default NeonCard