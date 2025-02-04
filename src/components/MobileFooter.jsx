import React from "react";
import "./MobileFooter.css";
import logo from "../assets/upm_logo/UPM_W4.png";
import facebook from "../assets/facbook_Icon.png";
import instagram from "../assets/footer_icons/footer_Instagram.png";
import reddit from "../assets/footer_icons/reddit.png";
import linkedin from "../assets/footer_icons/footer_linkedin.png";
import youtube from "../assets/footer_icons/footer_youtube.png";
import location_logo from "../assets/footer_icons/location_footer_icon.png";
import mail_logo from "../assets/footer_icons/circle_mail_logo.png";
import phone_logo from "../assets/footer_icons/Phone_footer_icon.png";
import service_icon from "../assets/footer_icons/Service_footer_icon.png";
import twitter_logo from '../assets/twitter.svg';

const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      {/* Follow Us Section */}
      <div className="mobile-footer-follow-us">
        <h4>Follow Us</h4>
        <div className="mobile-footer-social-icons">
         <a href="https://www.facebook.com/profile.php?id=61566675155483"><img src={facebook} alt="Facebook" /></a>
         <a href="https://www.instagram.com/unknownpixelmedia/"><img src={instagram} alt="Instagram" /></a>
         <a href="https://x.com/unknownpixelmed" className="inverted-icon"> <img src={twitter_logo} alt="twitter"  /></a>
         {/* <a href=""><img src={linkedin} alt="LinkedIn" /></a>
         <a href=""><img src={youtube} alt="YouTube" /></a> */}
        </div>
      </div>

      {/* Contact and Services Section */}
      <div className="mobile-footer-main-content">
        <div className="mobile-footer-contact">
          <div className="contact-item">
            <img src={mail_logo} alt="Email" />
            <span>
              <a href="mailto:info@unknownpixelmedia.com" style={{ textDecoration: "none", color: "inherit" }}>
              info@unknownpixelmedia.com
              </a>
            </span>
          </div>
          <div className="contact-item">
            <img src={phone_logo} alt="Phone" />
            <span>
              <strong>North America, Australia, London:</strong> +1 604 704 1157
              <br />
              <span style={{ fontWeight: '520' }}> Eurpoe:</span>  +39-3455257046
              <br />
              <strong>Asia:</strong> +91-7696013691
            </span>
          </div>
          <div className="contact-item">
            <img src={location_logo} alt="Location" />
            <span>
              <strong>Head Office:</strong> Toronto, Ontario, Canada.
            </span>
          </div>
        </div>
        <div className="mobile-footer-services" style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <img src={service_icon} alt="Services" />
          <span style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <strong>Services</strong>
            <br />
            <a href="/media">Media</a>
            <a href="/marketing">Marketing</a>
            <a href="/consulting">Consulting</a>
          </span>
        </div>
      </div>

      {/* Logo and Legal Section */}
      <div className="mobile-footer-logo">
        <img src={logo} alt="UPM Logo" />
      </div>
      <div className="mobile-footer-legal">
        <p>&copy; 2025 Unknown Pixel Media. All Rights Reserved.</p>
        <a href="#">Terms of Use and Privacy</a>
      </div>
    </footer>
  );
};

export default MobileFooter;
