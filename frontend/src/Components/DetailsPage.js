import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

// Importing local images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";

const DetailsPage = () => {
  const { id } = useParams(); // Get the card id from the URL

  // Card details for Gommateshwara statue
  const cardDetails = {
    img1: {
      title: "Gommateshwara Statue (Image 1)",
      description: (
        <>
          <h3>Construction</h3>
          <p>
            The statue was built in 1432 by Veera Pandya Bhairarasa Wodeyar, the
            scion of the Bhair Arasa dynasty. The statue was inspired by the
            larger Gommateshwara statue in Shravanabelagola, which was built in
            983.
          </p>
          <h3>Mahamastakabhisheka</h3>
          <p>
            This festival is held every 12 years, when the statue is bathed with
            milk, water, saffron paste, sandalwood powder, turmeric, and
            vermillion. Devotees carry 1,008 specially prepared vessels
            (Kalashas) to sprinkle consecrated water on participants as the
            festival begins.
          </p>
          <h3>Location</h3>
          <p>
            The statue is located on a rocky hill called Gommata Betta. It's on
            an elevated platform and is enclosed by a cloistered prakaram.
          </p>
          <h3>Size</h3>
          <p>
            The statue is 42 feet tall and 10.33 feet wide, and is said to weigh
            around 80 tons. It's the second tallest statue of Bahubali in the
            world.
          </p>
          <h3>Meaning</h3>
          <p>
            Gomateshwara was the second son of the first Tirthankara of Jains.
            He taught people to live in harmony with nature and to not harm any
            living being.
          </p>
          <h3>Nearby Attractions</h3>
          <p>
            There are 18 Jain Basadis in the area, including Chaturmukha Basadi
            and Kere Basadi. Moodabidri is another important Jain center nearby.
          </p>
        </>
      ),
      image: img1,
    },
    img2: {
      title: "Gommateshwara Statue (Image 2)",
      description: (
        <>
          <h3>Construction</h3>
          <p>
            The statue was built in 1432 by Veera Pandya Bhairarasa Wodeyar, the
            scion of the Bhair Arasa dynasty. The statue was inspired by the
            larger Gommateshwara statue in Shravanabelagola, which was built in
            983.
          </p>
          <h3>Mahamastakabhisheka</h3>
          <p>
            This festival is held every 12 years, when the statue is bathed with
            milk, water, saffron paste, sandalwood powder, turmeric, and
            vermillion. Devotees carry 1,008 specially prepared vessels
            (Kalashas) to sprinkle consecrated water on participants as the
            festival begins.
          </p>
          <h3>Location</h3>
          <p>
            The statue is located on a rocky hill called Gommata Betta. It's on
            an elevated platform and is enclosed by a cloistered prakaram.
          </p>
          <h3>Size</h3>
          <p>
            The statue is 42 feet tall and 10.33 feet wide, and is said to weigh
            around 80 tons. It's the second tallest statue of Bahubali in the
            world.
          </p>
          <h3>Meaning</h3>
          <p>
            Gomateshwara was the second son of the first Tirthankara of Jains.
            He taught people to live in harmony with nature and to not harm any
            living being.
          </p>
          <h3>Nearby Attractions</h3>
          <p>
            There are 18 Jain Basadis in the area, including Chaturmukha Basadi
            and Kere Basadi. Moodabidri is another important Jain center nearby.
          </p>
        </>
      ),
      image: img2,
    },
  };

  // Dynamically get the card details based on the id from the URL
  const card = cardDetails[id] || {
    title: "Unknown Card",
    description: <p>Details for card {id} are not available.</p>,
    image: img1,
  };

  return (
    <div className="details-page">
      <div className="image-container">
        <img src={card.image} alt={card.title} className="card-image" />
      </div>
      <div className="text-content">
        <h1>{card.title}</h1>
        <div>{card.description}</div>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default DetailsPage;
