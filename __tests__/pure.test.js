let { removeLastNumber } = require("../pure");

console.log(removeLastNumber([1, 2, 3, 4]));

describe("removeLastNumber", () => {
  test("should return a new array, when passed array", () => {
    const array = [];
    expect(removeLastNumber(array)).not.toBe(array); //checking they aren't the same reference (toEqual checks they have the same value (accounting for different references))
  });
});
//can use the same for objects and nested arrays/objects (provded you access them first) BUT you need to .map and use the spread operator for each of the nested non-primatives
//If we don't use spread operator, this fails ^^^.

//To check that the original array hasnt been mutated, we need to type a copy

describe("removeLastNumber", () => {
  test("shouldn't mutate original array", () => {
    const array = [1, 2, 3, 4];
    const arrayCopy = [1, 2, 3, 4];
    removeLastNumber(array); //after invokation
    expect(array).toEqual(arrayCopy); //initial array should still equal (not be) the copy
  });
});
