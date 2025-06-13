import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ServiceNavigation.css';

const ServiceNavigation = ({ currentService, services }) => {
  const location = useLocation(); // Get current location
  const isHomePage = location.pathname === "/"; // Check if on home page

  return (
    <div className="service-navigation">
      <h3 className={isHomePage ? "white-text" : "black-text"}>
        {isHomePage ? "Service Portfolio" : "Explore Our Other Services"}
      </h3>
      <ul>
        {services
          .filter((service) => service.name !== currentService)
          .map((service) => (
            <li key={service.name}>
              <Link to={service.path} className={isHomePage ? "white-text" : "black-text"}>
                {service.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ServiceNavigation;
