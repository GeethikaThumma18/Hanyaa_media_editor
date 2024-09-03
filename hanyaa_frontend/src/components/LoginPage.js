
// import React, { useState } from 'react';
// import './LoginPage.css';
// import backgroundImage from './assets/color.jpg'; 

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const defaultUsername = 'Hanyaa';  
//   const defaultPassword = 'Hanyaa@4'; 

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === defaultUsername && password === defaultPassword) {
//       onLogin(); 
//     } else {
//       alert('Invalid username or password'); 
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-form-container">
//         <form onSubmit={handleLogin} className="login-form">
//           <h2>Login</h2>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;





// import React, { useState } from 'react';
// import './LoginPage.css';
// import backgroundImage from './assets/color.jpg';
// import logoImage from './assets/logo.svg'; // Make sure to import your SVG image

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const defaultUsername = 'Hanyaa';
//   const defaultPassword = 'Hanyaa@4';

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === defaultUsername && password === defaultPassword) {
//       onLogin();
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-form-container">
//         <img src={logoImage} alt="Logo" className="logo-image" />
//         <form onSubmit={handleLogin} className="login-form">
//           {/* <h2>Login</h2> */}
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// import React, { useState } from 'react';
// import './LoginPage.css';
// import backgroundImage from './assets/color.jpg';
// import logoImage from './assets/logo.svg'; 
// import {useNavigate} from 'react-router-dom';
// import axios from 'axios';

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('Hanyaa');
//   const [password, setPassword] = useState('Hanyaa@4');
//   const [] = 'Hanyaa';
//   const defaultPassword = 'Hanyaa@4';

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === defaultUsername && password === defaultPassword) {
//       onLogin();
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-form-container">
//         <img src={logoImage} alt="Logo" className="logo-image" />
//         <form onSubmit={handleLogin} className="login-form">
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit"><b>LOGIN</b></button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './LoginPage.css';
// import backgroundImage from './assets/color.jpg';
// import logoImage from './assets/logo.svg';
 
// const LoginPage = ({ onLogin }) => {
//   // const [username, setUsername] = useState('Hanyaa');
//   // const [password, setPassword] = useState('Hanyaa@4');
//   const [username, setUsername] = useState('Hanyaa');
//   const [password, setPassword] = useState('Hanyaa@4');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
 
//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     try {
//       const response = await axios.post('http://localhost:8000/api/token/', {
//         username,
//         password,
//       });
 
//       localStorage.setItem('access', response.data.access);
//       localStorage.setItem('refresh', response.data.refresh);
 
//       onLogin(); // Update the authentication state in App.js
//       navigate('/home');
//     } catch (error) {
//       console.error('Login failed:', error); // Log error for debugging
//       setError('Invalid username or password');
//     }
//   };
 
//   return (
//     <div className="login-page">
//       <div className="login-form-container">
//         <img src={logoImage} alt="Logo" className="logo-image" />
//         <form onSubmit={handleLogin} className="login-form">
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit"><b>LOGIN</b></button>
//         </form>
//       </div>
//     </div>
//   );
// };
 
// export default LoginPage;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import backgroundImage from './assets/color.jpg';
import logoImage from './assets/logo.svg';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('Hanyaa@');
  const [password, setPassword] = useState('Hanyaa@4');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username,
        password,
      });

      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);

      onLogin();
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error.response || error);  
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit"><b>LOGIN</b></button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </div>
    </div>
  );
};

export default LoginPage;
