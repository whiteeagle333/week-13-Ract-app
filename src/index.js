// import the React library and its 'React' object
import React from "react";
// import the 'ReactDOM' library and its 'ReactDOM' object
import ReactDOM from "react-dom/client";
// import the CSS files for this app
import "./index.css";
// import the 'App' component from the './App.js' file
import App from "./App";
// import the 'reportWebVitals' function from the './reportWebVitals.js' file
import "./global.css";
import reportWebVitals from "./reportWebVitals";
// create a new React root with the 'ReactDOM.createRoot()' method
const root = ReactDOM.createRoot(document.getElementById("root"));
// render the 'App' component inside the root, wrapped in a 'React.StrictMode' element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// call the 'reportWebVitals()' function
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
