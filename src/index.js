import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Ensure that the root element exists in your HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the React App wrapped with StrictMode for development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measuring performance (optional)
reportWebVitals();
