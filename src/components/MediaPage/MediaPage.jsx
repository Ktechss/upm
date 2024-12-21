import React from 'react';
import Header from './Header';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import CallToAction from './CallToAction';
import './MediaPage.css';

const MediaPage = () => {
  return (
    <div className="media-page">
      <Header />
      <Services />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default MediaPage;
