


import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AiBackgroundReplacer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes } from 'react-icons/fa'; 
import highResImage from './assets/bgr-image.jpg'; 
import highResVideo from './assets/Canva-text.mp4'; 

const AiBackgroundReplacer = () => {
  const [selectedTab, setSelectedTab] = useState('photo');
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === 'photo') {
      navigate('/background-replacer');
    } else if (tab === 'video') {
      navigate('/background-replacer-video');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelClick = () => {
    setSelectedImage(null);
    setFileName('');
  };

  return (
    <div className="bgr">
      <header>
        <h1>Background Replacement with Image</h1>
      </header>
      <div className="tab-container">
        <div
          className={`tab ${selectedTab === 'photo' ? 'active' : ''}`}
          onClick={() => handleTabClick('photo')}
        >
          Image Background Replacement
        </div>
        <div
          className={`tab ${selectedTab === 'video' ? 'active' : ''}`}
          onClick={() => handleTabClick('video')}
        >
          Video Background Replacement
        </div>
      </div>
      <div className="image-video-container"> 
        <img src={highResImage} alt="High-Res Background" className="example-image" /> 
        <video src={highResVideo} autoPlay loop muted className="example-video" />
      </div>
      <div className="container">
        <div className="content">
          <div className="upload-section">
            <div className="upload-box">
              {selectedImage ? (
                <div className="uploaded-image-container">
                  <img 
                    src={selectedImage} 
                    alt="Uploaded Preview" 
                    className="uploaded-image"
                  />
                  <div className="file-name-container">
                    <p className="file-name">{fileName}</p>
                    <FaTimes className="cancel-icon" onClick={handleCancelClick} />
                  </div>
                </div>
              ) : (
                <div className="upload-text">
                  <p>Drag and drop images here</p>
                  <p className="supported-formats">
                    JPG, PNG, JPEG, WEBP
                  </p>
                </div>
              )}
              <button 
                className="custom-upload-button"
                onClick={handleUploadClick}
              >
                Upload
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiBackgroundReplacer;
