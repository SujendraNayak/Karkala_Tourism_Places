import React from "react";
import Card from "./Card";
import "./CardSection.css"; // CSS for styling the card section
import img1 from "../assets/images/img1.jpg"; // Add your images here
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";

const CardSection = () => {
  const cards = [
    { id: 1, imgSrc: img1, title: "Gomateshwara", link: "/details/1" },
    { id: 2, imgSrc: img2, title: "Koti-Channaya Theme Park", link: "/details/2" },
    { id: 3, imgSrc: img3, title: "Manasthamba", link: "/details/3" },
    { id: 4, imgSrc: img4, title: "Varanga Jain Temple", link: "/details/4" },
    { id: 5, imgSrc: img5, title: "Attur Church", link: "/details/5" },
    { id: 6, imgSrc: img6, title: "Anekere Jain Temple", link: "/details/6" },
    { id: 7, imgSrc: img7, title: "Chaturmukha Basadi", link: "/details/7" },
    { id: 8, imgSrc: img8, title: "Marigudi Temple", link: "/details/8" },
    { id: 9, imgSrc: img9, title: "Ramasamudra", link: "/details/9" },
    { id: 10, imgSrc: img10, title: "Paduthirupati Temple", link: "/details/10" },
    { id: 11, imgSrc: img11, title: "Nakre Kallu", link: "/details/11" },
    { id: 12, imgSrc: img12, title: "Nitte Arbhi Falls",link:"/details/12"},

  ];

  return (
    <div className="card-section">
      <button className="explore-more-button">Explore More</button>
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
