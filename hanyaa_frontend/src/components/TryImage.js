
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './TryImage.css';
import faceSwapImage from './assets/face-swap.png';

const TryImage = () => {
  const [selectedTab, setSelectedTab] = useState('imageFaceSwap');
  const [faceFile, setFaceFile] = useState(null);
  const [targetFile, setTargetFile] = useState(null);
  const [containerImage, setContainerImage] = useState(faceSwapImage);

  const faceInputRef = useRef(null);
  const targetInputRef = useRef(null);
  const navigate = useNavigate(); 

  const handleFaceFileChange = (event) => {
    const file = event.target.files[0];
    setFaceFile(file ? URL.createObjectURL(file) : null);
  };

  const handleTargetFileChange = (event) => {
    const file = event.target.files[0];
    setTargetFile(file ? URL.createObjectURL(file) : null);
  };

  const handleUploadClick = (fileType) => {
    if (fileType === 'face' && faceInputRef.current) {
      faceInputRef.current.click();
    } else if (fileType === 'target' && targetInputRef.current) {
      targetInputRef.current.click();
    }
  };

  const handleBackClick = () => {
    navigate('/faceswap');
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === 'videoFaceSwap') {
      navigate('/tryvideo');
    } else {
      navigate('/tryimage'); 
    }
  };

  return (
    <div className="FaceSwap">
      <header>
        <h1>Try FaceSwap with Image</h1>
      </header>
      <div className="tab-container">
        <div
          className={`tab ${selectedTab === 'imageFaceSwap' ? 'active' : ''}`}
          onClick={() => handleTabClick('imageFaceSwap')}
        >
          Photo Face Swap
        </div>
        <div
          className={`tab ${selectedTab === 'videoFaceSwap' ? 'active' : ''}`}
          onClick={() => handleTabClick('videoFaceSwap')}
        >
          Video Face Swap
        </div>
      </div>
      <main>
        <div className="description-container">
          <div className="image-container1">
            <img src={containerImage} alt="Left Content" />
          </div>
          <div className="text-container">
            <p>
              🌟 Elevate Your Photos with Face Swap Magic! 
              ✨Transform ordinary moments into extraordinary memories by seamlessly swapping faces with our cutting-edge technology.
              🎭 Experience the fun, creativity, and endless possibilities that will leave you and your friends in awe! 
              🌟Ready to make the switch? Dive into the world of face-swapping wonders today! 🌈❤
            </p>
          </div>
        </div>
        <div className="sections-container">
          <button 
            className="back-button"
            onClick={handleBackClick}
          >
            Back
          </button>
          <div className="upload-face-section">
            <h2>Upload Source</h2>
            <input
              type="file"
              id="face-upload"
              className="file-input"
              accept="image/*"
              style={{ display: 'none' }}
              ref={faceInputRef}
              onChange={handleFaceFileChange}
            />
            {faceFile && (
              <img
                src={faceFile}
                alt="Face Upload"
                className="uploaded-image"
              />
            )}
            <button 
              className="upload-face-button"
              onClick={() => handleUploadClick('face')}
            >
              Upload Face
            </button>
          </div>
          <div className="arrow-icon">
            <i className="fas fa-exchange-alt"></i>
          </div>
          <div className="upload-target-section">
            <h2>Upload Target</h2>
            <input
              type="file"
              id="target-upload"
              className="file-input"
              accept="image/*"
              style={{ display: 'none' }}
              ref={targetInputRef}
              onChange={handleTargetFileChange}
            />
            {targetFile && (
              <img
                src={targetFile}
                alt="Target Upload"
                className="uploaded-image"
              />
            )}
            <button 
              className="upload-target-button"
              onClick={() => handleUploadClick('target')}
            >
              Upload Target
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TryImage;
