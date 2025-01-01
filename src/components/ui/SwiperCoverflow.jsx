"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import content from "../../User_Data/Media_data"; // Adjust the path to where the `content` file is located

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./SwiperCoverflow.css";

export default function SwiperCoverflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update(); // Ensure Swiper recalculates dimensions

      // Set interval for auto-swipe (move right)
      const interval = setInterval(() => {
        swiperInstance.slidePrev(); // Move to the next slide (right direction)
      }, 3000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [swiperInstance]);

  return (
    <div className="SwiperCoverflow">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        navigation
        loop={true} // Enable looping for infinite swiping
        pagination={{ clickable: true }}
        effect="coverflow"
        direction="horizontal" // Ensure horizontal swiping (default)
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "40rem", width: "80%", background: "transparent" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide index
        onSwiper={setSwiperInstance} // Capture Swiper instance
      >
        {content.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: activeIndex === index ? 1 : 0.4, // Adjust opacity for active slide
              transition: "opacity 0.3s ease-in-out", // Smooth transition for opacity
              borderRadius: "20px", // Rounded corners
              overflow: "hidden", // Ensure content stays within borders
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for appearance
            }}
            aria-label={`Slide ${item.title}`}
          >
            <video
              src={item.videoUrl}
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
              }}
            ></video>
            {activeIndex === index && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(200deg, rgba(33, 149, 203, 0.38),rgba(0, 0, 0, 0.8))",
                  color: "#fff",
                  textAlign: "center",
                  borderRadius: "20px", // Match slide borders
                  cursor: "grab",
                }}
              >
                <h1
                  style={{
                    fontSize: "2.8rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    textShadow: "0px 3px 5px rgba(0, 0, 0, 0.63)",
                  }}
                >
                  {item.title}
                </h1>
                <p
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "2rem",
                    width: "80%",
                    textShadow: "0px 3px 3px rgba(0, 0, 0, 0.74)",
                  }}
                >
                  {item.description}
                </p>
                {item.cta}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
