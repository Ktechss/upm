import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import "./StickyScroll.css";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  const videoRef = useRef();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--black)", "var(--black)", "var(--black)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="sticky-scroll-container custom-style"
      ref={ref}
    >
      <div className="sticky-scroll-content">
        <div className="sticky-scroll-inner">
          {content.map((item, index) => (
            <div key={item.title + index} className="sticky-scroll-card">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="sticky-scroll-title"
              >
                <div className="wave-title">
                  <h2>{item.title}</h2>
                  <h2>{item.title}</h2>
                </div>
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="sticky-scroll-description"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="sticky-scroll-footer" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn("sticky-scroll-sidebar", contentClassName)}
      >
        {content[activeCard]?.videoUrl ? (
          <video
            autoPlay
            loop
            muted
            src={content[activeCard].videoUrl}
            // controls
            className="w-full h-full object-cover"
            ref={videoRef}
          />
        ) : (
          <p className="text-center text-white">No video available</p>
        )}
      </div>
    </motion.div>
  );
};
