import { render, fireEvent } from '@testing-library/react';
import Button from './index.jsx'

// Test the component button
// To initiate the test run in terminal npm test Button.test.js


// This check if  the button render
it("checkButtonRender", () => {
  const { queryByTitle } = render (<Button />)
  const btn = queryByTitle("btn-switch");
  expect(btn).toBeTruthy();
});

// This other one test if the methodo onClick in the button works
describe("clickButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Button/>);
    const btn = queryByTitle("btn-switch")
    expect(btn.innerHTML).toBe("Test OFF"); //Initial text in button
    fireEvent.click(btn); //onClick Event
    expect(btn.innerHTML).toBe("Test ON"); //The text after the event onClick
  })
})
