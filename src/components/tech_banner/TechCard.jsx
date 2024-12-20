import React from 'react';
import './TechCard.css';

const TechCard = ({ techImage, techName, onClose }) => {
  return (
    <div className="tech-card">
      <img src={techImage} alt="Tech" className="tech-image" />
      <span className="tech-name">{techName}</span>
      <button className="close-icon" onClick={onClose}>X</button>
    </div>
  );
};

export default TechCard;
