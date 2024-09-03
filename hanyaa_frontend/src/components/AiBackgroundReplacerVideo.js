
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AiBackgroundReplacerVideo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes } from 'react-icons/fa'; 
import video1 from './assets/Input video 1.mp4';
import video2 from './assets/output video 2 1.mp4';

const AiBackgroundReplacerVideo = () => {
  const [selectedTab, setSelectedTab] = useState('video');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoName, setVideoName] = useState('');
  const [loading, setLoading] = useState(false); 
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === 'image') {
      navigate('/background-replacer'); 
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true); 
      const videoURL = URL.createObjectURL(file);
      setSelectedVideo(videoURL);
      setVideoName(file.name);
      setLoading(false); 
    }
  };

  const handleCancelClick = () => {
    setSelectedVideo(null);
    setVideoName('');
  };

  return (
    <div className="bgr-video">
      <header>
        <h1>Background Replacement with Video</h1>
      </header>
     

       <div className="tab-container">
        <div
          className={`tab ${selectedTab === 'image' ? 'active' : ''}`}
          onClick={() => handleTabClick('image')}
        >
          Image Background Replacement
        </div>
        <div
          className={`tab ${selectedTab === 'video' ? 'active' : ''}`}
          onClick={() => setSelectedTab('video')}
        >
          Video Background Replacement
        </div>
      </div> 


      <div className="description-section">
        <p>
        ✨ "Transform Your Videos Like Never Before!" ✨
        Elevate your content with our state-of-the-art AI technology! Whether you're working on a professional project or just creating something fun, our tool ensures seamless, high-quality results every time. 🌟
        </p>
      </div> 


      <header>
        <p className="instruction-text">
        🎥 Ready to witness the magic?
Simply upload your video below and let our AI work its wonders! Compare the before and after side by side and see how effortlessly you can replace backgrounds with just a few clicks. Your creative possibilities are endless! 🚀


        </p>
      </header>


      <div className="video-preview-section">
        <div className="video-preview-container">
          <video
            src={video1}
            className="video-preview"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="video-preview-container">
          <video
            src={video2}
            className="video-preview"
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      <div className="upload-section">
        <div className="upload-box">
          {loading ? (
            <div className="loading-spinner"></div> 
          ) : selectedTab === 'video' && selectedVideo ? (
            <div className="uploaded-video-container">
              <video 
                src={selectedVideo} 
                className="uploaded-video"
                autoPlay
                loop
                muted
              />
              <div className="file-name-container">
                <p className="file-name">{videoName}</p>
                <FaTimes className="cancel-icon" onClick={handleCancelClick} />
              </div>
            </div>
          ) : (
            selectedTab === 'video' && (
              <div className="upload-text">
                <p>Drag and drop video here</p>
                <p className="supported-formats">
                  MP4, AVI, MOV
                </p>
              </div>
            )
          )}
          <button 
            className="custom-upload-button"
            onClick={handleUploadClick}
          >
            Upload Video
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept="video/*"
          />
        </div>
      </div>
    </div>
  );
};

export default AiBackgroundReplacerVideo;
