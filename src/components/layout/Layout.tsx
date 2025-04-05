// src/components/layout/Layout.tsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopOnRouteChange from '../ui/ScrollToTopOnRouteChange';

// Lazy loaded Komponenten
const Home = lazy(() => import('../../pages/Home'));
const Projects = lazy(() => import('../../pages/Projects'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));

// Einfacher Loader-Komponente
const Loader = () => (
  <div className="loader-container" style={{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh'
  }}>
    <div className="loader">Lädt...</div>
  </div>
);

const Layout: React.FC = () => {
  const location = useLocation();
 
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