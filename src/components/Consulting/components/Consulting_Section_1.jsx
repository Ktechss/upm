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
                    <h2>Service</h2>
                    <h3>CONSULTING</h3>
                </div>
            </div>
            <div className='section-1-display-contents'>
                        <p>
                        Unlock your brand's full potential with our tailored consulting solutions. Whether you're looking to refine your strategy, optimize operations, or drive impactful growth, we bring insights, expertise, and innovative approaches to help your business thrive.
                        </p>
                    </div>
        </div>
    );
}

export default Consulting_Section_1;
