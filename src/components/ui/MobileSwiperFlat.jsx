"use client";
import React, { useState } from "react";
import "./MobileSwiperFlat.css";

// Import content
import content from "../../User_Data/Media_data";

export default function MobileSwiperFlat() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mobile-swiper-flat">
      <div className="carousel-viewport">
        {/* Video Background */}
        <video
          src={content[activeIndex].videoUrl}
          autoPlay
          loop
          muted
          className="carousel-video"
        ></video>

        {/* Content Overlay */}
        <div className="carousel-overlay">
          <h1 className="carousel-title">{content[activeIndex].title}</h1>
          <p className="carousel-description">
            {content[activeIndex].description}
          </p>
          {content[activeIndex].cta && (
            <div className="carousel-cta">{content[activeIndex].cta}</div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="arrow-buttons-container">
        <button className="arrow-button left-arrow" onClick={handlePrev}>
          &larr;
        </button>
        <button className="arrow-button right-arrow" onClick={handleNext}>
          &rarr;
        </button>
      </div>
    </div>
  );
}
