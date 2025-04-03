// src/components/layout/Layout.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import About from '../../pages/About';
import Contact from '../../pages/Contact';

const Layout: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;