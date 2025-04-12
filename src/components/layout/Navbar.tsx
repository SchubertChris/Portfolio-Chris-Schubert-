import React, { useEffect, useState, useCallback } from 'react';
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

  // Optimierter Scroll-Handler mit Throttling
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolledDown(currentScrollY > 100 && currentScrollY > lastScrollY);
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Throttled resize handler
  const handleResize = useCallback(() => {
    const isMobileView = window.innerWidth <= 768;
    setIsMobile(isMobileView);
    if (!isMobileView && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let resizeTimer: number;
    
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(handleResize, 100);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [handleResize]);

  // Scrollsperren bei geöffnetem Menü
  useEffect(() => {
    document.body.style.overflow = (isMobileMenuOpen && isMobile) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen, isMobile]);

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolledDown ? 'navbar--scrolled' : ''} ${isMobileMenuOpen ? 'navbar--menu-open' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img
            src="/csGold.webp"
            alt="Logo"
            onClick={() => handleNavigation('/')}
            width="60"
            height="60"
          />
        </div>
        
        {/* Hamburger Button nur für mobile */}
        {isMobile && (
          <button className="hamburger-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menü öffnen">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        {/* Desktop Navigation - nur rendern wenn nicht mobile */}
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

        {/* Mobile Navigation - nur rendern wenn mobile */}
        {isMobile && (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;