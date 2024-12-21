import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Import the CSS file for styling
import facebook_icon from '../assets/facbook_Icon.png';
import twitter_icon from '../assets/twitter.svg';
import instagram_icon from '../assets/instagram.png';
import photoshop from '../assets/photoshop.png';
import premierpro from '../assets/premiere-pro.png';
import affter_effect from '../assets/after-effects.png';
import acrobat from '../assets/illustrator.png'; // Add the new image for Adobe Acrobat
import logo from '../assets/upm_logo/UPM_W4.png';
import TechCard from './tech_banner/TechCard';

const HomePage = () => {
  const techCard1Options = [
    { techImage: photoshop, techName: 'Adobe Photoshop' },
    { techImage: premierpro, techName: 'Adobe Premiere Pro' },
    { techImage: affter_effect, techName: 'Adobe After Effects' },
    { techImage: acrobat, techName: 'Adobe Acrobat' }
  ];

  const techCard2Options = [
    { techImage: photoshop, techName: 'Adobe Photoshop' },
    { techImage: premierpro, techName: 'Adobe Premiere Pro' },
    { techImage: affter_effect, techName: 'Adobe After Effects' },
    { techImage: acrobat, techName: 'Adobe Acrobat' }
  ];

  const techCard3Options = [
    { techImage: photoshop, techName: 'Adobe Photoshop' },
    { techImage: premierpro, techName: 'Adobe Premiere Pro' },
    { techImage: affter_effect, techName: 'Adobe After Effects' },
    { techImage: acrobat, techName: 'Adobe Acrobat' }
  ];

  const [techCard1, setTechCard1] = useState(techCard1Options[0]);
  const [techCard2, setTechCard2] = useState(techCard2Options[0]);
  const [techCard3, setTechCard3] = useState(techCard3Options[0]);

  const [typedTextPixel, setTypedTextPixel] = useState('');
  const [typedTextAt, setTypedTextAt] = useState('');

  const getRandomTech = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const updateCardsRandomly = () => {
    setTechCard1(getRandomTech(techCard1Options));
    setTechCard2(getRandomTech(techCard2Options));
    setTechCard3(getRandomTech(techCard3Options));
  };

  useEffect(() => {
    const interval = setInterval(updateCardsRandomly, 1500); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const typeWriterEffect = (text, setTypedText, speed) => {
    let i = 0;
    setTypedText(''); // Reset text
    const type = () => {
      if (i < text.length) {
        setTypedText((prev) => text.slice(0, i + 1));
        i++;
        setTimeout(type, speed);
      }
    };
    type();
  };

  useEffect(() => {
    typeWriterEffect('Pixel', setTypedTextPixel, 150); // Speed: 150ms per character
    typeWriterEffect('At', setTypedTextAt, 150); // Speed: 150ms per character
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      <header className="header-container">
        <div className="logo">
          <img src={logo} className="upm_logo" alt="UPM Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><button className="nav-buttons" onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button className="nav-buttons" onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button className="nav-buttons" onClick={() => scrollToSection('team')}>Team</button></li>
            <li><button className="nav-buttons" onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><img src={facebook_icon} alt="Facebook" className="social-icon" /></a>
          <a href="#" aria-label="Twitter"><img src={twitter_icon} alt="Twitter" className="social-icon" /></a>
          <a href="#" aria-label="Instagram"><img src={instagram_icon} alt="Instagram" className="social-icon" /></a>
        </div>
      </header>

      <main className="landing-content">
        <div className="headline">
          <h1 className="line">
            One <span style={{color:'white'}}>{typedTextPixel}</span>
          </h1>
          <h1 className="line">
            <span style={{color:'white'}} >{typedTextAt}</span> a Time
          </h1>
        </div>
        <div className="landing_page_title">
          <p className="lpt">Makes your brand well-known in the Digital Space</p>
        </div>
        <button className="explore-button">Explore</button>
        <div className="tech-card-container">
          <TechCard
            id="techcard1"
            techImage={techCard1.techImage}
            techName={techCard1.techName}
          />
          <TechCard
            id="techcard2"
            techImage={techCard2.techImage}
            techName={techCard2.techName}
          />
          <TechCard
            id="techcard3"
            techImage={techCard3.techImage}
            techName={techCard3.techName}
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
