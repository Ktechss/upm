import React, { useState, useEffect } from 'react';
import UpmAboutUs from './UpmAboutUs';
import './AboutUsPage.css';
import Header from '../Header';
import MobileHeader from '../MobileHeader'; // Import MobileHeader
import logo from '../../assets/upm_logo/UPM_B5.jpg';

import facebook_icon from '../../assets/facbook_Icon.png';
import twitter_icon from '../../assets/twitter.svg';
import instagram_icon from '../../assets/instagram.png';

import ContactUs from '../ContactUs';

import { navigationLinks, socialLinks } from '../../links'; // Import centralized links

const socialIcons = [
  { label: 'Facebook', icon: facebook_icon, href: socialLinks.Facebook },
  { label: 'Twitter', icon: twitter_icon, href: socialLinks.Twitter },
  { label: 'Instagram', icon: instagram_icon, href: socialLinks.Instagram },
];

function AboutUsPage() {
  const [isMobile, setIsMobile] = useState(false); // State to track if view is mobile

  useEffect(() => {
    // Function to update `isMobile` based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div style={{ background: 'white' }} className="about_us_page">
      {/* Dynamically render MobileHeader or Header */}
      {isMobile ? (
        <MobileHeader logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      ) : (
        <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      )}
      <UpmAboutUs />
      <ContactUs />
    </div>
  );
}

export default AboutUsPage;
