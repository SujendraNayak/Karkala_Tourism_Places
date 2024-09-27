import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage"; // Correct path for HomePage component
import DetailsPage from "./Components/DetailsPage"; // For the card details

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/details/:id" element={<DetailsPage />} />{" "}
          {/* Dynamic details page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
