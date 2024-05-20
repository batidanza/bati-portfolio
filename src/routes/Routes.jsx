// src/routes/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrintImages from '../components/interactives/design/image-print/main-files/PrintImages';
import ParticleComponent from '../components/interactives/audio/song-animated/main-files/ParticleComponent';
import FluidComponent from '../components/interactives/audio/song-animated/main-files/FluidComponent';
import Home from '../components/layout/home/Home';
import InteractivesList from '../components/interactives/list/InteractivesList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/interactives-list" element={<InteractivesList />} />
      <Route path="/print-images" element={<PrintImages />} />
      <Route path="/particle-component" element={<ParticleComponent />} />
      <Route path="/fluid-component" element={<FluidComponent />} />
    </Routes>
  );
};

export default AppRoutes;
