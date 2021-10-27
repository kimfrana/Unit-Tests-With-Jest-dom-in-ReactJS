import { render, fireEvent } from '@testing-library/react';
import Card from './index.jsx';

// Test the component button
// To initiate the test run in terminal npm test Card.test.js


//Just check if the card render
it("card", () => {
  const {queryByTitle} = render(<Card/>)
  const card = queryByTitle("card"); // Take the component by atribute title
  expect(card).toBeTruthy(); // Check if the component render
});

