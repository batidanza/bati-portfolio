// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import './App.css';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
