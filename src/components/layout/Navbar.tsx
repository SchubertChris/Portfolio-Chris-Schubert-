import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import NeonButtonMitTooltip from '../ui/NeonButtonMitTooltip';
import '../../styles/layout/Navbar.scss';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Überwachen der Scrollrichtung
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

  // Überwachen der Bildschirmbreite
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Schließen des Mobile-Menüs bei Größenänderung zu Desktop
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scrollsperren bei geöffnetem Menü auf Mobilgeräten
  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isMobile]);

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolledDown ? 'navbar--scrolled' : ''} ${isMobileMenuOpen ? 'navbar--menu-open' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img
            src="/csGold.webp"
            alt="Logo"
            onClick={() => handleNavigation('/')}
          />
        </div>
        
        {/* Hamburger Button für mobile Geräte */}
        {isMobile && (
          <button className="hamburger-button" onClick={toggleMobileMenu} aria-label="Menü öffnen">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="nav-menu">
            <li className={currentPath === '/' ? 'active' : ''}>
              <NeonButtonMitTooltip 
                icon={<FaHome />} 
                color="blue" 
                tooltipText="Startseite" 
                tooltipPosition="bottom" 
                onClick={() => handleNavigation('/')} 
              />
            </li>
            <li className={currentPath === '/projects' ? 'active' : ''}>
              <NeonButtonMitTooltip 
                icon={<FaProjectDiagram />} 
                color="green" 
                tooltipText="Projekte" 
                tooltipPosition="bottom" 
                onClick={() => handleNavigation('/projects')} 
              />
            </li>
            <li className={currentPath === '/about' ? 'active' : ''}>
              <NeonButtonMitTooltip 
                icon={<FaUser />} 
                color="purple" 
                tooltipText="Über mich" 
                tooltipPosition="bottom" 
                onClick={() => handleNavigation('/about')} 
              />
            </li>
            <li className={currentPath === '/contact' ? 'active' : ''}>
              <NeonButtonMitTooltip 
                icon={<FaEnvelope />} 
                color="red" 
                tooltipText="Kontakt" 
                tooltipPosition="bottom" 
                onClick={() => handleNavigation('/contact')} 
              />
            </li>
          </ul>
        )}

        {/* Mobile Navigation */}
        <div className="mobile-menu-container">
          <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="mobile-menu">
            <ul className="mobile-nav-menu">
              <li className={currentPath === '/' ? 'active' : ''}>
                <button onClick={() => handleNavigation('/')}>
                  <FaHome className="menu-icon blue-icon" />
                  <span>Startseite</span>
                </button>
              </li>
              <li className={currentPath === '/projects' ? 'active' : ''}>
                <button onClick={() => handleNavigation('/projects')}>
                  <FaProjectDiagram className="menu-icon green-icon" />
                  <span>Projekte</span>
                </button>
              </li>
              <li className={currentPath === '/about' ? 'active' : ''}>
                <button onClick={() => handleNavigation('/about')}>
                  <FaUser className="menu-icon purple-icon" />
                  <span>Über mich</span>
                </button>
              </li>
              <li className={currentPath === '/contact' ? 'active' : ''}>
                <button onClick={() => handleNavigation('/contact')}>
                  <FaEnvelope className="menu-icon red-icon" />
                  <span>Kontakt</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;