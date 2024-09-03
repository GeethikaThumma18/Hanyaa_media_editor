// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const Fs = () => {
//   const navigate = useNavigate();

//   const handleTryNowClick = () => {
//     navigate('/tryfs'); // Navigate to a route where users can try the FS tool
//   };

//   return (
//     <div className="fs-page">
//       <header>
//         <h1>FS Tool</h1>
//       </header>
//       <main>
//         <p>
//           The FS Tool is designed to enhance your workflow with advanced features.
//           It provides seamless integration with your existing projects and offers
//           a variety of customization options to meet your needs.
//         </p>
//         <button onClick={handleTryNowClick} className="try-now-button">Try Now</button>
//       </main>
//     </div>
//   );
// };

// export default Fs;




// import React from 'react';
// import { useNavigate } from 'react-router-dom';
//  import './FaceSwap.css'; 
// import image1 from './assets/bg-image.jpg'; 
// import image2 from './assets/bg-image.jpg'; 
// import video1 from './assets/orange-input.mp4'; 
// import video2 from './assets/orange_output_1.mp4'; 


// const Fs = () => {
//   const navigate = useNavigate();
//   const handleImageClick = () => {
//         navigate('/tryimage');
//       };
    
//       const handleVideoClick = () => {
//         navigate('/tryvideo');
//       };
    
//       return (
//         <div className="faceswap-page">
//           <header>
//             <h1>FaceSwap</h1>
//           </header>
//           <main>
//             <p>
//               FaceSwap AI is an advanced image and video processing tool that leverages deep learning algorithms to seamlessly swap faces in photos and videos. 
//               It ensures realistic and high-quality transformations by maintaining facial expressions and skin tones. The module supports both image and video 
//               inputs, making it versatile for various applications. Users can easily upload their files and experience instant face-swapping results. This 
//               technology is ideal for entertainment, content creation, and enhancing visual effects in media.
//             </p>
            
//             <div className="faceswap-section">
//               <h2>FaceSwap with Image</h2>
//               <p>FaceSwap with Image allows you to upload a photo and swap faces within the image. This feature uses advanced facial recognition and blending 
//               techniques to ensure that the swapped faces look natural and maintain the original expressions. It's perfect for creating fun and engaging images 
//               for social media, photo collages, and more.</p>
//               <div className="image-container">
//                 <img src={image1} alt="Example 1" className="faceswap-image" />
//                 <img src={image2} alt="Example 2" className="faceswap-image" />
//               </div>
//               <button onClick={handleImageClick}>Try with Image</button>
//             </div>
            
//             <div className="faceswap-section">
//               <h2>FaceSwap with Video</h2>
//               <p>FaceSwap with Video enables you to upload a video and swap faces within the footage. This feature is powered by sophisticated video processing 
//               algorithms that ensure smooth and realistic face swaps, even with moving subjects. It's ideal for creating entertaining videos, enhancing video 
//               content, and exploring creative video projects.</p>
//               <div className="video-container">
//                 <video src={video1} controls className="faceswap-video" />
//                 <video src={video2} controls className="faceswap-video" />
//               </div>
//               <button onClick={handleVideoClick}>Try with Video</button>
//             </div>
//           </main>
//         </div>
//       );
//     };
    
    


// export default Fs;