import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import './CountryClock.css';

const CountryClock = ({ countryName, timezone }) => {
  const [currentTime, setCurrentTime] = useState(moment.tz(timezone).format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment.tz(timezone).format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="country-clock">
      <div className="time">{currentTime}</div>
      <div className="country">{countryName}</div>
    </div>
  );
};

export default CountryClock;
