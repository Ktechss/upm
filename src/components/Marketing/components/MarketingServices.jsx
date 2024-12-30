import React from 'react';
import '../styles/MarketingServices.css';
import crown_icon from '../assets/crown.png';

function MarketingServices() {
  const services = [
    {
      title: 'Starter Spark',
      items: [
        'Social Media Management (up to 3 platforms)',
        'Simple PPC Setup (introductory Google or social ads)',
        'Basic Website Setup (SEO optimization)',
        'Branded graphic/poster designs (for ads)',
      ],
    },
    {
      title: 'Growth Ignite',
      items: [
        'Social Media Management & Strategy (5 platforms, content scheduling)',
        'Enhanced SEO (on-page + introductory / google analytics-page)',
        'PPC Campaigns (Google & social ads with A/B testing)',
        'Monthly Email Marketing (basic newsletter design)',
        'Website Optimization (UX/UI improvements, mobile compatibility)',
        'Basic Content Creation (blogs & infographics)',
      ],
    },
    {
      title: 'Momentum Boost',
      items: [
        'Social Media & Influencer Marketing (7 platforms)',
        'Comprehensive SEO (on-page, off-page, technical)',
        'Advanced PPC & Retargeting (Google, social ads)',
        'Automated Email Marketing (drip sequences & segmentation)',
        'Conversion Rate Optimization Consultancy (website & landing pages)',
        'In-Depth Content Marketing (blogs, videos, infographics)',
        'Custom Website Enhancements (UX/UI overhaul)',
      ],
    },
  ];

  const allInOneGrowthSuite = {
    title: 'All-in-One Growth Suite',
    items: [
      'Full Social Media Growth Strategy (influencer and brand collaborations)',
      'Advanced SEO (technical, local, and comprehensive optimization)',
      'Complete Paid Advertising Management (multi-channel PPC & retargeting)',
      'Automated & Sales-Focused Email Marketing (drip, funnels)',
      'End-to-End Content Production (blogs, infographics, videos)',
      'Full Website Development (e-commerce, CMS integration, high-level UX/UI)',
      'Mobile & Security Optimization',
    ],
  };

  return (
    <div className="marketing-services">
      <section className="marketing-services-section">
        <h2 className="marketing-services-section-title">Marketing Services</h2>
        <div className="marketing-services-cards-container">

          {services.map((service, index) => (
            <div key={index} className="marketing-services-card">
              <div className='marketing-services-cards-icon-container'>
                <img className='marketing-services-cards-icon' src={crown_icon} />
              </div>
              <h3 className="marketing-services-card-title">{service.title}</h3>
              <ul className="marketing-services-list">
                {service.items.map((item, idx) => (
                  <li key={idx} className="marketing-services-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="marketing-services-all-in-one-growth">
        <div className='all-in-one-card'>
          <div className='marketing-service-section-title-container'>
          <div className='marketing-services-cards-icon-container'>
            <img className='marketing-services-cards-icon' src={crown_icon} />
          </div>
          <h2 className="marketing-services-section-title-next">{allInOneGrowthSuite.title}</h2>
          </div>
          
          <ul className="marketing-services-all-in-one-growth-list">
            {allInOneGrowthSuite.items.map((item, index) => (
              <li key={index} className="marketing-services-all-in-one-growth-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MarketingServices;
