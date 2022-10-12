let myArr = [1, 2, 3, 4];
let removeLastNumber = (Arr) => {
  let Arr2 = [...Arr];
  Arr2.pop();
  return Arr2;
};
// console.log(removeLastNumber(myArr), myArr);

module.exports = { removeLastNumber };
