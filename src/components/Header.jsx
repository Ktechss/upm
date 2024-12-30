import React from 'react';
import './Header.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ logo, navigationLinks, socialIcons }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (event, link) => {
    if (link.href.startsWith('#')) {
      // If already on the home page, scroll to the section
      if (location.pathname === '/') {
        event.preventDefault();
        const section = document.querySelector(link.href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to the home page with section information
        navigate('/', { state: { target: link.href } });
      }
    } else {
      // Navigate normally for other links
      navigate(link.href);
    }
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img src={logo} className="upm_logo" alt="UPM Logo" />
      </div>
      <nav className="navigation">
        <ul>
          {navigationLinks.map((link, index) => (
            <li key={index} className='nav-buttons'>
              <a
                href={link.href}
                className="nav-buttons"
                style={location.pathname !== '/' ? { color: 'black' } : { color: 'white' }}
                onClick={(event) => handleNavigation(event, link)}
              >
                {link.label}
              </a>
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
