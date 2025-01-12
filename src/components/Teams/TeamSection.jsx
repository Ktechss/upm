import React, { useState } from "react";
import "./TeamSection.css";
import img1 from './Baljit.jpg';
import img2 from './Kamaljeet_k.png';
import img3 from './teja_pic.png';

// Import custom icons
import facebookIcon from '../../assets/social_link_icons/facebook.png';
import instagramIcon from '../../assets/social_link_icons/instagram.png';
import linkedinIcon from '../../assets/social_link_icons/linkedin.png';
import twitterIcon from '../../assets/social_link_icons/youtube.png';

const teamMembers = [
  {
    name: "Matt Aitken",
    position: "Head of VFX",
    image: img1,
    socialLinks: [
      { link: "https://facebook.com/mattaitken", icon: facebookIcon },
      { link: "https://instagram.com/mattaitken", icon: instagramIcon },
      { link: "https://linkedin.com/in/mattaitken", icon: linkedinIcon },
    ],
  },
  {
    name: "John Doe",
    position: "Technical Director",
    image: img2,
    socialLinks: [
      { link: "https://facebook.com/johndoe", icon: facebookIcon },
      { link: "https://twitter.com/johndoe", icon: twitterIcon },
      { link: "https://linkedin.com/in/johndoe", icon: linkedinIcon },
    ],
  },
  {
    name: "Jane Smith",
    position: "Producer",
    image: img3,
    socialLinks: [
      { link: "https://instagram.com/janesmith", icon: instagramIcon },
      { link: "https://linkedin.com/in/janesmith", icon: linkedinIcon },
    ],
  },
];

function TeamSection() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="team-section">
      <h2 className="team-section-title">Meet Our Team</h2>
      <h3 className="team-section-sub-title">Get to Know the Forces Behind Our Success</h3>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-card ${activeCard === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="team-card-image-container">
              <img
                src={member.image}
                alt={member.name}
                className="team-card-image"
              />
              <div className="team-card-hover-overlay">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-position">{member.position}</p>
                <div className="team-card-social-links">
                  {member.socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src={social.icon}
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
