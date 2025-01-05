import React from "react";
import "./Footer.css"; // Ensure you have a CSS file for styles
import logo from '../assets/upm_logo/UPM_W4.png';
import facebook from '../assets/facbook_Icon.png';
import instagram from '../assets/footer_icons/footer_Instagram.png';
import reddit from '../assets/footer_icons/reddit.png';
import linkedin from '../assets/footer_icons/footer_linkedin.png';
import youtube from '../assets/footer_icons/footer_youtube.png';
import location_logo from '../assets/footer_icons/location_icon.png'
import mail_logo from '../assets/footer_icons/mail_icon.png'
import phone_logo from '../assets/footer_icons/Phone_Icon.png'
import service_icon from '../assets/footer_icons/service_icon.png';


const Footer = () => {
  return (
    <footer className="footer" id="contactus">
      <div className="footer-container">
        <div className="footer-section contact-info">
        <div className="contact-item">
            <i className="icon-location">
            <img className="footer_icons" src={service_icon}/>
            </i>
            <span className="company-location">
              <strong  style={{fontSize:'1.2rem'}}>Services</strong>
              <br />
              <a href="/media" style={{fontSize:'1.1rem',fontWeight:'520'}} className="footer-navigations">Media</a> | 
              <a href="/marketing" style={{fontSize:'1.1rem',fontWeight:'520'}} className="footer-navigations"> Marketing</a> | 
              <a href="/consulting" style={{fontSize:'1.1rem',fontWeight:'520'}} className="footer-navigations"> Consulting</a>
            </span>
          </div>
          <div className="contact-item">
            < i className="icon-email">
              <img className="footer_icons" src={mail_logo} />
            </i>
            <span>unknownpixelmedia@gmail.com </span>
          </div>
          <div className="contact-item">
            <i className="icon-phone">
              <img className="footer_icons" src={phone_logo} />
            </i>
            <span className="company-location">
              <span style={{ fontWeight: '520' }}> North America, Australia, London:</span>  +1 604 704 1157
              <br />
              <span style={{ fontWeight: '520' }}> Asia:</span>  +91-7696013691
            </span>
          </div>
          <div className="contact-item">
            <i className="icon-location">
              <img className="footer_icons" src={location_logo} />
            </i>
            <span className="company-location">
              <span style={{ fontWeight: '520' }}>Head Office: </span> Toronto, Ontario, Canada.
            </span>
          </div>
        </div>
        <div className="footer-section company-info">
          <div className="footer-section social-links-footer">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <i className="icon-youtube">
                <img src={instagram} />
              </i>
              <i className="icon-linkedin">
                <img src={facebook} />
              </i>
              <i className="icon-facebook">
                <img src={reddit} />
              </i>
              <i className="icon-twitter">
                <img src={linkedin} />
              </i>
              <i className="icon-instagram">
                <img src={youtube} />
              </i>
            </div>
          </div>
          <div className="footer-section legal">
            <img src={logo} alt="UPM Logo" className="footer-logo" />
            <div className="legal-links">
              <a href="#">Copyright</a>
              {/* <a href="#">Terms of Use and Privacy</a> */}
            </div>
            <div className="legal-links">
              {/* <a href="#">Copyright</a> */}
              <a href="#">Terms of Use and Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
