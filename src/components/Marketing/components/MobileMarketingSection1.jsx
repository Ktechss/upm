import React from 'react';
import '../styles/MobileMarketingSection1.css';
import { Button } from '../../moving-border/moving-border';
import marketingImage from '../assets/Marketing_Image.jpg'; // Replace with your image path

const MobileMarketingSection1 = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("marketing-services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="mobile-marketing-section-1">
      <h2 className="mobile-marketing-heading">
        <span className="highlight">Marketing</span>
        <br />
        That Drives Impact and Delivers Growth
      </h2>

      {/* Image Section */}
      <div className="mobile-marketing-image-container">
        <img
          src={marketingImage}
          alt="Marketing"
          className="mobile-marketing-image"
        />
      </div>

      {/* Content Section */}
      <div className="mobile-marketing-content">
        <p className="mobile-marketing-text" style={{textAlign:'justify'}}>
          At <span className="highlight2">Unknown Pixel Media</span>, we don’t just market; we create strategies that resonate, engage, and deliver measurable results. Our digital marketing services are designed to amplify your brand’s voice, connect with your audience, and drive sustainable growth in an ever-evolving digital landscape.
        </p>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          onClick={handleScroll}
        >
          Explore Marketing Services!
        </Button>
      </div>
    </section>
  );
};

export default MobileMarketingSection1;
