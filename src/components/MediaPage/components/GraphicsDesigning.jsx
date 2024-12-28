import React from 'react';
import '../styles/GraphicsDesigning.css';
import '../styles/SVG_style.css';
import Image1 from '../assets/B_card/Image1.png';
import Image2 from '../assets/B_card/Image2.png'; // Add more images as needed
import Image3 from '../assets/B_card/image3.png';
import Image4 from '../assets/B_card/image4.png';

function GraphicsDesigning() {
  return (
    <section className='graphics-design'>
      <div className='graphics-design-content-box'>
        {/* Infinite sliding container */}
        <div className='graphics-slider'>
        <div className='graphics-design-images' style={{ backgroundImage: `url(${Image1})` }}></div>
        <div className='graphics-design-images' style={{ backgroundImage: `url(${Image2})` }}></div>
        <div className='graphics-design-images' style={{ backgroundImage: `url(${Image3})` }}></div>
        <div className='graphics-design-images' style={{ backgroundImage: `url(${Image4})` }}></div>
        {/* Duplicate images for infinite effect */}
        <div className='graphics-design-images' style={{ backgroundImage: `url(${Image1})` }}></div>
        <div className='graphics-design-images' style={{ backgroundImage: `url(${Image2})` }}></div>
        <div className='graphics-design-images' style={{ backgroundImage: `url(${Image3})` }}></div>
        <div className='graphics-design-images' style={{ backgroundImage: `url(${Image4})` }}></div>

        </div>
      </div>
      <div className='graphics-design-text'>
        <h2>Get a Professional Business Card That Represents You</h2>
        <p>
        A business card is more than just contact info – it's a reflection of your brand. Let us design a professional, unique card that captures your values and makes a lasting impression every time you share it.
        </p>
        <button className='graphics-design-button'>Request YourCard Now!</button>
      </div>
    </section>
  );
}

export default GraphicsDesigning;
