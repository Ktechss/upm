// components/Loader.js
import React from 'react';
import './Loader.css'; // Optional if you want additional styles
import rocketGif from './assets/Rocket-loading.gif'; // Adjust the path as needed

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={rocketGif} alt="Loading..." className="rocket-loader" />
    </div>
  );
};

export default Loader;
