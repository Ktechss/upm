import React from "react";
import "./Footer.css"; // Ensure you have a CSS file for styles
import logo from '../assets/upm_logo/UPM_W4.png';
import facebook from '../assets/facbook_Icon.png';
import location_logo from '../assets/footer_icons/location_icon.png'
import mail_logo from '../assets/footer_icons/mail_icon.png'
import phone_logo from '../assets/footer_icons/Phone_Icon.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <div className="contact-item">
            < i className="icon-email">
                <img className="footer_icons" src={mail_logo}/>
            </i>
            <span>digital@wetafx.co.nz</span>
          </div>
          <div className="contact-item">
            <i className="icon-phone">
            <img className="footer_icons" src={phone_logo}/>
            </i>
            <span className="company-location">
              <span style={{fontWeight:'bold'}}> Tel:</span> +64 4 909 6000 <span style={{fontWeight:'bold'}}> Fax:</span> +64 4 380 9010
              <br />
              <small>To call New Zealand from the United States, dial 01164 4 909 6000</small>
            </span>
          </div>
          <div className="contact-item">
            <i className="icon-location">
            <img className="footer_icons" src={location_logo}/>
            </i>
            <span className="company-location">
              <strong  style={{fontSize:'1.2rem'}}>Unknown Pixel Media</strong>
              <br />
              <span style={{fontWeight:'bold'}}>Postal Address:</span> PO Box 15186, Miramar, Wellington 6243, New Zealand
              <br />
              <span style={{fontWeight:'bold'}}>Physical Address:</span> 127 Wexford Rd, Miramar, Wellington 6022, New Zealand
            </span>
          </div>
        </div>
        <div className="footer-section company-info">
            <div className="footer-section social-links-footer">
                <h4>Follow Us</h4>
                <div className="social-icons">
                    <i className="icon-youtube">
                    <img src={mail_logo}/>
                    </i>
                    <i className="icon-linkedin">
                    <img src={mail_logo}/>
                    </i>
                    <i className="icon-facebook">
                    <img src={facebook}/>
                    </i>
                    <i className="icon-twitter">
                    <img src={facebook}/>
                    </i>
                    <i className="icon-instagram">
                    <img src={facebook}/>
                    </i>
                </div>
            </div>
            <div className="footer-section legal">
            <img src={logo} alt="UPM Logo" className="footer-logo" />
            <div className="legal-links">
                <a href="#">Copyright</a>
                <a href="#">Terms of Use and Privacy</a>
            </div>
            </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
