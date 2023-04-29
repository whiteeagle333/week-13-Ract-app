// import the React library and its 'React' object
import React from "react";

// return a block of JSX code that creates a navigation menu
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
// export the 'Navigation' component as the default export of this file
export default Navigation;
