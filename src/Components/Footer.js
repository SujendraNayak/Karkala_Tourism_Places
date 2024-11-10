import React from "react";
import "./Footer.css"; // Optional: Add custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Karkala Tourism Places App. All rights reserved.</p>
      <p>Created by Sujendra Nayak and Sandhya Nayak.</p>
      <ul className="footer-links">
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
