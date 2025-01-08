import React, { useState } from 'react';
import './MobileHeader.css';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileHeader = ({ logo, navigationLinks, socialIcons }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (event, link) => {
    if (link.href.startsWith('#')) {
      if (location.pathname === '/') {
        event.preventDefault();
        const section = document.querySelector(link.href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { target: link.href } });
      }
    } else {
      navigate(link.href);
    }

    setIsMenuOpen(false); // Close the menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isWhiteBackground = location.pathname !== '/';
  const backgroundColor = isWhiteBackground ? 'white' : 'black';
  const textColor = isWhiteBackground ? 'black' : 'white';

  return (
    <header className="mobile-header-container">
      <div className="mobile-header-content">
        <div className="logo">
          <img src={logo} className="mobile-logo" alt="Logo" />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div
            className={`line ${isMenuOpen ? 'open' : ''}`}
            style={{ backgroundColor: textColor }}
          ></div>
          <div
            className={`line ${isMenuOpen ? 'open' : ''}`}
            style={{ backgroundColor: textColor }}
          ></div>
          <div
            className={`line ${isMenuOpen ? 'open' : ''}`}
            style={{ backgroundColor: textColor }}
          ></div>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="mobile-navigation"
          style={{ backgroundColor: backgroundColor, color: textColor }}
        >
          <ul className="mobile-nav-links">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  style={{ color: textColor }}
                  onClick={(event) => handleNavigation(event, link)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-social-icons">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                aria-label={icon.label}
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  src={icon.icon}
                  alt={icon.label}
                  className="social-icon"
                  style={{ filter: isWhiteBackground ? 'none' : 'invert(1)' }}
                />
              </a>
            ))}
          </div>
          <div
            className="close-button-circle"
            style={{
              borderColor: textColor,
              color: textColor,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="close-button">X</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;
