const getUniqueValues = (arr: number[]) => {
  return arr.indexOf(1);
};

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]
