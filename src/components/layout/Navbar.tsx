import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa';
import NeonButtonMitTooltip from '../ui/NeonButtonMitTooltip';
import '../../styles/layout/Navbar.scss';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolledDown(true); // Scrollt runter
      } else {
        setIsScrolledDown(false); // Scrollt hoch
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className={`navbar ${isScrolledDown ? 'navbar--hidden' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img
            src="/csGold.webp"
            alt="Logo"
            onClick={() => handleNavigation('/')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <ul className="nav-menu">
          <li className={currentPath === '/' ? 'active' : ''}>
            <NeonButtonMitTooltip icon={<FaHome />} color="blue" tooltipText="Startseite" tooltipPosition="bottom" onClick={() => handleNavigation('/')} />
          </li>
          <li className={currentPath === '/projects' ? 'active' : ''}>
            <NeonButtonMitTooltip icon={<FaProjectDiagram />} color="green" tooltipText="Projekte" tooltipPosition="bottom" onClick={() => handleNavigation('/projects')} />
          </li>
          <li className={currentPath === '/about' ? 'active' : ''}>
            <NeonButtonMitTooltip icon={<FaUser />} color="purple" tooltipText="Über mich" tooltipPosition="bottom" onClick={() => handleNavigation('/about')} />
          </li>
          <li className={currentPath === '/contact' ? 'active' : ''}>
            <NeonButtonMitTooltip icon={<FaEnvelope />} color="red" tooltipText="Kontakt" tooltipPosition="bottom" onClick={() => handleNavigation('/contact')} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
