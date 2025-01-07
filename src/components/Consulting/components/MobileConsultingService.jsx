import React, { useState } from 'react';
import '../style/MobileConsultingService.css';

// Example data structure for service details
const serviceData = {
  1: {
    title: "Audit",
    subtitle: "Assessing the Foundation",
    description:
      "We start with a comprehensive evaluation of your current strategies, operations, and performance metrics to identify opportunities and gaps. Our audit services include:",
    deliverables: [
      "Comprehensive Business Assessment",
      "Digital Presence Analysis",
      "Customer Journey Mapping",
      "Competitive Benchmarking",
      "Technology & Tools Evaluation",
      "Brand Identity Review",
    ],
    timing: "3-4 weeks",
    outcome:
      "A comprehensive strategic analysis report of your brand (SWOT) with actionable insights.",
  },
  2: {
    title: "Build",
    subtitle: "Creating Scalable Solutions",
    description:
      "We help you develop robust strategies and frameworks tailored to your goals, focusing on both the creative and operational aspects.",
    deliverables: ["Item A", "Item B", "Item C"],
    timing: "2-3 weeks",
    outcome: "A fully functional and scalable ecosystem ready for implementation.",
  },
  3: {
    title: "Accelerate",
    subtitle: "Driving Growth and Innovation",
    description:
      "Once your foundation is built, we help you scale through advanced strategies and cutting-edge technology.",
    deliverables: ["Item X", "Item Y", "Item Z"],
    timing: "3-4 weeks",
    outcome:
      "Sustained growth, improved market presence, and a roadmap for future innovation.",
  },
};

function MobileConsultingService() {
  const [activeService, setActiveService] = useState(1); // Active service
  const [isExpanded, setIsExpanded] = useState(false); // "View More" state

  const service = serviceData[activeService]; // Current service data

  return (
    <div className="mobile-consulting-service">
      {/* Service Buttons */}
      <div className="mobile-service-buttons">
        <button
          onClick={() => {
            setActiveService(1);
            setIsExpanded(false);
          }}
          className={activeService === 1 ? "active" : ""}
        >
          Audit
        </button>
        <button
          onClick={() => {
            setActiveService(2);
            setIsExpanded(false);
          }}
          className={activeService === 2 ? "active" : ""}
        >
          Build
        </button>
        <button
          onClick={() => {
            setActiveService(3);
            setIsExpanded(false);
          }}
          className={activeService === 3 ? "active" : ""}
        >
          Accelerate
        </button>
      </div>

      {/* Service Content */}
      <div className="mobile-service-content">
        <h3>{service.title}</h3>
        <h4>{service.subtitle}</h4>
        <p>{service.description}</p>

        {/* Deliverables */}
        <h5>What We Deliver:</h5>
        <ul>
          {service.deliverables
            .slice(0, isExpanded ? service.deliverables.length : 3)
            .map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        {service.deliverables.length > 3 && (
          <button
            className="view-more-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        )}

        {/* Timing and Outcome */}
        <p>
          <strong>Timing:</strong> {service.timing}
        </p>
        <h5>Outcome:</h5>
        <p>{service.outcome}</p>

        {/* Schedule Service Button */}
        <div className="schedule-service-container">
          <a href="#contactus">
            <button className="schedule-service-button">Schedule Service</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileConsultingService;
