import React, { useState, useEffect } from 'react';
import Header from '../Header';
import MobileHeader from '../MobileHeader'; // Import MobileHeader
import MarketingServices from './components/MarketingServices';
import MarketingSection1 from './components/MarketingSection1';
import './styles/MarketingPage.css';


import logo from '../../assets/upm_logo/UPM_B5.jpg';
import ServiceNavigation from '../ServiceNavigation';
import ContactUs from '../ContactUs';

import facebook_icon from '../../assets/facbook_Icon.png';
import twitter_icon from '../../assets/twitter.svg';
import instagram_icon from '../../assets/instagram.png';
import linkedin_icon from '../../assets/linkedin-in-brands.svg'

import ContactUsCtaButton from '../Button_Ui/ContactUsCtaButton';
import MobileMarketingSection1 from './components/MobileMarketingSection1';

import { navigationLinks, socialLinks } from '../../links'; // Import centralized links

const socialIcons = [
  { label: 'Instagram', icon: instagram_icon, href: socialLinks.Instagram },
  { label: 'Linkedin', icon: linkedin_icon, href: socialLinks.Linkedin },
  { label: 'Twitter', icon: twitter_icon, href: socialLinks.Twitter },
  { label: 'Facebook', icon: facebook_icon, href: socialLinks.Facebook },
];

const services = [
  { name: 'Media', path: '/media' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'Consulting', path: '/consulting' },
];

function MarketingPage() {
  const [isMobile, setIsMobile] = useState(false); // State to track if view is mobile

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Function to update `isMobile` based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="MarketingPage">
      {/* Dynamically render MobileHeader or Header */}
      {isMobile ? (
        <MobileHeader logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      ) : (
        <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      )}
      {
        isMobile?(
          <MobileMarketingSection1/>
        ):(
          <MarketingSection1/>
        )
      }
      {/* <MarketingSection1 /> */}
      <MarketingServices />
      <ContactUsCtaButton navigation_link="#contactus" />
      <ServiceNavigation currentService="Marketing" services={services} />    
      <ContactUs />
    </div>
  );
}

export default MarketingPage;
