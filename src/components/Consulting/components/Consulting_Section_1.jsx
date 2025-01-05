import React from 'react';
import '../style/Consulting_Section_1.css';
import back_video from '../assets/videos/Consult_Video_1.mp4';

function Consulting_Section_1() {
    return (
        <div className="Consulting_Section_1" id="Consulting_Section_1">
            {/* Background Video */}
            <video className="background-video" src={back_video} autoPlay loop muted></video>

            {/* Overlay Content */}
            <div className="section-1-content">
                <div className="section-1-heading-box">
                    {/* <h2>Service</h2> */}
                    <h3 style={{textShadow:"0px 1px 3px rgb(0,0,0,0.30)"}}><span style={{color:"rgb(42, 109, 216)"}}>CONSULTANCY SERVICES </span></h3>
                </div>
            </div>
            <div className='section-1-display-contents'>
                        <p>
                        {/* Unlock your brand's full potential with our tailored consulting solutions. Whether you're looking to refine your strategy, optimize operations, or drive impactful growth, we bring insights, expertise, and innovative approaches to help your business thrive. */}
                        At Unknown Pixel Media, we’re more than advisors—we’re your partners in crafting strategies that fuel growth and innovation. Our consultancy services are designed to analyze, optimize, and transform your business operations, ensuring you achieve your unique goals in a competitive marketplace.
                        </p>
                    </div>
        </div>
    );
}

export default Consulting_Section_1;
