import React, { useEffect } from 'react';
import './MediaPage.css';
import LogoDesigning from './components/LogoDesigning';
import GraphicsDesigning from './components/GraphicsDesigning';
import MediaService from './MediaService';
import Header from '../Header';
import logo from '../../assets/upm_logo/UPM_B5.jpg';
import ServiceNavigation from '../ServiceNavigation';
import ContactUs from '../ContactUs';

import facebook_icon from '../../assets/social_link_icons/facebook.png';
import twitter_icon from '../../assets/social_link_icons/instagram.png';
import instagram_icon from '../../assets/social_link_icons/instagram.png';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#teams' },
  { label: 'About Us', href: '#aboutus' },
  { label: 'Contact Us', href: '#contactus' },
];

const socialIcons = [
  { label: 'Facebook', icon: facebook_icon, href: '#' },
  { label: 'Twitter', icon: twitter_icon, href: '#' },
  { label: 'Instagram', icon: instagram_icon, href: '#' },
];

const services = [
  { name: 'Media', path: '/media' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'Consulting', path: '/consulting' },
];

const MediaPage = () => {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="media-page">
      <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      <LogoDesigning />
      <MediaService />
      <ServiceNavigation currentService="Media" services={services} />
      <ContactUs/>
    </div>
  );
};

export default MediaPage;
