import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import facebook_icon from '../assets/facebook.svg';
import twitter_icon from '../assets/twitter.svg';
import instagram_icon from '../assets/instagram.svg';
import photoshop from '../assets/photoshop.png';
import premierpro from '../assets/premiere-pro.png';
import affter_effect from '../assets/after-effects.png';
import TechCard from './tech_banner/TechCard';

const HomePage = () => {
  const handleCardClose = () => {
    console.log('Card closed!');
  };

  return (
    <div className="home-page">
      <header className="header-container">
        <div className="logo">MyLogo</div>
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <img src={facebook_icon} alt="Facebook" className="social-icon" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitter_icon} alt="Twitter" className="social-icon" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagram_icon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </header>
      <main className="landing-content">
        <div className="headline">
          <h1 className="line">One <span style={{color:'white'}}>Pixel</span></h1>
          <h1 className="line"><span style={{color:'white'}}>At</span> a Time</h1>
        </div>
        <div className='landing_page_title'>
          <p className='lpt'>Makes your brand well-known in the Digital Space</p>
        </div>
        <button className="explore-button">Explore</button>
        <div className="tech-card-container">
          <TechCard 
            id='techcard1'
            techImage={photoshop}
            techName="Adobe Photoshop" 
            onClose={handleCardClose} 
          />
          <TechCard 
            id='techcard2'
            techImage={premierpro}
            techName="Adobe Premier Pro" 
            onClose={handleCardClose} 
          />
          <TechCard 
            id='techcard2'
            techImage={affter_effect}
            techName="Adobe Affter Effects" 
            onClose={handleCardClose} 
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
