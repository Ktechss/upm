import React from 'react'
import './WhyUs.css'
import AnimatedFlexCards from './card_reveal/AnimatedFlexCards'

function WhyUs() {
  return (
    <div className='WhyUs' >
      <h1>
        Why
        <span className="why-highlight"> Unknown Pixel Media </span>
        is<br /> The Right Choice for You
      </h1>
      <h5>
      At Unknown Pixel Media, our vision is to lead the global digital space by leveraging cutting-edge technology and creative strategies, empowering businesses to reach their full potential. Guided by our mission, we deliver innovative, data-driven solutions tailored to our clients’ goals, foster a global network of forward-thinking professionals, and adapt to the evolving digital landscape with a team dedicated to excellence.</h5>
      
      
      <AnimatedFlexCards />
    </div>
  )
}

export default WhyUs
