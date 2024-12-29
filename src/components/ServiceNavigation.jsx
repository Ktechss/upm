import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceNavigation.css';

const ServiceNavigation = ({ currentService, services }) => {
  return (
    <div className="service-navigation">
      <h3>Explore Our Other Services</h3>
      <ul>
        {services
          .filter((service) => service.name !== currentService)
          .map((service) => (
            <li key={service.name}>
              <Link to={service.path}>{service.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ServiceNavigation;
