// Import React and the "Background.css" file

import React from "react";
import "./Background.css";
// Define a new component called "Background"
const Background = ({ children }) => {
  return (
    // The component returns a div with two child divs
    <div className="background">
      <div className="background-image" />
      <div className="content">{children}</div>
    </div>
  );
};

export default Background;
