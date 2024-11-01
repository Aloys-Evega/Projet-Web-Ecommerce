import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './components/about/about';
import { Menu } from './components/menu/Menu';
import { HomePage } from './components/home/HomePage';
import { Parrainnage } from './components/parrainnage/Parrainnage';



const App = () => {
  return (
    <Router>
     
      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/parrainage" element={< Parrainnage/>} />
      </Routes>

    </Router>
  );
};

export default App;
