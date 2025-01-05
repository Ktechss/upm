import React from 'react';
import '../styles/MarketingSection1.css';
import { Button } from '../../moving-border/moving-border';

function MarketingSection1() {
  return (
    <section className='marketing-section-1'>
      <div className='marketing-section-1-text'>
        <h2><span style={{color:"#3d84e2", fontSize:"3.9rem"}}>Marketing</span><br></br> That Drives Impact and Delivers Growth</h2>
        {/* <p>From captivating animations to high-impact advertisements, our media services bring your ideas to life. Whether you're looking to elevate your brand with stunning visuals or create engaging content that resonates with your audience, we provide creative solutions that make an impact.</p> */}
        <p style={{textAlign:"justify"}}>At<span style={{color:"#3d84e2", fontSize:"1.3rem", fontWeight:"bold"}}> Unknown Pixel Media </span>, we don’t just market, we create strategies that resonate, engage, and deliver measurable results. Our digital marketing services are designed to amplify your brand’s voice, connect with your audience, and drive sustainable growth in an ever-evolving digital landscape.
        </p>
        {/* <button className='marketing-section-1-button'>Get Your Logo Today!</button> */}
        <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Explore Marketing Services!
                </Button>
      </div>
      <div className='marketing-section-1-content-box'>
        {/* <iframe src={Image1} className='marketing-section-1-images'></iframe> */}
      </div>
    </section>
  );
}

export default MarketingSection1;
