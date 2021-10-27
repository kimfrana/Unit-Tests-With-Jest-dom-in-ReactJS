import {toLowerCase} from './toLowerCase';
import {calcIMC} from './calcIMC.js';

// This archive test the methods toLowerCase and calcIMC using jest-dom
// To initiate the test run in terminal npm test Utils.test.js

// The method toLowerCase is implement correctly and return the expected values
test("toLowerCase", () => {
  expect(toLowerCase("BOB")).toBe("bob");
  expect(toLowerCase("Bob MarLey")).toBe("bob marley")
});
// The method calcIMC don't work, like how can be seen in the output of the console test
test("calcIMC", () => {
  expect(Number).toBe(Number);
  expect(calcIMC(100, 2)).toStringEqual("Peso Ideal")
});
