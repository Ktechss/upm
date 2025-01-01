import React from 'react';
import './Services.css';
import { StickyScroll } from './ui/StickyScroll';
import { LampDemo } from './ui/LampContainer';
import SwiperCoverflow from './ui/SwiperCoverflow';

import content from '../User_Data/Media_data';


const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className='LampLight'>
        <LampDemo/>
        </div>
      
      {/* <StickyScroll content={content} /> */}
      {/* <SwiperCoverflow/> */}
    </section>
  );
};

export default Services;
