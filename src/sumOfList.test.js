import { sumOfList } from "./sumOfList";

// Test Cases:
// []  --> 0

// [1, 3, 5] --> 9

// [-1, 60, -30, 4] --> 33

// [0.3, 5.3, 12] --> 17.6

test("tests empty array", () => {
    expect(sumOfList([])).toBe(0);
  });


test("tests positive numbers", () => {
    expect(sumOfList([1, 3, 5])).toBe(9);
  });

test("tests negative numbers", () => {
    expect(sumOfList([-1, 60, -30, 4])).toBe(33);
  });

test("tests floating point numbers", () => {
    expect(sumOfList([0.3, 5.3, 12])).toBe(17.6);
  });