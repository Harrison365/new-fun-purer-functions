const removeLastNumber = (arr) => {
  let arr2 = [...arr];
  arr2.pop();
  return arr2;
};
// console.log(removeLastNumber(myArr), myArr);

const raiseSalaries = (arr, increase) => {
  arr.forEach((obj) => {
    obj.salary = obj.salary + (obj.salary / 100) * increase;
  });
  return arr;
};
module.exports = { removeLastNumber, raiseSalaries };
