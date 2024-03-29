import reportWebVitals from "./reportWebVitals";
import App from "../src/Components/App/App";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
