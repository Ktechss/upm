import React from 'react';
import './Services.css';
import { StickyScroll } from './ui/StickyScroll';
import content from '../User_Data/Media_data';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <StickyScroll content={content} />
    </section>
  );
};

export default Services;
