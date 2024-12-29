import React, { useState } from 'react';
import '../style/Consulting_Service.css'

// Example data structure for service details
const serviceData = {
  1: {
    title: "Audit",
    subtitle: "Assessing the Foundation",
    description: "We start with a comprehensive evaluation of your current strategies, operations, and performance metrics to identify opportunities and gaps. Our audit services include:",
    deliverables: ["Item 1", "Item 2", "Item 3"],
    timing: "1-2 weeks",
    outcome: "A detailed report highlighting strengths, weaknesses, opportunities, and threats (SWOT) with actionable insights.",
    features: [
      { icon: "📦", title: "Business Performance Audit:", description: "Evaluating current marketing, sales, and branding efforts." },
      { icon: "💡", title: "Digital Presence Analysis:", description: "Assessing your website, SEO, and social media impact." },
      { icon: "📦", title: "Brand Identity Review:", description: "Checking consistency in design, tone, and messaging." },
      { icon: "📦", title: "Competitive Benchmarking:", description: "Comparing your strategies against industry leaders." },
      { icon: "💡", title: "Customer Experience Mapping:", description: "Understanding your customer’s journey from awareness to loyalty.." },
      { icon: "💡", title: "Technology &amp; Tools Assessment:", description: "Evaluating your existing tech stack for efficiency." }
    ]
  },
  2: {
    title: "Build",
    subtitle: "Creating Scalable Solutions",
    description: "We help you develop robust strategies and frameworks tailored to your goals, focusing on both the creative and operational aspects. Build services include:",
    deliverables: ["Item A", "Item B", "Item C"],
    timing: "2-3 weeks",
    outcome: "A fully functional and scalable ecosystem ready for implementation.",
    features: [
      { icon: "🔧", title: "Strategic Roadmap Development:", description: "Crafting a tailored business growth plan." },
      { icon: "📊", title: "Brand Building:", description: "Designing logos, visual identity, and tone of voice." },
      { icon: "🔧", title: "Content Creation Strategy:", description: "Developing blogs, videos, infographics, and podcasts to resonate with your audience." },
      { icon: "📊", title: "Platform Integration:", description: "Setting up tools for automation, analytics, and CRM." },
      { icon: "🔧", title: "Team Enablement:", description: "Training your teams on best practices in marketing and media." },
      { icon: "📊", title: "Customized Campaigns:", description: "Building campaigns that leverage PPC, social media, and influencer collaborations." },
    ]
  },
  3: {
    title: "Accelerate",
    subtitle: "Driving Growth and Innovation",
    description: "Once your foundation is built, we help you scale through advanced strategies and cutting-edge technology. Accelerate services include:",
    deliverables: ["Item X", "Item Y", "Item Z"],
    timing: "3-4 weeks",
    outcome: "Sustained growth, improved market presence, and a roadmap for future innovation.",
    features: [
      { icon: "🧰", title: "Performance Optimization:", description: "Improving ROI on marketing and media campaigns." },
      { icon: "📈", title: "Advanced Analytics &amp; Reporting:", description: "Implementing dashboards for real-time insights." },
      { icon: "🧰", title: "Conversion Rate Optimization:", description: "Refining websites and landing pages for higher engagement." },
      { icon: "📈", title: "SEO &amp; PPC Scaling:", description: "Expanding reach through targeted ads and technical SEO." },
      { icon: "🧰", title: "Omnichannel Marketing:", description: "Aligning messaging across platforms for consistent brand presence." },
      { icon: "📈", title: "Influencer & Partnership Management:", description: "Collaborating with influencers and affiliates to amplify reach." },
      { icon: "📈", title: "Innovation Workshops:", description: "Helping your team stay ahead of industry trends through tailored training." },
    ]
  }
};

function Consulting_Section_3_Service() {
  // State to track which service content should be displayed
  const [activeService, setActiveService] = useState(1);

  // Function to handle button click and set the active service
  const handleServiceClick = (serviceNumber) => {
    setActiveService(serviceNumber);
  };

  const service = serviceData[activeService]; // Fetch the data for the active service

  return (
    <div className="Consulting_Section_3_Service">
      <div className="Consulting_Section_3_Service-buttons">
        <button
          onClick={() => handleServiceClick(1)}
          className={activeService === 1 ? "active" : ""}
        >
          Audit
        </button>
        <button
          onClick={() => handleServiceClick(2)}
          className={activeService === 2 ? "active" : ""}
        >
          Build
        </button>
        <button
          onClick={() => handleServiceClick(3)}
          className={activeService === 3 ? "active" : ""}
        >
          Accelerate
        </button>
      </div>


      <div className="Consulting_Section_3_Service-content">
        {/* Left side of the div */}
        <div className="Consulting_Section_3_Service-left">
          <h3>{service.title}</h3>
          <h4>{service.subtitle}</h4>
          <p>{service.description}</p>

          <h4>Sample Deliverables:</h4>
          <ul>
            {service.deliverables.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p>Timing: {service.timing}</p>
          <h4>Outcome:</h4>
          <p>{service.outcome}</p>
          <button>Learn More</button>
        </div>

        {/* Right side of the div */}
        <div className="Consulting_Section_3_Service-right">
          {service.features.map((feature, index) => (
            <div key={index} className="Consulting_Section_3_Service-item">
              <span className="icon">{feature.icon}</span>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Consulting_Section_3_Service;
