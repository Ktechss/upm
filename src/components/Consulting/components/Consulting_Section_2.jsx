import React from 'react';
import '../style/Consulting_Section_2.css';

// Import your logo images here
import logo1 from '../assets/Icons/Strategy .gif';
import logo2 from '../assets/Icons/Creative_Design.gif';
import logo3 from '../assets/Icons/Market_Research.gif';
import logo4 from '../assets/Icons/Execution.gif';

function Consulting_Section_2() {
  const cards = [
    {
      title: "Market Research",
      description: "In-depth insights to stay ahead in a competitive market.",
      logo: logo3, // Third card logo
    },
    {
      title: "Creative Design",
      description: "Crafting unique designs that resonate with your audience.",
      logo: logo2, // Second card logo
    },
    {
      title: "Strategy & Planning",
      description: "Helping brands create robust strategies for growth and success.",
      logo: logo1, // First card logo
    }, 
    {
      title: "Execution & Delivery",
      description: "Ensuring flawless execution and timely delivery.",
      logo: logo4, // Fourth card logo
    }
  ];

  return (
    <div className="Consulting_Section_2">
      <div className="section-2-contents">
        <h2>How we help</h2>
        <h3>brands to succeed</h3>
        <p>
          Our goal with every engagement is to provide more value than you paid for, leaving you with a volume of strategic insights & knowledge,<br></br> actionable solutions & market-ready ideas as well as a practical plan to make it real & sustainable.
        </p>
        <h5>Everything we do is tied back to these four main pillars:</h5>
        <div className="cards-container">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.logo} alt="logo" className="card-logo" />
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Consulting_Section_2;
