const removeLastNumber = (arr) => {
  let arr2 = [...arr];
  arr2.pop();
  return arr2;
};
// console.log(removeLastNumber(myArr), myArr);

const raiseSalaries = (arr, increase) => {
  //to avoid mutation in nested non-primatives, we need to map and make copies of each. then we can go ahead witht the new mapped non-primative data set vvv

  let newArr = arr.map((obj) => {
    let objCopy = { ...obj };
    objCopy.salary = objCopy.salary + (objCopy.salary / 100) * increase;
    return objCopy;
  });
  return newArr;
};
module.exports = { removeLastNumber, raiseSalaries };

//If you aren't bothered about mutation
const raiseSalariesMutate = (arr, increase) => {
  arr.forEach((obj) => {
    obj.salary = obj.salary + (obj.salary / 100) * increase;
  });
  return arr;
};
