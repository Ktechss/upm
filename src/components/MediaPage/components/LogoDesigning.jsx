import React from 'react'
import '../styles/LogoDesigning.css';
import '../styles/SVG_style.css';
import Iamge1 from '../assets/media-service-image3.png';

function LogoDesigning() {
  return (
    <section className='logo-design'>
      <div className='logo-design-text'>
        <h2>Transforming Your Vision Into Dynamic Media Experiences</h2>
        <p>From captivating animations to high-impact advertisements, our media services bring your ideas to life. Whether you're looking to elevate your brand with stunning visuals or create engaging content that resonates with your audience, we provide creative solutions that make an impact.</p>
        <button className='logo-design-button'>Get Your Logo Today!</button>
      </div>
      <div className='logo-design-content-box'>
        {/* <iframe src={Iamge1} className='logo-design-images'></iframe> */}
      </div>
    </section>
  )
}

export default LogoDesigning
