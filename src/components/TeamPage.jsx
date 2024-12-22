import React from 'react'
import TeamCard from './team_card/TeamCard'
import './TeamPage.css';
import team1 from '../assets/team2.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team2.png';
import videoSource from '../assets/videos/back_video.mp4';


function TeamPage() {
  const teamMembers = [
    { image: team1, name: 'Emmy Rosum', role: 'Co-Founder and CEO' },
    { image: team2, name: 'Orlando Diggs', role: 'Co-Founder and COO' },
    { image: team3, name: 'Sophie Chamberlain', role: 'Head of Sales' },
    
  ];
  return (
    <section className='teams-page' id='teams'>
      <video autoPlay loop muted className="background-video">
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className='team-page-headings'>
        <h2 className='team-page-headline'>Harnessing Expertise from the Top – Meet Our Team</h2>
        <br/>
        <h3 className='team-page-tagline'>Guided by the Best, Driven by Excellence</h3>
      </div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} image={member.image} name={member.name} role={member.role} />
        ))}
      </div>
    </section>
  )
}

export default TeamPage
