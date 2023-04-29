//import the React library and its 'React' object

import React from "react";
// define a functional component named 'LoginForm'
const LoginForm = () => {
  // return a block of JSX code that creates a login form
  return (
    <div className="login-form">
      <form>
        <h3 className="login-title" style={{ color: "white" }}>
          Log In
        </h3>
        <label htmlFor="username">
          <h4 style={{ color: "white" }}>Username:</h4>
          <input
            type="text"
            id="username"
            name="username"
            style={{
              display: "block",
              color: "black",
              textShadow: "1px 1px 1px rgb(51, 51, 51)",
              backgroundColor: "#ff0084",
            }}
          />
        </label>

        <label htmlFor="password">
          <h4 style={{ color: "white" }}>Password:</h4>
          <input
            type="password"
            id="password"
            name="password"
            style={{
              display: "block",
              color: "black",
              textShadow: "5px 5px 5px rgb(51, 51, 51)",
              backgroundColor: "#ff0084",
            }}
          />
        </label>

        <button
          type="submit"
          className="login-btn"
          style={{ display: "block", color: "white" }}
        >
          GO
        </button>
      </form>
    </div>
  );
};
// export the 'LoginForm' component as the default export of this file
export default LoginForm;
