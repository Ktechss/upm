import React, { useState, useEffect } from 'react';
import UpmAboutUs from './UpmAboutUs';
import './AboutUsPage.css';
import Header from '../Header';
import MobileHeader from '../MobileHeader'; // Import MobileHeader
import logo from '../../assets/upm_logo/UPM_B5.jpg';
import facebook_icon from '../../assets/social_link_icons/facebook.png';
import twitter_icon from '../../assets/social_link_icons/linkedin.png';
import instagram_icon from '../../assets/social_link_icons/linkedin.png';
import ContactUs from '../ContactUs';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#teams' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Contact Us', href: '#contactus' },
];

const socialIcons = [
  { label: 'Facebook', icon: facebook_icon, href: '#' },
  { label: 'Twitter', icon: twitter_icon, href: '#' },
  { label: 'Instagram', icon: instagram_icon, href: '#' },
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
