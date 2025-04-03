// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.scss';

// AnimatedRoutes-Komponente für Seitenübergänge
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <main className="main-content">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;