const removeLastNumber = (arr) => {
  let arr2 = [...arr];
  arr2.pop();
  return arr2;
};

const removePersonWithID = (people, id) => {
  return (amendedPeople = people.filter((person) => person.id !== id));
};

const raiseSalaries = (arr, increase) => {
  //to avoid mutation in nested non-primatives, we need to map and make copies of each. Then we can go ahead with the new mapped non-primative data set vvv

  let newArr = arr.map((obj) => {
    let objCopy = { ...obj };
    objCopy.salary = objCopy.salary + (objCopy.salary / 100) * increase;
    return objCopy;
  });
  return newArr;
};

//If you aren't bothered about mutation
const raiseSalariesMutate = (arr, increase) => {
  arr.forEach((obj) => {
    obj.salary = obj.salary + (obj.salary / 100) * increase;
  });
  return arr;
};

const updateTasks = (person, ...tasks) => {
  let personCopy = { ...person };
  personCopy.tasks = [...person.tasks, ...tasks];
  return personCopy;
};

updateTasks({ name: "Alice", tasks: ["clean", "tidy"] }, "cook", "wash");
module.exports = {
  removeLastNumber,
  removePersonWithID,
  raiseSalaries,
  updateTasks,
};
