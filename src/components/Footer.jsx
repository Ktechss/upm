import React, { useState } from "react";
import "./Footer.css"; // Ensure you have a CSS file for styles
import LegalModal from "./legal/LegalModal"; // Import modal for Terms & Privacy Policy
import { socialLinks } from "../links";
import logo from "../assets/upm_logo/UPM_W4.png";
import linkedin from '../assets/linkedin-in-brands.svg';
import facebook from "../assets/facbook_Icon.png";
import instagram from "../assets/instagram.png";
import twitter_logo from "../assets/twitter.svg";
import location_logo from "../assets/footer_icons/location_footer_icon.png";
import mail_logo from "../assets/footer_icons/circle_mail_logo.png";
import phone_logo from "../assets/footer_icons/Phone_footer_icon.png";
import service_icon from "../assets/footer_icons/Service_footer_icon.png";

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => {
    if (type === "terms") {
      setModalContent({
        title: "Terms of Use",
        content:
          "By accessing and utilizing the services of Unknown Pixel Media, you acknowledge and agree to comply with our legally binding terms and conditions. All proprietary content, trademarks, and intellectual property associated with our services remain the exclusive property of Unknown Pixel Media and may not be reproduced, distributed, modified, or exploited without prior written authorization. We reserve the right to update, suspend, or terminate services at our discretion, with or without prior notice. Clients are responsible for ensuring compliance with applicable laws and regulations while using our services. Unauthorized access, data misuse, or any breach of these terms may result in immediate suspension or legal action. Continued use of our platform constitutes your acceptance of these terms, and any disputes will be governed by applicable jurisdictional laws. If you do not agree to these terms, you must discontinue use immediately.",
      });
    } else if (type === "privacy") {
      setModalContent({
        title: "Privacy Policy",
        content:
          "At Unknown Pixel Media, we are committed to safeguarding the privacy and security of our clients, partners, and users. We collect, process, and store personal and business data solely for operational, analytical, and service-enhancement purposes, ensuring compliance with all applicable data protection laws, including GDPR and CCPA. Information shared with us is treated with strict confidentiality and will not be disclosed, sold, or shared with third parties without explicit consent, except as required by law or for essential service delivery. We implement robust security measures to prevent unauthorized access, data breaches, or misuse of information. By engaging with our services, you consent to our data collection and processing practices. If you have concerns regarding your data privacy, you may contact our compliance team for inquiries or requests. This policy is subject to periodic updates, and continued use of our services constitutes acceptance of the latest terms.",
      });
    }
  };

  const closeModal = () => setModalContent(null);

  return (
    <footer className="footer" id="contactus">
      <div className="footer-container">
        {/* Contact Information Section */}
        <div className="footer-section contact-info">
          <div className="contact-item">
            <i className="icon-location">
              <img className="footer_icons" src={service_icon} alt="Services Icon" />
            </i>
            <span className="company-location">
              <strong className="footer-title">Services</strong>
              <br />
              <a href="/media" className="footer-navigations">Media</a> |
              <a href="/marketing" className="footer-navigations"> Marketing</a> |
              <a href="/consulting" className="footer-navigations"> Consulting</a>
            </span>
          </div>

          <div className="contact-item">
            <i className="icon-email">
              <img className="footer_icons" src={mail_logo} alt="Mail Icon" />
            </i>
            <span>
              <a href="mailto:info@unknownpixelmedia.com" className="footer-email">info@unknownpixelmedia.com</a>
            </span>
          </div>

          <div className="contact-item">
            <i className="icon-phone">
              <img className="footer_icons" src={phone_logo} alt="Phone Icon" />
            </i>
            <span className="company-location">
              <strong>North America, Australia, London:</strong> +1 604 704 1157 <br />
              <strong>Europe:</strong> +39-3455257046 <br />
              {/* <strong>Asia:</strong> +91-7696013691 */}
              <strong>Asia:</strong> +91-7071166000
            </span>
          </div>

          <div className="contact-item">
            <i className="icon-location">
              <img className="footer_icons" src={location_logo} alt="Location Icon" />
            </i>
            <span className="company-location">
              <strong>Head Office:</strong> Toronto, Ontario, Canada.
            </span>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-section company-info">
          <div className="social-links-footer">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href={socialLinks.Instagram} target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram Icon" className="social-icon" />
              </a>
              <a href={socialLinks.Linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Linkedin Icon" className="social-icon" />
              </a>
              <a href={socialLinks.Twitter} target="_blank" rel="noopener noreferrer">
                <img src={twitter_logo} alt="Twitter Icon" className="social-icon" />
              </a>
              <a href={socialLinks.Facebook} target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook Icon" className="social-icon" />
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="footer-section legal">
            <img src={logo} alt="UPM Logo" className="footer-logo" />
            <div className="legal-links">
            <a href="javascript:void(0)" onClick={() => openModal("terms")} className="legal-link">
  Terms of Use
</a>
<a href="javascript:void(0)" onClick={() => openModal("privacy")} className="legal-link">
  Privacy Policy
</a>
<a href="javascript:void(0)" className="legal-link">
  Copyright © {new Date().getFullYear()} Unknown Pixel Media
</a>

            </div>
          </div>
        </div>
      </div>

      {/* Render Modal if Content Exists */}
      {modalContent && <LegalModal {...modalContent} onClose={closeModal} />}
    </footer>
  );
};

export default Footer;
