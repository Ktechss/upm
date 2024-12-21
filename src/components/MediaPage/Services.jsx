import React from 'react';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Media Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Graphic Design</h3>
          <ul>
            <li>Logos</li>
            <li>Flyers & Brochures</li>
            <li>Business Cards</li>
            <li>Catalogs & Infographics</li>
          </ul>
        </div>
        <div className="service-card">
          <h3>3D and Motion Graphics</h3>
          <ul>
            <li>3D Product Modeling</li>
            <li>3D Animation</li>
            <li>Motion Graphics</li>
            <li>3D Walkthroughs</li>
          </ul>
        </div>
        <div className="service-card">
          <h3>Video Production</h3>
          <ul>
            <li>Instagram Reels & TikTok Videos</li>
            <li>YouTube Shorts</li>
            <li>Long-Format Videos</li>
            <li>Video Editing & Vlogs</li>
            <li>Podcast Editing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
