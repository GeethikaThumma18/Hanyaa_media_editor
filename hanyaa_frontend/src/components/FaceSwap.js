
//old version


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './FaceSwap.css'; 
// import image1 from './assets/bg-image.jpg'; 
// import image2 from './assets/bg-image.jpg'; 
// import video1 from './assets/orange-input.mp4'; 
// import video2 from './assets/orange_output_1.mp4'; 
// import backgroundImage from './assets/white-bg.jpg'; 

// const FaceSwap = () => {
//   const navigate = useNavigate();

//   const handleImageClick = () => {
//     navigate('/tryimage');
//   };

//   const handleVideoClick = () => {
//     navigate('/tryvideo');
//   };

//   return (
//     <div className="faceswap-page">
//       <header>
//         <h1>FaceSwap</h1>
//       </header>
//       <main>
//         <p>
//           <span className="highlight">FaceSwap AI</span> 🌟 is a cutting-edge image and video processing tool that harnesses the power of advanced deep learning algorithms to perform seamless face swaps in both photos and videos. 🤖✨

//           With <span className="highlight">FaceSwap AI</span>, you can achieve incredibly realistic transformations, preserving natural facial expressions and skin tones for a flawless result. 🎭💫 Whether you're looking to create fun content or explore innovative visual effects, <span className="highlight">FaceSwap AI</span> ensures that your face-swapping experience is smooth and high-quality. 📸🎥
//         </p>
        
//         <div className="faceswap-section">
//           <h2>FaceSwap with Image</h2>
//           <p><span className="highlight"> FaceSwap with Image</span> 📸✨ lets you effortlessly upload a photo and swap faces within it. Leveraging sophisticated facial recognition and blending techniques, this feature ensures that the swapped faces blend seamlessly, preserving natural expressions and skin tones. 😄🔄

//             Ideal for creating captivating and fun images, FaceSwap with Image is perfect for spicing up your social media posts, crafting unique photo collages, and much more. 🎨📷
//           </p>
//           <div className="image-container">
//             <img src={image1} alt="Example 1" className="faceswap-image" />
//             <img src={image2} alt="Example 2" className="faceswap-image" />
//           </div>
//           <button onClick={handleImageClick}>Try with Image</button>
//         </div>
        
//         <div className="faceswap-section">
//           <h2>FaceSwap with Video</h2>
//           <p> <span className="highlight"> FaceSwap with Video</span>🎥🔄 lets you upload a video and perform seamless face swaps within the footage. Powered by cutting-edge video processing algorithms, this feature delivers smooth and realistic face transformations, even with moving subjects. 🌟👥

//             Perfect for creating entertaining and dynamic videos, enhancing your video content, and exploring creative video projects, FaceSwap with Video adds a new level of fun and innovation to your visual content. 🎬✨
//           </p>
//           <div className="video-container">
//             <video src={video1} controls className="faceswap-video" />
//             <video src={video2} controls className="faceswap-video" />
//           </div>
//           <button onClick={handleVideoClick}>Try with Video</button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default FaceSwap;



//canvas template in js version


// import React from 'react';
// import './FaceSwap.css';

// const FaceSwap = () => {
//   return (
//     <div className="faceswap-container">
//       <div className="header">
//         <h2>FaceSwap with Image</h2>
//       </div>
//       <div className="content">
//         <div className="description">
//           <p>
//             <strong>FaceSwap with Image </strong>
//             <span role="img" aria-label="camera">📷</span>
//             <span role="img" aria-label="star">✨</span> lets you effortlessly upload a photo and swap faces within it. Leveraging sophisticated facial recognition and blending techniques, this feature ensures that the swapped faces blend seamlessly, preserving natural expressions and skin tones. 
//             <span role="img" aria-label="cool">😎</span>
//             <span role="img" aria-label="smiling face with halo">😇</span> Ideal for creating captivating and fun images, <strong>FaceSwap with Image</strong> is perfect for spicing up your social media posts, crafting unique photo collages, and much more.
//             <span role="img" aria-label="thinking face">🤔</span>
//             <span role="img" aria-label="camera">📷</span>
//           </p>
//         </div>
//         <div className="images">
//           <img 
//             src={require('./assets/Ram3.JPG')} 
//             alt="Swapped Face 1" 
//             className="image-large" 
//           />
//           <div className="image-grid">
//             <img 
//               src={require('./assets/mahesh-babu-8.webp')} 
//               alt="Swapped Face 2" 
//               className="image-small" 
//             />
//             <img 
//               src={require('./assets/Wp8sF0rZ.jpg')} 
//               alt="Swapped Face 3" 
//               className="image-small" 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaceSwap;



//USING CANVAS-IMAGE


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FaceSwap.css'; 
import additionalImage from './assets/fs-img-canva.png'; 
import video1 from './assets/orange-input.mp4'; 
import video2 from './assets/orange_output_1.mp4'; 

const FaceSwap = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/tryimage');
  };

  const handleVideoClick = () => {
    navigate('/tryvideo');
  };

  return (
    <div className="faceswap-page">
      <header>
        <h1>FaceSwap</h1>
      </header>
      <main>
        <p>
          <span className="highlight">FaceSwap AI</span> 🌟 is a cutting-edge image and video processing tool that harnesses the power of advanced deep learning algorithms to perform seamless face swaps in both photos and videos. 🤖✨

          With <span className="highlight">FaceSwap AI</span>, you can achieve incredibly realistic transformations, preserving natural facial expressions and skin tones for a flawless result. 🎭💫 Whether you're looking to create fun content or explore innovative visual effects, <span className="highlight">FaceSwap AI</span> ensures that your face-swapping experience is smooth and high-quality. 📸🎥
        </p>
        
        <div className="faceswap-section">
          <div className="image-container">
            <img src={additionalImage} alt="Additional Example" className="faceswap-image" /> 
            <button onClick={handleImageClick} className="faceswap-button">Try with Image</button>
          </div>
        </div>
        
        <div className="faceswap-section">
          <h2>FaceSwap with Video</h2>
          <p> <span className="highlight">FaceSwap with Video</span>🎥🔄 lets you upload a video and perform seamless face swaps within the footage. Powered by cutting-edge video processing algorithms, this feature delivers smooth and realistic face transformations, even with moving subjects. 🌟👥

            Perfect for creating entertaining and dynamic videos, enhancing your video content, and exploring creative video projects, FaceSwap with Video adds a new level of fun and innovation to your visual content. 🎬✨
          </p>
          <div className="video-container">
            <video src={video1} controls className="faceswap-video" />
            <video src={video2} controls className="faceswap-video" />
          </div>
          <button onClick={handleVideoClick}>Try with Video</button>
        </div>
      </main>
    </div>
  );
};

export default FaceSwap;
