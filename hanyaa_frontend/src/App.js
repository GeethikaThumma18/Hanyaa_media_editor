
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import ColorPalette from './components/ColorPalette';
import FaceSwap from './components/FaceSwap';
import BackgroundReplacement from './components/BackgroundReplacement';
import LoginPage from './components/LoginPage';
import AiToolsSection from './components/AiToolsSection'; 
import AiBackgroundReplacer from './components/AiBackgroundReplacer';
import AiBackgroundReplacerVideo from './components/AiBackgroundReplacerVideo';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import TryImage from './components/TryImage';
import TryVideo from './components/TryVideo';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <>
            <Sidebar />
            <div className="main">
              <Header onLogout={handleLogout} onSearch={setSearchQuery} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/colorpalette" element={<ColorPalette />} />
                <Route path="/faceswap" element={<FaceSwap />} />
                <Route path="/backgroundreplacement" element={<BackgroundReplacement />} />
                <Route path="/aitools" element={<AiToolsSection searchQuery={searchQuery} />} />
                <Route path="*" element={<Navigate to="/" />} />

                <Route path="/tryimage" element={<TryImage />} />
                <Route path="/tryvideo" element={<TryVideo />} />
                <Route path="/background-replacer" element={<AiBackgroundReplacer />} />
                <Route path="/background-replacer-video" element={<AiBackgroundReplacerVideo />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;



