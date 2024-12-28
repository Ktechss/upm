import React, { useState } from 'react';
import './styles/MediaService.css';
import logo from '../../assets/footer_icons/Phone_Icon.png';
import Logo_Design from './assets/Graphics_Design_Logos/logo_design.gif';
import Letter_heads from './assets/Graphics_Design_Logos/Letter_heads.gif';
import Info_graphs from './assets/Graphics_Design_Logos/info_graphics.gif';
import Flyers_design from './assets/Graphics_Design_Logos/Flyers_design.gif';
import Catalogs from './assets/Graphics_Design_Logos/Catalogs.gif';
import Business_Card from './assets/Graphics_Design_Logos/Business_card.gif';
import Brochures_logo from './assets/Graphics_Design_Logos/Brochures_Logo.gif';
import Envelope_Logo from './assets/Graphics_Design_Logos/envelope.gif';

import E_News_Letter from './assets/Marketing_logos/E_News_Letter.gif';
import BillBoard from './assets/Marketing_logos/billboard.gif';
import Digital_Banner from './assets/Marketing_logos/Digital_Banner.gif';
import Standees from './assets/Marketing_logos/Standees.gif';
import Scroller from './assets/Marketing_logos/scrollers.gif';
import Flex_banner from './assets/Marketing_logos/Flex_Banner.gif';

import d_animation from './assets/3D_Logo/3d_Animation.gif';
import d1_animation from './assets/3D_Logo/3d_Model.gif';
import d2_animation from './assets/3D_Logo/3d_Walkthrough.gif';
import d3_animation from './assets/3D_Logo/Motion_Animation.gif';

import Facebook from './assets/Social_Media_Management/facebook_logo.gif';
import Instagram from './assets/Social_Media_Management/Instagram_logo.gif';
import Linkedin from './assets/Social_Media_Management/Linkedin_logo.gif';
import Snapchat from './assets/Social_Media_Management/Snapchat_logo.gif';
import Twitter from './assets/Social_Media_Management/Twitter_logo.gif';

import Mail_Marketing from './assets/PPC/mail_marketing.gif';
import Social_media_ads from './assets/PPC/Social_Media_Ads.gif'

import youtube_shots from './assets/Video_Content/youtube_shots.gif';
import long_video_formate from './assets/Video_Content/Long_Video_Formate.gif'
import tik_tok from './assets/Video_Content/tik-tok.gif';

const MediaService = () => {
  const [selectedService, setSelectedService] = useState('graphicDesigning');

  // Define the sub-services for each main service
  const services = {
    graphicDesigning: [
      { logo: Logo_Design, name: 'Logo Design', description: 'Custom logo design to represent your brand identity.' },
      { logo: Flyers_design, name: 'Flyers', description: 'Creative flyer designs for promotions and events.' },
      { logo: Brochures_logo, name: 'Brochures', description: 'Engaging brochures for your business offerings.' },
      { logo: Business_Card, name: 'Business Cards', description: 'Professional business cards to make a lasting impression.' },
      { logo: Letter_heads, name: 'Letterheads', description: 'Unique letterhead designs to enhance your corporate identity.' },
      { logo: Envelope_Logo, name: 'Envelopes', description: 'Custom envelope designs that reflect your brand style.' },
      { logo: Catalogs, name: 'Catalogs', description: 'Comprehensive catalogs for showcasing your products or services.' },
      { logo: Info_graphs, name: 'Infographics', description: 'Visually engaging infographics for data presentation.' },
    ],
    marketingMaterials: [
      { logo: E_News_Letter, name: 'E-Newsletters', description: 'Design eye-catching e-newsletters for customer engagement.' },
      { logo: Digital_Banner, name: 'Digital Banners', description: 'High-impact digital banners for online ads.' },
      { logo: Flex_banner, name: 'Flex Banners', description: 'Durable and attractive flex banners for promotions and events.' },
      { logo: BillBoard, name: 'Billboards', description: 'Design billboards that attract attention and increase visibility.' },
      { logo: Standees, name: 'Standees', description: 'Custom standees for events and exhibitions.' },
      { logo: Scroller, name: 'Scrollers', description: 'Eye-catching scrollers for public displays and announcements.' },
    ],
    mediaServices: [
      { logo: d_animation, name: '3D Animation', description: 'Create dynamic 3D animations for advertisements and presentations.' },
      { logo: d1_animation, name: '3D Product Modeling', description: 'Realistic 3D models of your products for promotion and visualization.' },
      { logo: d2_animation, name: '3D Walkthroughs', description: 'Interactive 3D walkthroughs to showcase your spaces or products.' },
      { logo: d3_animation, name: 'Motion Graphics Advertisements', description: 'Engaging motion graphics for eye-catching advertisements.' },
    ],
    socialMediaManagement: [
      { logo: Facebook, name: 'Facebook Posts', description: 'Custom Facebook posts to engage with your audience.' },
      { logo: Instagram, name: 'Instagram Posts', description: 'Visually appealing Instagram posts that attract attention.' },
      { logo: Linkedin, name: 'LinkedIn Posts', description: 'Professional LinkedIn posts to build your brand presence.' },
      { logo: Twitter, name: 'Twitter Posts', description: 'Creative Twitter posts to drive engagement and conversation.' },
      { logo: Snapchat, name: 'Snapchat Posts', description: 'Fun and engaging Snapchat posts to reach a younger audience.' },
    ],
    ppcCampaigns: [
      { logo: Social_media_ads, name: 'Social Media Ads', description: 'Targeted social media ads to increase your reach and conversions.' },
      { logo: Mail_Marketing, name: 'Email Marketing', description: 'Effective email marketing campaigns to drive sales and engagement.' },
    ],
    videoContent: [
      { logo: Instagram, name: 'Instagram Reels', description: 'Creative Instagram Reels to capture your audience’s attention.' },
      { logo: tik_tok, name: 'TikTok Videos', description: 'Engaging TikTok videos to connect with a younger audience.' },
      { logo: youtube_shots, name: 'YouTube Shorts', description: 'Short-form YouTube videos to increase brand visibility.' },
      { logo: long_video_formate, name: 'Long Format Videos', description: 'High-quality long-form videos for YouTube or other platforms.' },
    ],
    videoEditingPodcastManagement: [
      { logo: logo, name: 'Video Podcast Editing & Management', description: 'Professional editing and management of your video podcast.' },
      { logo: logo, name: 'Audio Podcast Editing & Management', description: 'Audio editing and management for your podcast production.' },
    ],
  };

  // Handle button click to show sub-services
  const handleClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  // Render the sub-services as cards
  const renderCards = () => {
    if (!selectedService) return null;

    const serviceList = services[selectedService];
    return serviceList.map((service, index) => (
      <div key={index} className="service-card">
        <img src={service.logo} alt={service.name} className="service-logo" />
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
    ));
  };

  return (
    <div className="media-service">
      <div className='media-service-headings'>
        <h2 className='media-service-healine'>Media Service We Offer</h2>
      </div>
      <div className="service-buttons">
        <button className={selectedService === 'graphicDesigning' ? 'selected' : ''} onClick={() => handleClick('graphicDesigning')}>Graphic Designing</button>
        <button className={selectedService === 'marketingMaterials' ? 'selected' : ''} onClick={() => handleClick('marketingMaterials')}>Marketing Materials</button>
        <button className={selectedService === 'mediaServices' ? 'selected' : ''} onClick={() => handleClick('mediaServices')}>3D & VFX</button>
        <button className={selectedService === 'socialMediaManagement' ? 'selected' : ''} onClick={() => handleClick('socialMediaManagement')}>Social Media Management</button>
        <button className={selectedService === 'ppcCampaigns' ? 'selected' : ''} onClick={() => handleClick('ppcCampaigns')}>PPC Campaigns</button>
        <button className={selectedService === 'videoContent' ? 'selected' : ''} onClick={() => handleClick('videoContent')}>Video Content</button>
        <button className={selectedService === 'videoEditingPodcastManagement' ? 'selected' : ''} onClick={() => handleClick('videoEditingPodcastManagement')}>Video Editing & Podcast Management</button>
      </div>

      <div className="service-cards">
        {renderCards()}
      </div>
    </div>
  );
};

export default MediaService;
