import React from "react";
import "./MobileFooter.css";
import logo from "../assets/upm_logo/UPM_W4.png";
import facebook from "../assets/facbook_Icon.png";
import instagram from "../assets/footer_icons/footer_Instagram.png";
import reddit from "../assets/footer_icons/reddit.png";
import linkedin from "../assets/footer_icons/footer_linkedin.png";
import youtube from "../assets/footer_icons/footer_youtube.png";
import location_logo from "../assets/footer_icons/location_icon.png";
import mail_logo from "../assets/footer_icons/mail_icon.png";
import phone_logo from "../assets/footer_icons/Phone_Icon.png";
import service_icon from "../assets/footer_icons/service_icon.png";

const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      {/* Follow Us Section */}
      <div className="mobile-footer-follow-us">
        <h4>Follow Us</h4>
        <div className="mobile-footer-social-icons">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={reddit} alt="Reddit" />
          <img src={linkedin} alt="LinkedIn" />
          <img src={youtube} alt="YouTube" />
        </div>
      </div>

      {/* Contact and Services Section */}
      <div className="mobile-footer-main-content">
        <div className="mobile-footer-contact" style={{}}>
          <div className="contact-item">
            <img src={mail_logo} alt="Email" />
            <span>unknownpixelmedia@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={phone_logo} alt="Phone" />
            <span>
              <strong>North America, Australia, London:</strong> +1 604 704 1157
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
        <div className="mobile-footer-services" style={{flexDirection:'column',alignItems:'flex-end'}}>
          <img src={service_icon} alt="Services" />
          <span style={{textAlign:'right',display:'flex',flexDirection:'column',gap:'0.5rem'}}>
            <strong>Services</strong>
            <br />
            <a href="/media">Media</a><a href="/marketing">Marketing</a>{" "}
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
