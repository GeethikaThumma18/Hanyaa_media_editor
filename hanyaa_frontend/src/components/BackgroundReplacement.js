
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './BackgroundReplacement.css';
import backgroundVideo from './assets/Canva1.mp4'; 

const BackgroundReplacement = () => {
  const navigate = useNavigate(); 

  const handleTryNowClick = () => {
    navigate('/background-replacer'); 
  };

  return (
    <div className="BackgroundReplacement">
      <header>
        <h1>Background Replacement</h1>
      </header>
      <div className="contentGrid">
        <div className="videoContainer">
          <video src={backgroundVideo} autoPlay loop muted className="demoVideo"></video>
        </div>
        <div className="textContainer">
          <h2>Transform Your Scenes Effortlessly!!!</h2>
          <p>
            Imagine taking your photos and videos to the next level by swapping out the background with just a few clicks! 🎨
            Our Background Replacement feature allows you to easily replace any background with stunning new scenes, whether it's a tropical beach, a bustling cityscape, or a simple, elegant backdrop.
          </p>
          <p>
            How does it work? It's simple! 🚀 Just upload your image or video, choose the background you want, and let our advanced algorithms do the rest. In seconds, you'll have a professionally edited image that’s ready to impress! 🌟
          </p>
          <p>
            This feature is perfect for content creators, marketers, and anyone who wants to make their visuals stand out. Try it now and see the difference it can make! 📸
          </p>
        </div>
      </div>
      <div className="buttonContainer">
        <button onClick={handleTryNowClick} className="tryNowButton">Try Now</button>
      </div>
    </div>
  );
};

export default BackgroundReplacement;
