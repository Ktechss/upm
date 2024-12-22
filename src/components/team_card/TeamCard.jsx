import React from 'react';
import './TeamCard.css';

const TeamCard = ({ image, name, role }) => {
  if (!image || !name || !role) {
    return null; // Handle missing props gracefully
  }

  return (
    <div className="team-card">
      <img 
        src={image} 
        alt={`${name}'s photo`} 
        className="team-image" 
        style={{
          
        }} 
      />
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
