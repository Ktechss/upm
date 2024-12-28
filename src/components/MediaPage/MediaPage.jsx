import React from 'react';
import './MediaPage.css';
import LogoDesigning from './components/LogoDesigning';
import GraphicsDesigning from './components/GraphicsDesigning';
import MediaService from './MediaService';
import Header from '../Header';
import logo from '../../assets/upm_logo/UPM_B5.jpg';

import facebook_icon from '../../assets/social_link_icons/facebook.png';
import twitter_icon from '../../assets/social_link_icons/instagram.png';
import instagram_icon from '../../assets/social_link_icons/instagram.png'

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

const MediaPage = () => {
  return (
    <div className="media-page">
      <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
      <LogoDesigning/>
      <MediaService/>
    </div>
  );
};

export default MediaPage;
