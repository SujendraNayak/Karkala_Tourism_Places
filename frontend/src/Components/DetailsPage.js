import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import cardData from "../data/cardData"; // Adjust the path if necessary

const DetailsPage = () => {
  const { id } = useParams(); // Get the card ID from the URL
  const navigate = useNavigate(); // Hook for navigation

  // Find the card matching the ID
  const card = cardData.find(card => card.id === id) || {
    title: "Unknown Card",
    description: <p>Details for card {id} are not available.</p>,
  };

  return (
    <div className="details-page">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
      <div className="text-content">
        <h1>{card.title}</h1>
        <div>{card.description}</div>
      </div>
    </div>
  );
};

export default DetailsPage;
