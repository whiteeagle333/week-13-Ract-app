// import the React library

import React from "react";
// import the CSS file for the App component
import "./App.css";
// import the Navigation component
import Navigation from "./Navigation";
// import the LoginForm component
import LoginForm from "./LoginForm";
// define the App function component
function App() {
  // return the JSX for the App component
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
}
// export the App component as the default export
export default App;
