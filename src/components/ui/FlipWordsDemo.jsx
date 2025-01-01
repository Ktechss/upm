import React from "react";
import { FlipWords } from "./FlipWords";
import { color } from "framer-motion";


export function FlipWordsDemo() {
  const words = ["Media Services", "Marketing Services", "Consultancy Services"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 flipwords" style={{zIndex:1,color:'white', lineHeight:1.5}}>
      We Deliver More Than Services<br/>
        <FlipWords words={words}/> <br />
        Creating Impact one
        <span style={{color: 'rgb(20, 184, 166)', fontWeight:'bold', fontSize:'3rem'}}> Bold </span> move at a time. 
      </div>
    </div>
  );
}
