import React from 'react';
import './WhyChooseUs.css';
import characterImage from '../assets/character_image.jpg';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id='chooseus'>
      <div className="content">
        <h2 className="title">WHY <span className="highlight">Choose</span> Us!</h2>
        <p className="description">
          We are dedicated to delivering exceptional, custom-tailored designs that reflect your brand's unique identity. Our team combines creativity, innovation, and attention to detail to produce high-quality logos, branding materials, and illustrations. We prioritize client satisfaction, ensuring a collaborative process from concept to completion.
          <br /><br />
          With a proven track record of helping brands stand out, we bring your vision to life. Choose us for reliability, expertise, and a design experience that exceeds expectations.
        </p>
        <p className="value-points">Take a look at our value addition points:</p>
        <ul className="points-list">
          <li>Customer Tailored Experience</li>
          <li>Client-Centric Approach</li>
          <li>High-Quality Work</li>
          <li>Guaranteed Satisfaction</li>
        </ul>
      </div>
      <div className="image-container">
        <img src={characterImage} alt="Character" className="character-image" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
