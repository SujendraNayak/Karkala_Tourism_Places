import React from 'react';
import './NavBar.css';

const NavBar = ({ isVisible }) => {
  if (!isVisible) return null;  // Hide NavBar if not visible

  return (
    <nav className="navbar">
      <h1 className="logo">My App</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
