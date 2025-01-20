import React, { useState } from "react";
import "./TeamSection.css";
import team_info from "../../User_Data/Team_Data"; // Import the dynamic team data

function TeamSection() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="team-section" id="teams">
      <h2 className="team-section-title">Meet Our Team</h2>
      <h3 className="team-section-sub-title">Get to Know the Forces Behind Our Success</h3>
      <div className="team-grid">
        {team_info.map((member, index) => (
          <div
            key={index}
            className={`team-card ${activeCard === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="team-card-image-container">
              <img
                src={member.src}
                alt={member.name}
                className="team-card-image"
              />
              <div className="team-card-hover-overlay">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-position">{member.designation}</p>
                <div className="team-card-social-links">
                  {member.socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                      rel={social.url.startsWith("mailto:") ? "" : "noopener noreferrer"}
                      className="social-link"
                    >
                      <img
                        src={social.iconPath}
                        alt={`${member.name} social`}
                        className="social-icon-image"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
