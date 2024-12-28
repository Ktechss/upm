import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = ({ logo, navigationLinks, socialIcons }) => {
    const location=useLocation();
    
  return (
    <header className="header-container">
      <div className="logo">
        <img src={logo} className="upm_logo" alt="UPM Logo" />
      </div>
      <nav className="navigation">
        <ul>
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="nav-buttons" style={
                location.pathname != "/" ? {color: "black"} : {color: "white"}
              }>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="social-icons">
        {socialIcons.map((icon, index) => (
          <a key={index} href={icon.href} aria-label={icon.label}>
            <img src={icon.icon} alt={icon.label} className="social-icon" />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
