import React from "react";
import "./WhyChooseUs.css";
import video_editing_iamge from '../assets/services_images/video_editing.jpg';
import customer_satifaction_image from '../assets/services_images/satisfaction.jpg';
import consultancy_image from '../assets/services_images/consultancy.jpg';
import desigining_image from '../assets/services_images/desigining.jpg';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h5 className="section-subtitle">WHY CHOOSE US</h5>
      <h2 className="section-title">
        Why <span className="why-highlight">Unknown Pixel Media</span> is The Right Choice for You
      </h2>
      <div className="features-container">
        <div className="feature-card-container">
          <div className="feature-card-sub-conatiner">
            <div className="feature-card"
            style=
            {
              {
                background:`linear-gradient(to top,rgb(0, 0, 0),rgba(255, 255, 255, 0)),url(${consultancy_image})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
              }
              }
            >
            <div className="feature-info">
              <div className="icon"></div>
              <h3>Consultancy</h3>
              <p>
                Learn from top industry professionals who bring years of real-world
                experience to the classroom, providing you with the latest tools,
                techniques, and insights needed to excel in your field.
              </p>
              </div>
            </div>
            <div className="feature-card" 
            style=
            {
              {
                background:`linear-gradient(to top,rgb(0, 0, 0),rgba(255, 255, 255, 0)),url(${video_editing_iamge})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
              }
              }>
              <div className="feature-info">
              <div className="icon"></div>
              <h3>Video Editing</h3>
              <p>
                Earn certifications that are highly regarded by employers, helping
                you to enhance your resume, gain industry recognition, and open
                doors to new career opportunities.
              </p>
              </div>
            </div>
          </div>
          <div className="feature-card"
          style=
          {
            {
              background:`linear-gradient(to top,rgb(0, 0, 0),rgba(255, 255, 255, 0)),url(${customer_satifaction_image})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
              backgroundRepeat:'no-repeat'
            }
            }
          >
          <div className="feature-info">
            <div className="icon"></div>
            <h3>100+ Customer Satisfaction</h3>
            <p>
              expert.io offers over 100 courses that cover essential skills in
              today’s tech industry. Whether you're a beginner or an experienced
              professional, our courses in web development, data science, and
              cybersecurity provide practical, hands-on learning.
            </p>
          </div>
          </div>
        </div>
        <div className="feature-card-container">
          <div className="feature-card special-card"
          style=
          {
            {
              background:`linear-gradient(to top,rgb(0, 0, 0),rgba(255, 255, 255, 0)),url(${desigining_image})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
              backgroundRepeat:'no-repeat'
            }
            }
          >
          <div className="feature-info">
            <div className="icon"></div>
            <h3>Flexible Learning Schedules</h3>
            <p>
              At expert.io, we understand the importance of balancing learning
              with a busy lifestyle. That’s why our courses are available
              on-demand, allowing you to learn at your own pace, anytime and
              anywhere.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
