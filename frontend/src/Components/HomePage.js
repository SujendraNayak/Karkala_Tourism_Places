import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import homeImage from "../assets/images/main.jpg"; // Replace with the actual image file and path
import CardSection from "./CardSection"; // Import the card section

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <div className="home-content">
        <h1>Welcome to My App</h1>
        <img src={homeImage} alt="Home" className="home-image" />
      </div>
      <CardSection /> {/* Add the card section here */}
      <Footer />
    </div>
  );
};

export default HomePage;
