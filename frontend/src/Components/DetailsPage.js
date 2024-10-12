import React from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";
import Footer from "./Footer";
import img9 from "../assets/images/img9.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const DetailsPage = () => {
  const { id } = useParams(); // Get the card id from the URL
  //Array deatils each card

  const details = [
    {
      id: "1",
      image: img9,
      title: "Gommateshwara Statue",
      name: "Construction",
      description:
        "The statue was built in 1432 by Veera Pandya Bhairarasa Wodeyar...",
    },
    {
      id: "2",
      image: img2,
      title: "Manasthamba",
      name: "Symbol of Faith",
      description:
        "Manasthamba is a column often found in front of Jain temples...",
    },
    {
      id: "3",
      image: img3,
      title: "Nitte Arbhi Falls",
      name: "Natural Wonder",
      description:
        "Nitte Arbhi Falls is a hidden gem located in the coastal region...",
    },
  ];
  // Find the details for the current card based on the id
  const currentDetail = details.find((detail) => detail.id === id);

  if (!currentDetail) {
    return <p>Card not found</p>;
  }
  return (
    <>
      <h3 >{currentDetail.title}</h3>
      <div className="details-page">
        <div className="image-container">
          <img
            src={currentDetail.image}
            alt={currentDetail.title}
            className="card-image"
          />
        </div>
        <div className="text-content">
          <h1>{currentDetail.name}</h1>
          <p>{currentDetail.description}</p>
        </div>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </>
  );
};

export default DetailsPage;
