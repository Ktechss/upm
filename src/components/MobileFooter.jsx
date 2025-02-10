import React, { useState } from "react";
import "./MobileFooter.css";
import LegalModal from "./legal/LegalModal"; // Import modal for Terms & Privacy Policy
import logo from "../assets/upm_logo/UPM_W4.png";
import facebook from "../assets/facbook_Icon.png";
import instagram from "../assets/footer_icons/footer_Instagram.png";
import location_logo from "../assets/footer_icons/location_footer_icon.png";
import mail_logo from "../assets/footer_icons/circle_mail_logo.png";
import phone_logo from "../assets/footer_icons/Phone_footer_icon.png";
import service_icon from "../assets/footer_icons/Service_footer_icon.png";
import twitter_logo from "../assets/twitter.svg";

const MobileFooter = () => {
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
    <footer className="mobile-footer">
      {/* Follow Us Section */}
      <div className="mobile-footer-follow-us">
        <h4>Follow Us</h4>
        <div className="mobile-footer-social-icons">
          <a href="https://www.instagram.com/unknownpixelmedia/">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://x.com/unknownpixelmed" className="inverted-icon">
            <img src={twitter_logo} alt="Twitter" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61566675155483">
            <img src={facebook} alt="Facebook" />
          </a>
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
              <strong>Europe:</strong> +39-3455257046
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
        <p>&copy; {new Date().getFullYear()} Unknown Pixel Media. All Rights Reserved.</p>
        <a href="javascript:void(0)" onClick={() => openModal("terms")}>
          Terms of Use
        </a>{" "}
        |{" "}
        <a href="javascript:void(0)" onClick={() => openModal("privacy")}>
          Privacy Policy
        </a>
      </div>

      {/* Render Modal if Content Exists */}
      {modalContent && <LegalModal {...modalContent} onClose={closeModal} />}
    </footer>
  );
};

export default MobileFooter;
