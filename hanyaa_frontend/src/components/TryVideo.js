
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './TryVideo.css';
import faceSwapImage from './assets/video.png';

const TryVideo = () => {
  const [selectedTab, setSelectedTab] = useState('videoFaceSwap');
  const [videoFile, setVideoFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [progress, setProgress] = useState(0);  
  const navigate = useNavigate();  

  const handleTabClick = (tab) => {
    if (tab === 'photoFaceSwap') {
      navigate('/tryimage');   
    } else {
      setSelectedTab(tab);
    }
  };

  const handleVideoUpload = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handlePhotoUpload = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const handleProgressChange = (e) => {
    setProgress(parseFloat(e.target.value));
  };

  const handleProcess = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 0.01; 
      if (progressValue >= 1) {
        progressValue = 1;
        clearInterval(interval);
      }
      setProgress(progressValue);
    }, 100); 
  };

  const renderPreview = (file, type) => {
    if (!file) return null;

    const fileURL = URL.createObjectURL(file);
    const fileName = file.name;

    const handleRemoveFile = () => {
      if (type === 'image') {
        setPhotoFile(null);
      } else {
        setVideoFile(null);
        setProgress(0);  
      }
    };

    return (
      <div className="file-preview">
        {type === 'image' ? (
          <img src={fileURL} alt="Preview" className="file-preview-image" />
        ) : (
          <video src={fileURL} className="file-preview-image" controls />
        )}
        <div className="file-info">
          <p className="file-name">{fileName}</p>
          <button className="cancel-icon" onClick={handleRemoveFile}>
            &times;
          </button>
        </div>
        {type === 'video' && (
          <div className="progress-section">
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${progress * 100}%` }}
              ></div>
            </div>
            <div className="progress-label">{(progress * 100).toFixed(0)}%</div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={progress}
              onChange={handleProgressChange}
              className="progress-slider"
            />
            <button className="process-button" onClick={handleProcess}>
              Process
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="TryVideo">
      <header>
        <h1>Try FaceSwap with Video</h1>
      </header>

      <div className="tab-container">
        <div
          className={`tab ${selectedTab === 'photoFaceSwap' ? 'active' : ''}`}
          onClick={() => handleTabClick('photoFaceSwap')}
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

      <div className="content-try">
        <div className="face-swap-section-try">
          <div className="video-content-info">
            <h2>🎬 FaceSwap with Video</h2>
            <p>🚀 Transform your videos with a touch of magic! Upload your <strong>source video</strong> and <strong>target face image</strong> to create a stunning face swap. Watch as AI seamlessly integrates the target face into your video, bringing your wildest ideas to life. 🌟</p>
            <p>Whether it's for fun, memes, or just a cool effect, this tool will give your video a brand-new look! Just follow the steps below to get started. 📽️✨</p>
          </div>
          <img
            src={faceSwapImage} 
            alt="Target"
            className="image"
          />
        </div>

        <div className="upload-section-try">
          <div className="card">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <p>📹 Upload a video with a face (Source video)</p>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  id="videoUpload"
                  style={{ display: 'none' }}
                />
                <button
                  className="upload-button"
                  onClick={() => document.getElementById('videoUpload').click()}
                >
                  Upload Video
                </button>
                {renderPreview(videoFile, 'video')}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <p>🖼️ Upload a photo with a face (Target face image)</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  id="photoUpload"
                  style={{ display: 'none' }}
                />
                <button
                  className="upload-button"
                  onClick={() => document.getElementById('photoUpload').click()}
                >
                  Upload Photo
                </button>
                {renderPreview(photoFile, 'image')}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="step">
              <div className="step-number">3</div>
              <button className="swap-button">Swap Face</button>
              <div className="quality-toggle">
                <input type="checkbox" id="highQuality" />
                <label htmlFor="highQuality">High quality (1080P)</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="disclaimer">
        <i className="fas fa-exclamation-circle"></i> Disclaimer: This face swap service is for personal entertainment only. Please do not distribute or use the modified videos and images for illegal purposes.
      </p>
    </div>
  );
};

export default TryVideo;
