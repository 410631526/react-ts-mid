import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../view/home';
import Insert from '../view/Insert';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insert" element={<Insert />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
