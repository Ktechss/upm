import React from 'react';
import './UpmContactPage1.css';
import { InlineWidget } from 'react-calendly';
import CalendlyWidget from '../CalendlyWidget/CalendlyWidget';

function UpmContactPage1() {
  return (
    <div className="UpmContactPage1">
      <div className="UpmContactPage1-pic-heading">
        <h1 className="UpmContactPage1-pic-heading-head">Get in touch with us</h1>
      </div>
      <div className="UpmContactPage1-forms-details">
        {/* Left Section */}
        <div className="UpmContactPage1-forms-details-left">
          <h3 className='UpmContactPage1-forms-details-left-normal-heading'>get in touch</h3>
          <h2 className="UpmContactPage1-forms-details-left-heading">
            Don't hesitate to contact us for more information
          </h2>
          <p className="UpmContactPage1-forms-details-left-sub-heading">
            Our team is here to assist you with any questions or concerns you may have. Reach out through any of the methods below, and we'll be happy to help.
          </p>
          <div className="UpmContactPage1-contact-info">
            <div className="UpmContactPage1-contact-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>#2005-7495 132 St Surrey, BC V3W 1J8</p>
              </div>
            </div>
            <div className="UpmContactPage1-contact-info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>Toll Free - 877-553-0763<br />+1 (604) 217-6503</p>
              </div>
            </div>
            <div className="UpmContactPage1-contact-info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@s3mortgages.ca</p>
              </div>
            </div>
            <div className="UpmContactPage1-contact-info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Office Hours</h4>
                <p>Mon-Fri: 10 AM - 5 PM<br />Sat: 10 AM - 3 PM<br />Sun: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Section */}
        <div className="UpmContactPage1-forms-details-right">
          <h2 className="UpmContactPage1-forms-details-right-heading">Schedule Meeting</h2>
          {/* <CalendlyWidget/> */}
          <InlineWidget url="https://calendly.com/unknownpixelmedia/30min" />
        </div>
        <div className="UpmContactPage1-social-media">
            <h4>Follow our social media:</h4>
            <div className="UpmContactPage1-social-media-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default UpmContactPage1;
