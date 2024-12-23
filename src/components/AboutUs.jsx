import React from 'react';
import GlobeComponent from './3dObject/Globe';
import './AboutUs.css';
import CountryClock from './Real_time_Clock/CountryClock';
import locationData from '../User_Data/location_Data';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-text-container">
        <div className='text'>
          <h2 className='about-us-head-title'>About Us</h2>
        <h2 className="about-us-headline">Serving Across the Globe</h2>
        <p className="about-us-description">
          As a global leader in digital media marketing,
          we specialize in delivering exceptional services across media strategy,
          consultancy, and marketing solutions. With an extensive presence in multiple
          countries, we are dedicated to helping businesses thrive in the digital age.
          From crafting innovative campaigns to providing strategic guidance, our
          team ensures every client achieves unparalleled success.
          Our mission is to bring your brand closer to its audience,
          leveraging cutting-edge technology and creative expertise
          to make a lasting impact worldwide.
        </p>
        </div>
        <div className='world-clock'>
          {locationData.map((location) => (
            <CountryClock
              key={location.name}
              countryName={location.name}
              timezone={location.timezone}
            />
          ))}
        </div>
      </div>
      <div className='about-us-3d-model'>
        <GlobeComponent />
      </div>
    </section>
  );
}

export default AboutUs;
