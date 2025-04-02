import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa'
import NeonButtonMitTooltip from '../ui/NeonButtonMitTooltip'
import './Navbar.scss'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  
  // Funktion zum Navigieren und Setzen des aktiven Menüpunkts
  const handleNavigation = (path: string) => {
    navigate(path)
  }
  
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src="/csGold.png" alt="Logo" onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }} />
        </div>
        <ul className="nav-menu">
          <li className={currentPath === '/' ? 'active' : ''}>
            <NeonButtonMitTooltip
              icon={<FaHome />}
              color="blue"
              tooltipText="Home"
              tooltipPosition="bottom"
              onClick={() => handleNavigation('/')}
            />
          </li>
          <li className={currentPath === '/projects' ? 'active' : ''}>
            <NeonButtonMitTooltip
              icon={<FaProjectDiagram />}
              color="green"
              tooltipText="Projects"
              tooltipPosition="bottom"
              onClick={() => handleNavigation('/projects')}
            />
          </li>
          <li className={currentPath === '/about' ? 'active' : ''}>
            <NeonButtonMitTooltip
              icon={<FaUser />}
              color="purple"
              tooltipText="About"
              tooltipPosition="bottom"
              onClick={() => handleNavigation('/about')}
            />
          </li>
          <li className={currentPath === '/contact' ? 'active' : ''}>
            <NeonButtonMitTooltip
              icon={<FaEnvelope />}
              color="red"
              tooltipText="Contact"
              tooltipPosition="bottom"
              onClick={() => handleNavigation('/contact')}
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar