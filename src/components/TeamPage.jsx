import React from 'react'
import './TeamPage.css';
import AnimatedTestimonials from './ui/animated-testimonials';
import team_info from '../User_Data/Team_Data';

function TeamPage() {
  return (
    <section className='teams-page' id='teams'>
      <div className='team-page-headings'>
        <h2 className='team-page-headline'>Meet Our Team</h2>
        <br/>
        <h3 className='team-page-tagline'>Get to Know the Faces Behind Our Success</h3>
      </div>
      <div className="team-container">
      <AnimatedTestimonials testimonials={team_info} />
      </div>
    </section>
  )
}

export default TeamPage
