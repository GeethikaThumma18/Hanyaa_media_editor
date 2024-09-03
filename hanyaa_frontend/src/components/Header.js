
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = ({ onLogout, onSearch }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showUserCard, setShowUserCard] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const userCardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userCardRef.current && !userCardRef.current.contains(event.target)) {
        setShowUserCard(false);
      }
    };

    if (showUserCard) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserCard]);

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setShowUserCard(false);
    onLogout();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="header">
      <div className="home-text">HANYAA</div>
     
      {isLoggedIn && (
        <div className="user-section">
          <div
            className="login-indicator"
            onClick={() => setShowUserCard(!showUserCard)}
          >
            H
          </div>
          {showUserCard && (
            <div className="user-card" ref={userCardRef}>
              <div className="card-login-indicator">H</div>
              <div className="username">HANYAA</div>
              

              <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
