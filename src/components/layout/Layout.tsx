import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'; // Footer direkt importieren, aber mit angepasstem Timing
import '../../styles/layout/Layout.scss';
import ScrollToTopOnRouteChange from '../ui/ScrollToTopOnRouteChange';
import CookieBanner from '../shared/CookieBanner';
import GoogleFontsLoader from '../Utils/GoogleFontsLoader';

// Verbesserte Loader-Komponente mit Stil und korrekter Größe
const Loader = () => (
  <div className="page-loader-container">
    <div className="loader">Lädt...</div>
  </div>
);

// Footer-Platzhalter für bessere CLS
const FooterPlaceholder = () => (
  <div className="footer-placeholder" aria-hidden="true" />
);

// Lazy loaded Komponenten mit Präfetching-Hinweis
const Home = lazy(() => {
  // Hinweis für den Browser, dass diese Ressource wichtig ist
  return import('../../pages/Home');
});
const Projects = lazy(() => import('../../pages/Projects'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));
const Rechtliches = lazy(() => import('../../pages/Rechtliches')); // Neue Seite Rechtliches

// Präfetching-Funktion für Route-basiertes Präfetching
const usePrefetchRoutes = () => {
  useEffect(() => {
    // Verzögertes Präfetching nach dem initialen Laden
    const timer = setTimeout(() => {
      // Präfetch aller Routen nach dem ersten Render
      import('../../pages/Projects');
      import('../../pages/About');
      import('../../pages/Contact');
      import('../../pages/Rechtliches'); // Präfetch für Rechtliches
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
      <GoogleFontsLoader />
      <Navbar />
      <ScrollToTopOnRouteChange />
      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rechtliches" element={<Rechtliches />} />
          </Routes>
        </Suspense>
      </main>
      {/* Hier ersten einen unsichtbaren Platzhalter einfügen, der den Platz für den Footer reserviert */}
      <FooterPlaceholder />
      {/* Dann den eigentlichen Footer */}
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;