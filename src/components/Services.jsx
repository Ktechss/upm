import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Services.css';
import service1 from '../assets/service2.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/Service3.png';

const ServiceCard = ({ title, image, description, navigateTo }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(navigateTo); // Navigate to the specified route
  };

  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <img src={image} alt={title} className="service-image" />
      <p className="service-description">{description}</p>
      <button className="explore-button" id='services-button' onClick={handleExplore}>
        Explore
      </button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Media',
      image: service1,
      description: 'It involves creating unique logos, consistent branding materials, and tailored illustrations to establish a cohesive and professional brand identity.',
      navigateTo: '/media', // Define the route to navigate to
    },
    {
      title: 'Marketing',
      image: service2,
      description: 'It involves creating unique logos, consistent branding materials, and tailored illustrations to establish a cohesive and professional brand identity.',
      navigateTo: '/marketing', // Define the route to navigate to
    },
    {
      title: 'Consultancy',
      image: service3,
      description: 'It involves creating unique logos, consistent branding materials, and tailored illustrations to establish a cohesive and professional brand identity.',
      navigateTo: '/consultancy', // Define the route to navigate to
    },
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">
        Services We <span style={{ color: '#3d84e2' }}>Offer</span>
      </h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            image={service.image}
            description={service.description}
            navigateTo={service.navigateTo} // Pass the route to navigate to
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
