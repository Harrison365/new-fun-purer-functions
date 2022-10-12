let myArr = [1, 2, 3, 4];
let func = (Arr) => {
  let Arr2 = [...Arr];
  Arr2.pop();
  return Arr2;
};
console.log(func(myArr), myArr);
