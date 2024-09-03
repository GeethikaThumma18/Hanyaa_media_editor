
import React, { useEffect, useRef } from 'react';
import AiToolsSection from './AiToolsSection';
import './MainContent.css';
import videoSrc from './assets/video.mp4';
import backgroundImage from './assets/bg-image.jpg'; 
import { Carousel } from 'react-bootstrap';
 
const MainContent = () => {
  const videoRef = useRef(null);
 
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Video playback failed:', error);
        video.muted = true;
        video.play();
      });
    }
  }, []);
 
  return (
<div className="main-content">
<div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
<video
          className="banner-video"
          src={videoSrc}
          ref={videoRef}
          loop
          autoPlay
          muted
          playsInline
>
          Your browser does not support the video tag.
</video>
<div className="carousel-container">
<Carousel controls={false} indicators={false} interval={2000}>
<Carousel.Item>
<h3>Innovative Color Palette Generator</h3>
<p>"Discover and create stunning color combinations effortlessly, tailored for your design needs."</p>
</Carousel.Item>
<Carousel.Item>
<h3>Advanced Face Swap Technology</h3>
<p>"Seamlessly swap faces in images with high accuracy and precision, enhancing your photo editing capabilities."</p>
</Carousel.Item>
<Carousel.Item>
<h3>Cutting-Edge Background Replacement</h3>
<p>"Easily change and customize the background of your images, making them more dynamic and visually appealing."</p>
</Carousel.Item>
</Carousel>
</div>
<div className="ai-tools-section">
<AiToolsSection />
</div>
</div>
</div>
  );
};
 
export default MainContent;