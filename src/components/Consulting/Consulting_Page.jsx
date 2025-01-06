import React, { useState, useEffect } from 'react';
import './style/Consulting_Page.css';
import Consulting_Section_1 from './components/Consulting_Section_1';
import Consulting_Section_2 from './components/Consulting_Section_2';
import Consulting_Service from './components/Consulting_Service';
import ServiceNavigation from '../ServiceNavigation';
import ContactUs from '../ContactUs';
import Header from '../Header';
import MobileHeader from '../MobileHeader'; // Import MobileHeader
import facebook_icon from '../../assets/social_link_icons/facebook.png';
import twitter_icon from '../../assets/social_link_icons/instagram.png';
import instagram_icon from '../../assets/social_link_icons/instagram.png';
import logo from '../../assets/upm_logo/UPM_B5.jpg';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#teams' },
  { label: 'About Us', href: '/about_us' },
  { label: 'Contact Us', href: '#contactus' },
];

const socialIcons = [
  { label: 'Facebook', icon: facebook_icon, href: '#' },
  { label: 'Twitter', icon: twitter_icon, href: '#' },
  { label: 'Instagram', icon: instagram_icon, href: '#' },
];

// List of services
const services = [
  { name: 'Media', path: '/media' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'Consulting', path: '/consulting' },
];

function Consulting_Page() {
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
    <div className="Consulting_Page">
      {/* Dynamically render MobileHeader or Header */}
      {isMobile ? (
        <MobileHeader logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      ) : (
        <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      )}
      <Consulting_Section_1 />
      <Consulting_Section_2 />
      <Consulting_Service />
      <ServiceNavigation currentService="Consulting" services={services} />
      <ContactUs />
    </div>
  );
}

export default Consulting_Page;
