import React, { useState, useEffect } from 'react';
import './HomePage.css';
import TechCard from './tech_banner/TechCard';

import photoshop from '../assets/photoshop.png';
import premierpro from '../assets/premiere-pro.png';
import affter_effect from '../assets/after-effects.png';
import acrobat from '../assets/illustrator.png';
import googleads from '../assets/tech_card_Icons/adwords.png';
import business_card from '../assets/tech_card_Icons/address-card-solid.svg';
import figma from '../assets/tech_card_Icons/figma.png';
import autodesk from '../assets/tech_card_Icons/Autodesk_maya.png';
import meta from '../assets/tech_card_Icons/meta.png';
import mailchimp from '../assets/tech_card_Icons/mailchimp.jpg';
import wix from "../assets/tech_card_Icons/wix-brands.svg";

import { Highlight } from './ui/HeroHighLight-Component/HeroHighlight';
import TextGenerateEffect from './ui/TextGenerateEffect';

const HomePage = () => {
  const techCard1Options = [
    { techImage: business_card, techName: 'Business Card' },
    { techImage: wix, techName: 'Wix Web Builder' },
  ];

  const techCard2Options = [
    
    { techImage: meta, techName: 'Meta' },
    { techImage: mailchimp, techName: 'Mailchimp' },
  ];

  const techCard3Options = [
    { techImage: googleads, techName: 'Google Ads' },
    { techImage: figma, techName: 'Figma' },
  ];

  const [techCard1, setTechCard1] = useState(techCard1Options[0]);
  const [techCard2, setTechCard2] = useState(techCard2Options[0]);
  const [techCard3, setTechCard3] = useState(techCard3Options[0]);
  const [isMobile, setIsMobile] = useState(false);

  const getRandomTech = (options) => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const updateCardsRandomly = () => {
    const new1 = getRandomTech(techCard1Options);
    const new2 = getRandomTech(techCard2Options);
    const new3 = getRandomTech(techCard3Options);

    if (new1.techName !== techCard1.techName) setTechCard1(new1);
    if (new2.techName !== techCard2.techName) setTechCard2(new2);
    if (new3.techName !== techCard3.techName) setTechCard3(new3);
  };

  useEffect(() => {
    const interval = setInterval(updateCardsRandomly, 2500);
    return () => clearInterval(interval);
  }, [techCard1, techCard2, techCard3]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const words = 'Building Brands';

  return (
    <div className="home-page zoom-container">
      <main className="landing-content">
        <div className="headline">
          <h1 className="Sloagan-line">
            <TextGenerateEffect words={words} />
          </h1>
          <h1 className="line">
            <span style={{ color: 'white' }} className="for-mobile-line">One</span>
            <span style={{ color: '#3d84e2' }} className="for-mobile-line"> Pixel</span>
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
