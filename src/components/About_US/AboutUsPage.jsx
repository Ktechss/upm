import React from 'react'
import UpmAboutUs from './UpmAboutUs';
import './AboutUsPage.css';
import Header from '../Header';
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
  return (
    <div style={{background:'white'}} className='about_us_page'>
        <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
        <UpmAboutUs/>
        <ContactUs/>
    </div>
  )
}

export default AboutUsPage;
