let {
  removeLastNumber,
  raiseSalaries,
  removePersonWithID,
} = require("../pure");

//DO TESTS FOR .pop() functionality as usual... then...

describe("removeLastNumber", () => {
  //once you have done regular tests, we can test for mutation = bad :(

  test("should return a new array, when passed array", () => {
    const array = [];
    expect(removeLastNumber(array)).not.toBe(array); //checking they aren't the same reference. (toEqual checks they have the same value (accounting for different references))
  });

  //can use the same for objects and nested arrays/objects (provded you access them first) BUT you need to .map and use the spread operator for each of the nested non-primatives
  //If we don't use spread operator, this fails ^^^.

  //To check that the original array hasnt been mutated, we need to type a copy vvvv

  test("shouldn't mutate original array", () => {
    const array = [1, 2, 3, 4];
    const arrayCopy = [1, 2, 3, 4];
    removeLastNumber(array); //after invokation
    expect(array).toEqual(arrayCopy); //initial array should still equal (not be) the copy
  });
});

////////////////////////RAISE SALARIES ////////////////////////////////////////////////

describe("raiseSalaries", () => {
  test("if passed an empty array, function will return an empty array", () => {
    expect(raiseSalaries([], 0)).toEqual([]);
  });
  test("function will increase a single employees wage, when passed an array containing a single employee and a percentage amount", () => {
    const input = [{ name: "Alice", salary: 3000 }];
    expect(raiseSalaries(input, 10)).toEqual([{ name: "Alice", salary: 3300 }]);
  });
  test("function will increase multiple employee wages, when passed an array containing a multiple employees and a percentage amount", () => {
    expect(
      raiseSalaries(
        [
          { name: "Alice", salary: 3000 },
          { name: "Bob", salary: 2000 },
          { name: "Vel", salary: 4500 },
        ],
        10
      )
    ).toEqual([
      { name: "Alice", salary: 3300 },
      { name: "Bob", salary: 2200 },
      { name: "Vel", salary: 4950 },
    ]);
    expect(
      raiseSalaries(
        [
          { name: "Alice", salary: 3000 },
          { name: "Bob", salary: 2000 },
          { name: "Vel", salary: 4500 },
        ],
        50
      )
    ).toEqual([
      { name: "Alice", salary: 4500 },
      { name: "Bob", salary: 3000 },
      { name: "Vel", salary: 6750 },
    ]);
  });
  //NOW THE MUTATION PART
  test("function does not mutate original array argument", () => {
    const input = [
      { name: "Alice", salary: 3000 },
      { name: "Bob", salary: 2000 },
      { name: "Vel", salary: 4500 },
    ];
    raiseSalaries(input, 10);
    expect(input).toEqual([
      { name: "Alice", salary: 3000 },
      { name: "Bob", salary: 2000 },
      { name: "Vel", salary: 4500 },
    ]);
  });
  test("returned array holds different memory reference from initial array argument provided", () => {
    const input = [
      { id: 1, name: "foluso" },
      { id: 2, name: "suneet" },
      { id: 3, name: "paul r" },
    ];
    expect(raiseSalaries(input, 10)).not.toBe(input);
  });
});

///REMOVE PERSON WITH ID
describe("removePersonWithID", () => {
  test("if passed an empty array, function will return an empty array", () => {
    const input = [];
    expect(removePersonWithID(input, 0)).toEqual([]);
  });
  test("if function passed an array of single tutor, function will not remove tutor if id does not match id argument provided", () => {
    const input = [{ id: 1, name: "foluso" }];
    expect(removePersonWithID(input, 3)).toEqual([{ id: 1, name: "foluso" }]);
  });
  test("if function passed an array of a single tutor, function will  remove tutor if id does match id argument provided", () => {
    const input = [{ id: 1, name: "foluso" }];
    expect(removePersonWithID(input, 1)).toEqual([]);
  });
  test("if function passed an array of multiple tutors, function will remove tutor if corresponding tutor.id value matches id argument", () => {
    const input = [
      { id: 1, name: "foluso" },
      { id: 2, name: "suneet" },
      { id: 3, name: "paul r" },
    ];
    expect(removePersonWithID(input, 3)).toEqual([
      { id: 1, name: "foluso" },
      { id: 2, name: "suneet" },
    ]);
  });
  test("if function passed an array of multiple tutors, function will not remove tutors if corresponding tutor.id values  do not match id argument", () => {
    const input = [
      { id: 1, name: "foluso" },
      { id: 2, name: "suneet" },
      { id: 3, name: "paul r" },
    ];
    expect(removePersonWithID(input, 4)).toEqual([
      { id: 1, name: "foluso" },
      { id: 2, name: "suneet" },
      { id: 3, name: "paul r" },
    ]);
  });
  test("function does not mutate initial input array", () => {
    const input = [
      { id: 1, name: "foluso" },
      { id: 2, name: "suneet" },
      { id: 3, name: "paul r" },
    ];
    removePersonWithID(input);
    expect(input).toEqual([
      { id: 1, name: "foluso" },
      { id: 2, name: "suneet" },
      { id: 3, name: "paul r" },
    ]);
  });
  test("returned array holds different memory reference from initial array argument provided", () => {
    const input = [
      { id: 1, name: "foluso" },
      { id: 2, name: "suneet" },
      { id: 3, name: "paul r" },
    ];
    expect(removePersonWithID(input, 2)).not.toBe(input);
  });
});
