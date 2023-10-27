import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';
import ParticlePhysics from './components/pages/ParticlePhysics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/particlephysics' element={<ParticlePhysics />} />
      </Routes>
    </Router>
  );
}

export default App;
