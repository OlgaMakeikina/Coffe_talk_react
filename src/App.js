import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './AppComponents/NavContent/AppRouter';
import FooterManager from './AppComponents/FooterContent/FooterManager';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <AppRouter />
        <FooterManager />
      </div>
    </Router>
  );
}

export default App;