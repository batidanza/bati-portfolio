import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import PrintImages from './components/interactives/design/image-print/main-files/PrintImages';
import ParticleComponent from './components/interactives/audio/song-animated/main-files/ParticleComponent';
import FluidComponent from './components/interactives/audio/song-animated/main-files/FluidCopmonent';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/print-images" element={<PrintImages />} />
            <Route path="/particle-component" element={<ParticleComponent />} />
            <Route path="/fluid-component" element={<FluidComponent/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
