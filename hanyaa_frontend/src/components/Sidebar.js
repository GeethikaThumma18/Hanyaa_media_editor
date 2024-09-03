
import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { FaHome, FaPalette, FaExchangeAlt, FaImage, FaQuestionCircle, FaGavel } from 'react-icons/fa';
import './Sidebar.css';
import sidebarLogo from './assets/Normal1.png'; 
 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={sidebarLogo} alt="Sidebar Logo" className="sidebar-logo" />
      </div>
      <div className="sidebar-links">
        <NavLink exact to="/" activeClassName="active">
          <FaHome className="icon" /> Home
        </NavLink>
        <NavLink to="/colorpalette" activeClassName="active">
          <FaPalette className="icon" /> Color Palette
        </NavLink>
        <NavLink to="/faceswap" activeClassName="active">
          <FaExchangeAlt className="icon" /> Face Swap
        </NavLink>
        <NavLink to="/backgroundreplacement" activeClassName="active">
          <FaImage className="icon" /> Background Replacement
        </NavLink>

      </div>
      <div className="sidebar-footer">
        <NavLink to="/help" activeClassName="active">
          <FaQuestionCircle className="icon" /> Help Center
        </NavLink>
        <NavLink to="/terms" activeClassName="active">
          <FaGavel className="icon" /> Terms of Use and Privacy Policy
        </NavLink>
      </div>
    </div>
  );
};
 
export default Sidebar;
