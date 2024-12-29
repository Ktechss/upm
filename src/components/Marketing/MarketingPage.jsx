import React, { useEffect } from 'react';
import Header from '../Header';
import MarketingServices from './components/MarketingServices';
import MarketingSection1 from './components/MarketingSection1';
import './styles/MarketingPage.css';

import logo from '../../assets/upm_logo/UPM_B5.jpg';
import ServiceNavigation from '../ServiceNavigation';

import facebook_icon from '../../assets/social_link_icons/facebook.png';
import twitter_icon from '../../assets/social_link_icons/instagram.png';
import instagram_icon from '../../assets/social_link_icons/instagram.png';

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#teams' },
  { label: 'About Us', href: '#aboutUS' },
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

function MarketingPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='MarketingPage'>
      <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      <MarketingSection1 />
      <MarketingServices />
      <ServiceNavigation currentService="Marketing" services={services} />
    </div>
  );
}

export default MarketingPage;
