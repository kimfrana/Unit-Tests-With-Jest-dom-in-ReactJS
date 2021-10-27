import { render, fireEvent } from '@testing-library/react';
import Search from './index.jsx';

// Test the component button
// To initiate the test run in terminal npm test Search.test.js

//This test if the component render
it('searchRenderCheck', () => {
  const {queryByTitle} = render(<Search />);
  const input = queryByTitle("inputTest");
  expect(input).toBeTruthy();
})

//This one test if the input is equal to "testValue"
describe("changeInInput", () => {
  it("onChange", () => {
    const {queryByTitle } = render(<Search/>);
    const input = queryByTitle("inputTest");
    fireEvent.change(input, {target: {value: "testValue"}}); //Take the value in e.target.value
    expect(input.value).toBe("testValue"); //Compare if the value is equal to "testValue"
  })
})
