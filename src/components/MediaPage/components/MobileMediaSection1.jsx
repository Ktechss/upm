import React from 'react';
import '../styles/MobileMediaSection1.css';
import Iamge1 from '../assets/media-service-image4.jpg';
import { Button } from '../../moving-border/moving-border';
import { MobileButton } from '../../moving-border/MobileMovingBorder';

function MobileMediaSection1() {
  return (
    <section className="mobile-media-section">
      {/* Heading */}
      <h2 className="mobile-media-heading">
        Crafting <span style={{ color: "#3d84e2" }}>Media</span> That Inspires and Engages
      </h2>

      {/* Image */}
      <div className="mobile-media-image-container">
        <img src={Iamge1} alt="Media Service" className="mobile-media-image" />
      </div>

      {/* Description */}
      <p className="mobile-media-description">
        At <span style={{ color: "#3d84e2", fontSize: "1.1rem", fontWeight: "bold" }}>Unknown Pixel Media</span>, we redefine creativity and innovation to deliver media solutions that truly stand out. From captivating designs to high-quality video production, and immersive 3D experiences, we offer a comprehensive range of services that bring your brand’s story to life.
      </p>

      {/* CTA Button */}
      <MobileButton
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 mobile-cta-button"
      >
        Explore Media Services!
      </MobileButton>
    </section>
  );
}

export default MobileMediaSection1;
