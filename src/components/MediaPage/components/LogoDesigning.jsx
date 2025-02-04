import React from 'react'
import '../styles/LogoDesigning.css';
import '../styles/SVG_style.css';
import Iamge1 from '../assets/media-service-image3.png';
import { Button } from '../../moving-border/moving-border';

function LogoDesigning() {
  const handleScroll = () => {
    const nextSection = document.getElementById("media-services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className='logo-design'>
      <div className='logo-design-text'>
        <h2>Crafting <span style={{color:"#3d84e2"}}>Media</span> That Inspires and Engages</h2>
        {/* <p>From captivating animations to high-impact advertisements, our media services bring your ideas to life. Whether you're looking to elevate your brand with stunning visuals or create engaging content that resonates with your audience, we provide creative solutions that make an impact.</p> */}
        <p style={{textAlign:"justify"}}>At<span style={{color:"#3d84e2", fontSize:"1.3rem", fontWeight:"bold"}}> Unknown Pixel Media </span>, we redefine creativity and innovation to deliver media solutions that truly stand out. From captivating designs to high-quality video production, and immersive 3D experiences, we offer a comprehensive range of services that bring your brand’s story to life.
        </p>
        {/* <button className='logo-design-button'>Explore Media Services!</button> */}
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        onClick={handleScroll}
        >
          Explore Media Services!
        </Button>
      </div>
      <div className='logo-design-content-box'>
        {/* <iframe src={Iamge1} className='logo-design-images'></iframe> */}
      </div>
    </section>
  )
}

export default LogoDesigning
