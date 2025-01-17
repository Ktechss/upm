import React from 'react';
import './UpmAboutUs.css';
import back_video from './assets/video/abvsw.mp4';
import image1 from './assets/images/vision_leader_ship.jpg';
import image2 from './assets/images/Mission_image.jpg';
import image3 from './assets/images/core_value.jpg';
import InstagramFeed from '../Instagram_Component/InstagramFeed';

const UpmAboutUs = () => {
    return (
        <>
        {/* Dynamically render MobileHeader or Header */}

            <div className="About-Us-upm-about-us">
                <div className="About-Us-video-overlay"></div>
                <video className="About-Us-background-video" autoPlay loop muted playsInline>
                    <source src={back_video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="About-Us-content">
                    <h1 className="About-Us-text-reveal" style={{ animationDelay: '1.5s' }}>Unknown Pixel Media</h1>
                    <h1 className="About-Us-text-reveal About-Us-another-text">""</h1>
                </div>
            </div>
            <div className="About-Us-sections">
                <section className="About-Us-section About-Us-vision-section">
                    <div className="About-Us-section-content">
                        <h2 className="About-Us-section-title">Vision</h2>
                        <p className="About-Us-section-text">
                            To become a global leader in the digital space, harnessing cutting-edge technology and creative strategies to empower businesses worldwide. Our aim is to help clients achieve their full potential in the ever-evolving digital landscape.
                        </p>
                    </div>
                    <img src={image1} alt="Vision" className="About-Us-section-image" />
                </section>

                <section className="About-Us-section About-Us-mission-section">
                    <img src={image2} alt="Mission" className="About-Us-section-image" />
                    <div className="About-Us-section-content">
                        <h2 className="About-Us-section-title">Mission</h2>
                        <p className="About-Us-section-text">
                            At Unknown Pixel Media, we strive to deliver innovative, data-driven solutions uniquely tailored to align with our clients’ specific goals. Our mission is to:
                        </p>
                        <ul className="About-Us-section-list">
                            <li>Foster a global network of forward-thinking professionals.</li>
                            <li>Leverage the latest trends and technologies to drive exceptional results.</li>
                            <li>Embrace and adapt to the evolving needs and behaviors of modern audiences.</li>
                            <li>Maintain a globally connected team of dedicated experts committed to excellence.</li>
                        </ul>
                    </div>
                </section>

                <section className="About-Us-section About-Us-values-section">
                    <div className="About-Us-section-content">
                        <h2 className="About-Us-section-title">Our Core Values</h2>
                        <ul className="About-Us-section-list">
                            <li><span style={{fontWeight:'bold'}}>Client-Centric Approach:</span> We prioritize understanding and fulfilling the unique visions of every client.</li>
                            <li><span style={{fontWeight:'bold'}}>Innovation:</span> We use creative and technological advancements to craft strategies that set our clients apart.</li>
                            <li><span style={{fontWeight:'bold'}}>Excellence:</span> We are committed to delivering exceptional outcomes and building lasting partnerships.</li>
                            <li><span style={{fontWeight:'bold'}}>Integrity:</span> Transparency and trust are at the heart of every project we undertake.</li>
                            <li><span style={{fontWeight:'bold'}}>Global Perspective:</span> With a globally connected team, we bring diverse insights to drive meaningful results.</li>
                        </ul>
                    </div>
                    <img src={image3} alt="Values" className="About-Us-section-image" />
                </section>

                <section className="About-Us-cta-section">
                    <p className="About-Us-cta-text">
                        Unknown Pixel Media isn’t just about solutions—it’s about realizing dreams, helping businesses achieve unique goals, and creating strategies that stand out in a crowded world. We’re here to make your vision a reality.
                    </p>
                    <p className="About-Us-cta-highlight">Let’s Create Something Remarkable Together</p>
                    <a href="#contactus" className="About-Us-cta-button">Connect With Us Today</a>
                </section>
            </div>
            <InstagramFeed/>
        </>
    );
};

export default UpmAboutUs;
