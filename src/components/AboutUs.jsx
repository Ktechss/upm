import React from 'react';
import './AboutUs.css';
import TeamCard from './team_card/TeamCard';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team1.jpg';
import team3 from '../assets/team1.jpg';

const AboutUs = () => {
  const teamMembers = [
    { image: team1, name: 'Emmy Rosum', role: 'Co-Founder and CEO' },
    { image: team2, name: 'Orlando Diggs', role: 'Co-Founder and COO' },
    { image: team3, name: 'Sophie Chamberlain', role: 'Head of Sales' },
  ];

  return (
    <section className="about-us" id="team">
      <h2 className="about-title">ABOUT US</h2>
      <p className="about-description">
        Pixel Media is a creative agency dedicated to helping businesses build powerful visual identities.
        We specialize in logo design, branding materials, and custom illustrations, delivering high-quality
        and innovative solutions tailored to your unique needs. Our mission is to combine creativity and
        expertise to ensure your brand stands out in a competitive market. With a commitment to excellence
        and client satisfaction, we transform ideas into impactful designs that leave a lasting impression.
      </p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} image={member.image} name={member.name} role={member.role} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
