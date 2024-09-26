import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from react-dom/client
import App from './App';
// import './index.css'; // Comment this out if you don't have index.css

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
