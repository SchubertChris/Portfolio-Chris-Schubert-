import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/layout/Layout.scss';
import ScrollToTopOnRouteChange from '../ui/ScrollToTopOnRouteChange';

// Verbesserte Loader-Komponente mit Stil und korrekter Größe
const Loader = () => (
  <div className="page-loader-container">
    <div className="loader">Lädt...</div>
  </div>
);

// Lazy loaded Komponenten mit Präfetching-Hinweis
const Home = lazy(() => {
  // Hinweis für den Browser, dass diese Ressource wichtig ist
  return import('../../pages/Home');
});
const Projects = lazy(() => import('../../pages/Projects'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));

// Präfetching-Funktion für Route-basiertes Präfetching
const usePrefetchRoutes = () => {
  useEffect(() => {
    // Verzögertes Präfetching nach dem initialen Laden
    const timer = setTimeout(() => {
      // Präfetch aller Routen nach dem ersten Render
      import('../../pages/Projects');
      import('../../pages/About');
      import('../../pages/Contact');
    }, 2000); // 2 Sekunden Verzögerung nach dem Laden der Hauptseite
   
    return () => clearTimeout(timer);
  }, []);
};

const Layout: React.FC = () => {
  const location = useLocation();
 
  // Route-Präfetching aktivieren
  usePrefetchRoutes();
 
  return (
    <div className="app">
      <Navbar />
      <ScrollToTopOnRouteChange />
      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;