import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams(); // Get the card id from the URL

  return (
    <div className="details-page">
      <h1>Details Page for Card {id}</h1>
      <p>Here you can show more detailed information about card {id}.</p>
    </div>
  );
};

export default DetailsPage;
