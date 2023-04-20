import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
// import Clock from "./Clock";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      {/* App.js 3번줄에 있음 */}
      <App />
    </React.StrictMode>
  );
}); // , 1000
