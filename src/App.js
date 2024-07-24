import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CipherTool from './components/CipherTool';
import Explanation from './components/Explanation';
import Applications from './components/Applications';
import Resources from './components/Resources';
import Navigation from './components/Navigation';
import GlobalStyle from './styles';

function App() {
  const [cipherType, setCipherType] = useState('caesar');

  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool" element={<CipherTool cipherType={cipherType} setCipherType={setCipherType} />} />
        <Route path="/explanation" element={<Explanation cipherType={cipherType} />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
