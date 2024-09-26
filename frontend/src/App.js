import React, { useState } from 'react';
import NavBar from './Components/NavBar';  // Make sure the import is correct
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);  // State for visibility

  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };

  return (
    <Router>
      <div className="App">
        <button onClick={toggleNavBar}>
          {isNavBarVisible ? 'Hide NavBar' : 'Show NavBar'}
        </button>
        <NavBar isVisible={isNavBarVisible} />
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
