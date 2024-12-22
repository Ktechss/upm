import React from 'react';
import GlobeComponent from './3dObject/Globe';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-text">
        <h2 className="about-us-headline">Serving Across the Globe</h2>
        <p className="about-us-description">
          With a strong presence in numerous countries, we are committed to delivering top-notch services worldwide, ensuring excellence in every corner of the world.
        </p>
      </div>
      <div className='about-us-3d-model'>
    <GlobeComponent/>
    </div>
    </section>
  );
}

export default AboutUs;
