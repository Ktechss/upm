import React from 'react';
import './Services.css';
import service1 from '../assets/service2.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/Service3.png';

const ServiceCard = ({ title, image, description }) => {
  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <img src={image} alt={title} className="service-image" />
      <p className="service-description">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Media',
      image: service1,
      description: 'It involves creating unique logos, consistent branding materials, and tailored illustrations to establish a cohesive and professional brand identity.'
    },
    {
      title: 'Marketing',
      image: service2,
      description: 'It involves creating unique logos, consistent branding materials, and tailored illustrations to establish a cohesive and professional brand identity.'
    },
    {
      title: 'Consultancy',
      image: service3,
      description: 'It involves creating unique logos, consistent branding materials, and tailored illustrations to establish a cohesive and professional brand identity.'
    }
  ];

  return (
    <section className="services-section" id='services'>
      <h2 className="services-title">What We <span style={{color:'#007bff'}}>Offer</span>?</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title} 
            image={service.image} 
            description={service.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
