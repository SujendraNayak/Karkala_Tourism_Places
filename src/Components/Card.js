import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"; // CSS for styling the cards

const Card = ({ imgSrc, title, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link); // Redirect to the specific page
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={imgSrc} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;