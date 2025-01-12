import React from 'react'
import './UpmContact.css';
import UpmContactPage1 from './UpmContactPage1';
import useIsMobile from '../../hooks/useIsMobile';
import MobileHeader from '../MobileHeader';
import Header from '../Header';
import { navigationLinks,socialLinks } from '../../links';
import logo from '../../assets/upm_logo/UPM_B5.jpg';
import facebook_icon from '../../assets/facbook_Icon.png';
import twitter_icon from '../../assets/twitter.svg';
import instagram_icon from '../../assets/instagram.png';


const socialIcons = [
  { label: 'Facebook', icon: facebook_icon, href: socialLinks.Facebook },
  { label: 'Twitter', icon: twitter_icon, href: socialLinks.Twitter },
  { label: 'Instagram', icon: instagram_icon, href: socialLinks.Instagram },
];


function UpmContact() {
  const isMobile = useIsMobile();
  return (
    <div className='UpmContact'>
       {isMobile ? (
                <MobileHeader logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
              ) : (
                <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
              )}
      <UpmContactPage1/>
    </div>
  )
}

export default UpmContact
