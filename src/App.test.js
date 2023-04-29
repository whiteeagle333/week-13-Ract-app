// Import the necessary functions from the "@testing-library/react" library

import { render, screen } from "@testing-library/react";
// Import the component that we want to test
import App from "./App";
// Define a test case for the component
test("renders learn react link", () => {
  // Render the component
  render(<App />);

  // Use the "screen" object to find the link element
  const linkElement = screen.getByText(/learn react/i);
  // Assert that the link element is in the document
  expect(linkElement).toBeInTheDocument();
});
