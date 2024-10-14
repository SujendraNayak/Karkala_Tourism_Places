import React from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";
import Footer from "./Footer";
import img13 from "../assets/images/img13.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const DetailsPage = () => {
  const { id } = useParams(); // Get the card id from the URL

  // Array details for each card
  const details = [
    {
      id: "1",
      image: img13,
      title: "Gommateshwara Statue",
      name: "Construction",
      description: `
        The statue was built in 1432 by Veera Pandya Bhairarasa Wodeyar.
        The idol of Lord Bahubali, carved out of a single rock of granite,
        is 42 feet (13 m) tall, 10.33 feet (3.15 m) wide, and is said to be the second
        tallest statue of Bahubali in the world. The idol is placed on a 5 feet (1.5 m)
        pedestal and enclosed by cloistered prakaram. In the entrance room,
        a few sculptures of Tirthankaras are displayed. In front of the temple
        is a manastambha with an image of Yaksha within a niche. The statue is depicted
        in kayotsarga posture with curly hair ringlets, large ears, and palms stretching up to the knees.
        The idol weighs over 80 tonnes. It is located 300 feet (91 m) above sea level.
        Gommateshwara statues at Shravanabelagola, Dharmasthala, Venur, Gommatagiri, along with the one in Karkala,
        are the five monolithic statues of Bahubali in Karnataka.
        The monolithic colossal statues of Bahubali at Shravanabelagola, Karkala, and Venur are considered wonders of the world.
      `,
      additionalHeading: "Significance",
      additionalDetails: `
        The Gommateshwara statue holds immense religious significance for the Jain community,
        symbolizing renunciation and spiritual liberation. It is a major pilgrimage site,
        drawing visitors and devotees from around the world.
      `,
    },
    {
      id: "2",
      image: img2,
      title: "Manasthamba",
      name: "Symbol of Faith",
      description: `
        Manasthamba is a column often found in front of Jain temples, symbolizing the aspiration
        for spiritual awakening. This architectural feature is significant within Jain culture, serving
        as a reminder of Jain teachings and principles.
      `,
      additionalHeading: "Architectural Details",
      additionalDetails: `
        The column is typically adorned with intricate carvings, including images of deities
        and sacred symbols. Its design reflects the ancient artistry of Jain temple construction.
      `,
    },
    {
      id: "3",
      image: img3,
      title: "Nitte Arbhi Falls",
      name: "Natural Wonder",
      description: `
        Nitte Arbhi Falls is a hidden gem located in the coastal region of Karnataka. 
        Nestled amidst lush greenery, the waterfall provides a serene escape for nature enthusiasts
        and is a popular spot for weekend getaways.
      `,
      additionalHeading: "Best Time to Visit",
      additionalDetails: `
        The ideal time to visit Nitte Arbhi Falls is during the monsoon season, when the water
        flow is at its peak, offering a spectacular view and refreshing experience.
      `,
    },
  ];

  // Find the details for the current card based on the id
  const currentDetail = details.find((detail) => detail.id === id);

  if (!currentDetail) {
    return <p>Card not found</p>;
  }

  return (
    <>
      <h3>{currentDetail.title}</h3>
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
          <h2>{currentDetail.additionalHeading}</h2>
          <p>{currentDetail.additionalDetails}</p>
        </div>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </>
  );
};

export default DetailsPage;
