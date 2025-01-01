"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(1),
      }
    );
  }, [scope]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="dark:text-white text-black opacity-1"
          style={{
            filter: filter ? "blur(10px)" : "none",
            color:'white',
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="" style={{color:'white'}}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
