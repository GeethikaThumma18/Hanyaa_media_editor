

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; 
import './AiToolsSection.css';
import colorPaletteImg from './assets/Color-palatte.jpg';
import faceSwapImg from './assets/face-swap.png';
import backgroundReplacementImg from './assets/BG-Change.png';

const tools = [
  {
    name: 'Color Palette',
    description: 'Explore color combinations and palettes.',
    imgSrc: colorPaletteImg,
    path: '/colorpalette'
  },
  {
    name: 'Face Swap',
    description: 'Swap faces in your photos easily.',
    imgSrc: faceSwapImg,
    path: '/faceswap'
  },
  {
    name: 'Background Replacement',
    description: 'Change the background of your images.',
    imgSrc: backgroundReplacementImg,
    path: '/backgroundreplacement'
  }
];

const AiToolsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ai-tools-container">
      <h2 className="section-heading">Hanyaa's AI Tools</h2>
      <div className="search-bar-container">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search tools..."
          />
          {searchQuery && (
            <FaTimes className="clear-icon" onClick={handleClearSearch} />
          )}
        </div>
      </div>
      <div className="ai-tools-section">
        <div className="tools-grid">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <div
                key={tool.name}
                className="tool-card"
                onClick={() => navigate(tool.path)}
              >
                <img src={tool.imgSrc} alt={tool.name} />
                <div className="overlay">
                  <div className="main-text">{tool.name}</div>
                  <div className="additional-text">{tool.description}</div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No Tools or Projects Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiToolsSection;


