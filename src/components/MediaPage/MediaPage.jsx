import React, { useState, useEffect } from 'react';
import './MediaPage.css';
import LogoDesigning from './components/LogoDesigning';
import MediaService from './MediaService';
import Header from '../Header';
import MobileHeader from '../MobileHeader'; // Import MobileHeader
import logo from '../../assets/upm_logo/UPM_B5.jpg';
import ServiceNavigation from '../ServiceNavigation';
import ContactUs from '../ContactUs';

import facebook_icon from '../../assets/facbook_Icon.png';
import twitter_icon from '../../assets/twitter.svg';
import instagram_icon from '../../assets/instagram.png';
import ContactUsCtaButton from '../Button_Ui/ContactUsCtaButton';
import MobileMediaSection1 from './components/MobileMediaSection1';

import { navigationLinks, socialLinks } from '../../links'; // Import centralized links

const socialIcons = [
  { label: 'Facebook', icon: facebook_icon, href: socialLinks.Facebook },
  { label: 'Twitter', icon: twitter_icon, href: socialLinks.Twitter },
  { label: 'Instagram', icon: instagram_icon, href: socialLinks.Instagram },
];

const services = [
  { name: 'Media', path: '/media' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'Consulting', path: '/consulting' },
];

const MediaPage = () => {
  const [isMobile, setIsMobile] = useState(false); // State to track if view is mobile

  useEffect(() => {
    // Scroll to top when the component is mounted
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
    <div className="media-page">
      {/* Dynamically render MobileHeader or Header */}
      {isMobile ? (
        <MobileHeader logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      ) : (
        <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      )}
      {
        isMobile?(<MobileMediaSection1/>):(
        <LogoDesigning />)}
      <MediaService />
      <ContactUsCtaButton navigation_link="#contactus" />
      <ServiceNavigation currentService="Media" services={services} />
      <ContactUs />
    </div>
  );
};

export default MediaPage;
