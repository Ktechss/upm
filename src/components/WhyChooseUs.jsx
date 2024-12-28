import React, { useState, useEffect } from "react";
import "./WhyChooseUs.css";
import video_editing_image from "../assets/services_images/video_editing.jpg";
import video_editing_image1 from "../assets/services_images/video_editing_1.jpg";
import video_editing_image2 from "../assets/services_images/video_editing_2.jpg";

import customer_satisfaction_image from "../assets/services_images/data_driven_photo.jpg";
import customer_satisfaction_image1 from "../assets/services_images/data_driven_photo.jpg";
import customer_satisfaction_image2 from "../assets/services_images/data_driven_photo.jpg";

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

  // Fade-in effect using IntersectionObserver
  useEffect(() => {
    const subtitle = document.querySelector(".section-subtitle");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the class to trigger the fade-in effect
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target); // Stop observing after triggering the effect
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(subtitle); // Start observing the subtitle
  }, []);

  return (
    <section className="why-choose-us">
      <h2 className="section-title">
        Why <span className="why-highlight">Unknown Pixel Media</span> is The Right Choice for You
      </h2>
      <h5 className="section-subtitle">
        At Unknown Pixel Media, our vision is clear to be a global leader in digital space and marketing, using cutting-edge technology and creative strategies to empower businesses worldwide. Our mission drives us to deliver data-driven solutions tailored to your unique goals, with a globally connected team committed to excellence
      </h5>
      
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
                <div className="icon"></div>
                <h3>Visionary Leadership</h3>
                <p>
                  We’re not just about today; we’re focused on the future. With a deep understanding of today and beyond, we design strategies that align with evolving trends, ensuring your business stays ahead in the digital age.
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
                <div className="icon"></div>
                <h3>Comprehensive Expertise</h3>
                <p>
                  Our team brings unparalleled experience in: Business strategy for growth and scalability. Media and creative design with cutting-edge 3D and VFX. Marketing strategies that deliver measurable results.
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
              <div className="icon"></div>
              <h3>Data-Driven Innovation</h3>
              <p>
                We combine advanced analytics, trend insights, and global expertise to create impactful campaigns that resonate with your audience and boost ROI.
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
              <div className="icon"></div>
              <h3>Collaborative Global Team</h3>
              <p>
                With a network of forward-thinking professionals, we bring a globally connected perspective, ensuring your brand’s voice is heard across borders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
