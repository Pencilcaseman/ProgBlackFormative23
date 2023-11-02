import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import './App.css';

import ArtificialIntelligence from "./components/pages/ArtificialIntelligence";
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';
import ParticlePhysics from './components/pages/ParticlePhysics';
import ParticlePhysicsCitations from './components/pages/ParticlePhysicsCitations';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/artificial-intelligence' element={<ArtificialIntelligence />} />
          <Route path='/particlephysics' element={<ParticlePhysics />} />
          <Route path='/particlephysics_citations' element={<ParticlePhysicsCitations />} />
          <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
