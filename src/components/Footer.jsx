import React from "react";
import "./Footer.css"; // Ensure you have a CSS file for styles
import logo from '../assets/upm_logo/UPM_W4.png';
import facebook from '../assets/facbook_Icon.png';
import instagram from '../assets/footer_icons/footer_Instagram.png';
import reddit from '../assets/footer_icons/reddit.png';
import linkedin from '../assets/footer_icons/footer_linkedin.png';
import youtube from '../assets/footer_icons/footer_youtube.png';
import location_logo from '../assets/footer_icons/location_footer_icon.png';
import mail_logo from '../assets/footer_icons/circle_mail_logo.png';
import phone_logo from '../assets/footer_icons/Phone_footer_icon.png';
import service_icon from '../assets/footer_icons/Service_footer_icon.png';
import twitter_logo from '../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="footer" id="contactus">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <div className="contact-item">
            <i className="icon-location">
              <img className="footer_icons" src={service_icon} alt="Services Icon" />
            </i>
            <span className="company-location">
              <strong style={{ fontSize: '1.2rem', fontWeight:'500' }}>Services</strong>
              <br />
              <a href="/media" style={{ fontSize: '1.1rem', fontWeight: '470' }} className="footer-navigations">Media</a> |
              <a href="/marketing" style={{ fontSize: '1.1rem', fontWeight: '470' }} className="footer-navigations"> Marketing</a> |
              <a href="/consulting" style={{ fontSize: '1.1rem', fontWeight: '470' }} className="footer-navigations"> Consulting</a>
            </span>
          </div>
          <div className="contact-item">
            <i className="icon-email">
              <img className="footer_icons" src={mail_logo} alt="Mail Icon" />
            </i>
            <span>
              <a href="mailto:unknownpixelmedia@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                unknownpixelmedia@gmail.com
              </a>
            </span>
          </div>
          <div className="contact-item">
            <i className="icon-phone">
              <img className="footer_icons" src={phone_logo} alt="Phone Icon" />
            </i>
            <span className="company-location">
              <span style={{ fontWeight: '520' }}> North America, Australia, London:</span>  +1 604 704 1157
              <br />
              <span style={{ fontWeight: '520' }}> Eurpoe:</span>  +39-3455257046
              <br />
              <span style={{ fontWeight: '520' }}> Asia:</span>  +91-7696013691
            </span>
          </div>
          <div className="contact-item">
            <i className="icon-location">
              <img className="footer_icons" src={location_logo} alt="Location Icon" />
            </i>
            <span className="company-location">
              <span style={{ fontWeight: '520' }}>Head Office: </span> Toronto, Ontario, Canada.
            </span>
          </div>
        </div>
        <div className="footer-section company-info">
          <div className="social-links-footer">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/unknownpixelmedia/ " target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram Icon" className="social-icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61566675155483 " target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook Icon" className="social-icon" />
              </a>
              <a href="https://x.com/unknownpixelmed" target="_blank" rel="noopener noreferrer">
                <img src={twitter_logo} alt="Reddit Icon" className="social-icon" />
              </a>
              {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn Icon" className="social-icon" />
              </a>
              <a href="https://www.youtube.com/@UnknownPixelMedia" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube Icon" className="social-icon" />
              </a> */}
            </div>
          </div>
          <div className="footer-section legal">
            <img src={logo} alt="UPM Logo" className="footer-logo" />
            <div className="legal-links">
              <a href="#">Copyright</a>
            </div>
            <div className="legal-links">
              <a href="#">Terms of Use and Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
