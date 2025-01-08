import React, { useState, useEffect } from 'react';
import './HomePage.css';
import TechCard from './tech_banner/TechCard';

import photoshop from '../assets/photoshop.png';
import premierpro from '../assets/premiere-pro.png';
import affter_effect from '../assets/after-effects.png';
import acrobat from '../assets/illustrator.png';
import googleads from '../assets/tech_card_Icons/adwords.png';
import figma from '../assets/tech_card_Icons/figma.png';
import autodesk from '../assets/tech_card_Icons/Autodesk_maya.png';
import meta from '../assets/tech_card_Icons/meta.png';
import mailchimp from '../assets/tech_card_Icons/mailchimp.jpg';

import { Highlight } from './ui/HeroHighLight-Component/HeroHighlight';
import TextGenerateEffect from './ui/TextGenerateEffect';

const HomePage = () => {
  

  

  const techCard1Options = [
    { techImage: photoshop, techName: 'Adobe Photoshop' },
    { techImage: premierpro, techName: 'Adobe Premiere Pro' },
    { techImage: affter_effect, techName: 'Adobe After Effects' },
    { techImage: googleads, techName: 'Google Ads' },
  ];

  const techCard2Options = [
    { techImage: photoshop, techName: 'Adobe Photoshop' },
    { techImage: meta, techName: 'Meta' },
    { techImage: mailchimp, techName: 'Mailchimp' },
    { techImage: acrobat, techName: 'Adobe Acrobat' },
  ];

  const techCard3Options = [
    { techImage: autodesk, techName: 'Autodesk Maya' },
    { techImage: figma, techName: 'Figma' },
    { techImage: affter_effect, techName: 'Adobe After Effects' },
    { techImage: acrobat, techName: 'Adobe Acrobat' },
  ];

  const [techCard1, setTechCard1] = useState(techCard1Options[0]);
  const [techCard2, setTechCard2] = useState(techCard2Options[0]);
  const [techCard3, setTechCard3] = useState(techCard3Options[0]);
  const [isMobile, setIsMobile] = useState(false); // State to track if the view is mobile

  const getRandomTech = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const updateCardsRandomly = () => {
    setTechCard1(getRandomTech(techCard1Options));
    setTechCard2(getRandomTech(techCard2Options));
    setTechCard3(getRandomTech(techCard3Options));
  };

  const words = 'Building Brands';

  useEffect(() => {
    const interval = setInterval(updateCardsRandomly, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Function to update `isMobile` based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home-page">
      {/* Dynamically render MobileHeader or Header */}
     
      <main className="landing-content">
        <div className="headline">
          <h1 className="Sloagan-line">
            <TextGenerateEffect words={words} />
          </h1>
          <h1 className="line">
            <span style={{ color: 'white' }} className="for-mobile-line">One</span>
            <span style={{ color: '#3d84e2' }} className="for-mobile-line">Pixel</span>
          </h1>
          <h1 className="line">
            <span style={{ color: '#3d84e2' }} className="for-mobile-line">At</span> a Time
          </h1>
        </div>
        <div className="landing_page_title">
          <Highlight>
            <p className="lpt">Makes your brand well-known in the Digital Space</p>
          </Highlight>
        </div>
        <div className="tech-card-container">
          <TechCard id="techcard1" techImage={techCard1.techImage} techName={techCard1.techName} />
          <TechCard id="techcard2" techImage={techCard2.techImage} techName={techCard2.techName} />
          <TechCard id="techcard3" techImage={techCard3.techImage} techName={techCard3.techName} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
