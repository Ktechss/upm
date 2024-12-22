import React, { useState, useEffect } from "react";
import "./WhyChooseUs.css";
import video_editing_image from "../assets/services_images/video_editing.jpg";
import video_editing_image1 from "../assets/services_images/video_editing_1.jpg";
import video_editing_image2 from "../assets/services_images/video_editing_2.jpg";

import customer_satisfaction_image from "../assets/services_images/satisfaction.jpg";
import customer_satisfaction_image1 from "../assets/services_images/satisfaction_1.jpg";
import customer_satisfaction_image2 from "../assets/services_images/satisfaction_2.jpg";

import consultancy_image from "../assets/services_images/consultancy.jpg";
import consultancy_image1 from "../assets/services_images/consultancy_1.jpg";
import consultancy_image2 from "../assets/services_images/consultancy_2.jpg";

import designing_image from "../assets/services_images/desigining.jpg";
import designing_image1 from "../assets/services_images/desigining.jpg";
import designing_image2 from "../assets/services_images/desigining.jpg";

const WhyChooseUs = () => {
  // Image arrays for each card
  const consultancyImages = [
    consultancy_image,
    consultancy_image1,
    consultancy_image2,
  ];

  const videoEditingImages = [
    video_editing_image,
    video_editing_image1,
    video_editing_image2,
  ];

  const satisfactionImages = [
    customer_satisfaction_image,
    customer_satisfaction_image1,
    customer_satisfaction_image2,
  ];

  const designingImages = [
    designing_image,
    designing_image1,
    designing_image2,
  ];

  // States for current image index
  const [consultancyIndex, setConsultancyIndex] = useState(0);
  const [videoEditingIndex, setVideoEditingIndex] = useState(0);
  const [satisfactionIndex, setSatisfactionIndex] = useState(0);
  const [designingIndex, setDesigningIndex] = useState(0);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setConsultancyIndex((prev) => (prev + 1) % consultancyImages.length);
      setVideoEditingIndex((prev) => (prev + 1) % videoEditingImages.length);
      setSatisfactionIndex((prev) => (prev + 1) % satisfactionImages.length);
      setDesigningIndex((prev) => (prev + 1) % designingImages.length);
    }, 6500); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [consultancyImages, videoEditingImages, satisfactionImages, designingImages]);

  return (
    <section className="why-choose-us">
      <h5 className="section-subtitle">WHY CHOOSE US</h5>
      <h2 className="section-title">
        Why <span className="why-highlight">Unknown Pixel Media</span> is The Right Choice for You
      </h2>
      <div className="features-container">
        <div className="feature-card-container">
          <div className="feature-card-sub-conatiner">
            {/* Consultancy Card */}
            <div
              className="feature-card"
              style={{
                backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0)), url(${consultancyImages[consultancyIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="feature-info">
                <div className="icon">👨‍🏫</div>
                <h3>Consultancy</h3>
                <p>
                  Learn from top industry professionals who bring years of
                  real-world experience to the classroom, providing you with the
                  latest tools, techniques, and insights needed to excel in your
                  field.
                </p>
              </div>
            </div>

            {/* Video Editing Card */}
            <div
              className="feature-card"
              style={{
                backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0)), url(${videoEditingImages[videoEditingIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="feature-info">
                <div className="icon">📜</div>
                <h3>Video Editing</h3>
                <p>
                  Earn certifications that are highly regarded by employers,
                  helping you to enhance your resume, gain industry recognition,
                  and open doors to new career opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Satisfaction Card */}
          <div
            className="feature-card"
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0)), url(${satisfactionImages[satisfactionIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="feature-info">
              <div className="icon">📚</div>
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

        {/* Special Card */}
        <div className="feature-card-container">
          <div
            className="feature-card special-card"
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0)), url(${designingImages[designingIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="feature-info">
              <div className="icon">📅</div>
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
