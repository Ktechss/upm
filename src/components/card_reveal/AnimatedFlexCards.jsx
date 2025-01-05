import React, { useState, useEffect } from "react";
import "./AnimatedFlexCards.css"; // Import your CSS file

const AnimatedFlexCards = () => {
    const [selectedCard, setSelectedCard] = useState("c1");

    const cards = [
        {
            id: "c1",
            icon: "1",
            title: "Visionary Leadership",
            description: "We’re not just about today; we’re focused on the future. With a deep understanding of today and beyond, we design strategies that align with evolving trends, ensuring your business stays ahead in the digital age.",
        },
        {
            id: "c2",
            icon: "2",
            title: "Comprehensive Expertise",
            description: "Our team brings unparalleled experience in: Business strategy for growth and scalability. Media and creative design with cutting-edge 3D and VFX. Marketing strategies that deliver measurable results.",
        },
        {
            id: "c3",
            icon: "3",
            title: "Data-Driven Innovation",
            description: "We combine advanced analytics, trend insights, and global expertise to create impactful campaigns that resonate with your audience and boost ROI.",
        },
        {
            id: "c4",
            icon: "4",
            title: "Collaborative Global Team",
            description: "With a network of forward-thinking professionals, we bring a globally connected perspective, ensuring your brand’s voice is heard across borders.",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedCard((prevSelectedCard) => {
                const currentIndex = cards.findIndex((card) => card.id === prevSelectedCard);
                const nextIndex = (currentIndex + 1) % cards.length;
                return cards[nextIndex].id;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [cards]);

    return (
        <div className="AnimatedFlexCards-wrapper">
            <div className="AnimatedFlexCards-container">
                {cards.map((card) => (
                    <div key={card.id}>
                        <input
                            type="radio"
                            name="slide"
                            id={card.id}
                            checked={selectedCard === card.id}
                            onChange={() => setSelectedCard(card.id)}
                            className="AnimatedFlexCards-inputs"
                        />
                        <label htmlFor={card.id} className="AnimatedFlexCards-card">
                            <div className="AnimatedFlexCards-row">
                                <div className="AnimatedFlexCards-icon">{card.icon}</div>
                                <div className="AnimatedFlexCards-description">
                                    <h4>{card.title}</h4>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedFlexCards;