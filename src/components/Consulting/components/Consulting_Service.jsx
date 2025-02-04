import React, { useState } from 'react';
import '../style/Consulting_Service.css';
import Business_Performance_Audit from '../../../assets/services_icons/Business_Performance_Audit.png';
import Digital_Presence_Analysis from '../../../assets/services_icons/Digital-Presence.png';
import Brand_Identity_Review from '../../../assets/services_icons/Brand-Identity.png';
import Competitive_Benchmarking from '../../../assets/services_icons/Competitive-Benchmarking.png';
import Customer_Experience_Mapping from '../../../assets/services_icons/Customer-Experience.png';
import Technology_Tools_Assessment from '../../../assets/services_icons/Technology.png';

import Strategic_Roadmap_Development from '../../../assets/services_icons/Strategic-Roadmap-Development.png';
import Brand_Building from '../../../assets/services_icons/Brand-Building.png';
import Content_Creation_Strategy from '../../../assets/services_icons/ccs.png';
import Platform_Integration from '../../../assets/services_icons/platform-integration.png';
import Team_Enablement from '../../../assets/services_icons/Team-Enablement.png';
import Customized_Campaigns from '../../../assets/services_icons/coustomized-campaigns.png';

import Performance_Optimization from '../../../assets/services_icons/Performance-Optimization.png';
import Advanced_Analytics_Reporting from '../../../assets/services_icons/Advanced-Analytics.png';
import Conversion_Rate_Optimization from '../../../assets/services_icons/Conversion-Rate.png';
import SEO_PPC_Scaling from '../../../assets/services_icons/SEO.png';
import Omnichannel_Marketing from '../../../assets/services_icons/Omnichannel.png';
import Influencer_Partnership_Management from '../../../assets/services_icons/Influencer.png';
import Innovation_Workshops from '../../../assets/services_icons/Innovation-Workshops.png';

// Example data structure for service details
const serviceData = {
  1: {
    title: "Audit",
    subtitle: "Assessing the Foundation",
    description: "We start with a comprehensive evaluation of your current strategies, operations, and performance metrics to identify opportunities and gaps. Our audit services include:",
    deliver: "What We Deliver in the Audit Process",
    deliverables: ["Comprehensive Business Assessment", "Digital Presence Analysis", "Customer Journey Mapping", "Competitive Benchmarking", "Technology & Tools Evaluation", "Brand Identity Review"],
    timing: "3-4 weeks",
    outcome: "A comprehensive strategic analysis report of your brand (SWOT) with actionable insights.",
    features: [
      { icon: Business_Performance_Audit, title: "Business Performance Audit", description: "Evaluating current marketing, sales, and branding efforts." },
      { icon: Digital_Presence_Analysis, title: "Digital Presence Analysis", description: "Assessing your website, SEO, and social media impact." },
      { icon: Brand_Identity_Review, title: "Brand Identity Review", description: "Checking consistency in design, tone, and messaging." },
      { icon: Competitive_Benchmarking, title: "Competitive Benchmarking", description: "Comparing your strategies against industry leaders." },
      { icon: Customer_Experience_Mapping, title: "Customer Experience Mapping", description: "Understanding your customer’s journey from awareness to loyalty.." },
      { icon: Technology_Tools_Assessment, title: "Technology & Tools Assessment", description: "Evaluating your existing tech stack for efficiency." }
    ]
  },
  2: {
    title: "Build",
    subtitle: "Creating Scalable Solutions",
    description: "We help you develop robust strategies and frameworks tailored to your goals, focusing on both the creative and operational aspects. Build services include:",
    deliverables: ["Scalable Ecosystem", "Enhanced Brand Identity", "Audience Engagement", "Empowered Teams"],
    timing: "2-3 weeks",
    outcome: "A fully functional and scalable ecosystem ready for implementation.",
    deliver: "What We Deliver in the Audit Process",
    features: [
      { icon: Strategic_Roadmap_Development, title: "Strategic Roadmap Development", description: "Crafting a tailored business growth plan aligned with your unique objectives." },
      { icon: Brand_Building, title: "Brand Building", description: "Designing logos, visual identities, and defining the tone of voice for consistent branding." },
      { icon: Content_Creation_Strategy, title: "Content Creation Strategy", description: "Ensuring content aligns with your goals and captivates your target audience." },
      { icon: Platform_Integration, title: "Platform Integration", description: "Setting up tools for automation, analytics, and CRM to enhance operational efficiency." },
      { icon: Team_Enablement, title: "Team Enablement", description: "Training your teams on marketing, media, and operational best practices.." },
      { icon: Customized_Campaigns, title: "Customized Campaigns", description: "Creating impactful campaigns leveraging PPC, social media, and influencer collaborations." },
    ]
  },
  3: {
    title: "Accelerate",
    subtitle: "Driving Growth and Innovation",
    description: "Once your foundation is built, we help you scale through advanced strategies and cutting-edge technology. Accelerate services include:",
    deliverables: ["Sustained Growth", "Higher ROI", "Expanded Reach", "Data-Driven Decisions", "Competitive Advantage", "Future-Ready Teams"],
    timing: "3-4 weeks",
    outcome: "Sustained growth, improved market presence, and a roadmap for future innovation.",
    features: [
      { icon: Performance_Optimization, title: "Performance Optimization", description: "Improving ROI on marketing and media campaigns." },
      { icon: Advanced_Analytics_Reporting, title: "Advanced Analytics & Reporting", description: "Implementing dashboards for real-time insights." },
      { icon: Conversion_Rate_Optimization, title: "Conversion Rate Optimization", description: "Refining websites and landing pages for higher engagement." },
      { icon: SEO_PPC_Scaling, title: "SEO & PPC Scaling", description: "Expanding reach through targeted ads and technical SEO." },
      { icon: Omnichannel_Marketing, title: "Omnichannel Marketing", description: "Aligning messaging across platforms for consistent brand presence." },
      { icon: Influencer_Partnership_Management, title: "Influencer & Partnership Management", description: "Collaborating with influencers and affiliates to amplify reach." },
      { icon: Innovation_Workshops, title: "Innovation Workshops", description: "Helping your team stay ahead of industry trends through tailored training." },
    ]
  }
};

function Consulting_Section_3_Service() {
  const [activeService, setActiveService] = useState(1);

  const handleServiceClick = (serviceNumber) => {
    setActiveService(serviceNumber);
  };

  const service = serviceData[activeService];

  return (
    <div className="Consulting_Section_3_Service">
      <div className="Consulting_Section_3_Service-buttons">
        <button onClick={() => handleServiceClick(1)} className={activeService === 1 ? "active" : ""}>Audit</button>
        <button onClick={() => handleServiceClick(2)} className={activeService === 2 ? "active" : ""}>Build</button>
        <button onClick={() => handleServiceClick(3)} className={activeService === 3 ? "active" : ""}>Accelerate</button>
      </div>

      <div className="Consulting_Section_3_Service-content">
        <div className="Consulting_Section_3_Service-left">
          <h3>{service.title}</h3>
          <h4>{service.subtitle}</h4>
          <p>{service.description}</p>
          <h4>{service.deliver}</h4>
          <ul>{service.deliverables.map((item, index) => (<li key={index}>{item}</li>))}</ul>
          <p>Timing: {service.timing}</p>
          <h4>Outcome:</h4>
          <p>{service.outcome}</p>
          <a href='#contactus'><button>Schedule Service</button></a>
        </div>

        <div className="Consulting_Section_3_Service-right">
          {service.features.map((feature, index) => (
            <div key={index} className="Consulting_Section_3_Service-item">
              <span className="icon">{ <img src={feature.icon} alt="Feature Icon" className='feature-icon' />}</span>
              <div><h4>{feature.title}</h4><p>{feature.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Consulting_Section_3_Service;
