import React from 'react';
import GlobeComponent from './3dObject/Globe';
import './AboutUs.css';
import CountryClock from './Real_time_Clock/CountryClock';
import locationData from '../User_Data/location_Data';

const AboutUs = () => {
  return (
    <section className="about-us" id='aboutus'>
      <div className="about-us-text-container">
        <div className='text'>
          <h2 className='about-us-head-title'>We serve across the Globe</h2>
          <h2 className="about-us-headline"></h2>
          <p className="about-us-description">
            Unknown Pixel Media partners with businesses around the world, offering seamless collaboration no matter where you are. From North America to Europe, Asia to Australia, we craft strategies that resonate globally while delivering local impact.
            Serving You, Anytime, Anywhere:
            A Global Presence with Local Insights | Round-the-Clock Support aligned to your time zone.
            Time Zones: Vancouver, Toronto, Winnipeg, New Delhi, Australia, London, Italy, Germany, California.

            Our expertise spans continents, ensuring your brand’s message is heard across cultures and markets, bringing your vision to life on a global scale.

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
