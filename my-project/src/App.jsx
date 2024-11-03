import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu/Menu';
import { HomePage } from './components/home/HomePage';
import { Parrainage } from './components/parrainnage/Parrainnage';



const App = () => {
  return (
    <Router>
     
      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/parrainage" element={< Parrainage/>} />
      </Routes>

    </Router>
  );
};

export default App;
