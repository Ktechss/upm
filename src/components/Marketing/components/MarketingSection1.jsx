import React from 'react';
import '../styles/MarketingSection1.css';

function MarketingSection1() {
  return (
    <section className='marketing-section-1'>
      <div className='marketing-section-1-text'>
        <h2>Transforming Your Vision Into Dynamic Media Experiences</h2>
        <p>From captivating animations to high-impact advertisements, our media services bring your ideas to life. Whether you're looking to elevate your brand with stunning visuals or create engaging content that resonates with your audience, we provide creative solutions that make an impact.</p>
        <button className='marketing-section-1-button'>Get Your Logo Today!</button>
      </div>
      <div className='marketing-section-1-content-box'>
        {/* <iframe src={Image1} className='marketing-section-1-images'></iframe> */}
      </div>
    </section>
  );
}

export default MarketingSection1;
