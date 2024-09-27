import React from "react";
import Card from "./Card";
import "./CardSection.css"; // CSS for styling the card section
import img1 from "../assets/images/img1.jpg"; // Add 9 images here
import img2 from "../assets/images/img2.jpg";
// ... (Add more images up to img9)

const CardSection = () => {
  const cards = [
    { id: 1, imgSrc: img1, title: "Card 1", link: "/details/1" },
    { id: 2, imgSrc: img2, title: "Card 2", link: "/details/2" },
    // ... Add more cards for each image
  ];

  return (
    <div className="card-section">
      <h2>Explore More</h2>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
