// CalendlyWidget.js
import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import './CalendlyWidget.css'; // Add styles specific to Calendly

const CalendlyWidget = () => {
  const [showWidget, setShowWidget] = useState(false);

  const toggleWidget = () => {
    setShowWidget(!showWidget);
  };

  return (
    <div className="calendly-widget">
      <InlineWidget url="https://calendly.com/unknownpixelmedia/30min" />
    </div>
  );
};

export default CalendlyWidget;
