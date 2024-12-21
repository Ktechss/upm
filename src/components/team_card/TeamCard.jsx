import React from 'react';
import './TeamCard.css';

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="team-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
