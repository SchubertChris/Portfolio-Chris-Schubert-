// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ThemeManager } from './components/Utils/ThemeManager';
import './App.scss';

const App: React.FC = () => {
  // Theme beim App-Start initialisieren
  useEffect(() => {
    ThemeManager.initialize();
  }, []);

  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;