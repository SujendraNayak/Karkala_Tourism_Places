import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CardSection from "./CardSection"; // Import the card section

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <div className="home-content">
        <h1 className="animated-heading">Welcome to Karkala</h1>
        <p>
          Discover the amazing features of our platform. Start your journey today and transform the way you work!
        </p>
      </div>
      <CardSection /> {/* Add the card section here */}
      <Footer />
    </div>
  );
};

export default HomePage;
