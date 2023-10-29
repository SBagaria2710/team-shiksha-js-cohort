const arr = [1, 2, 15, 30];

const multipliedByTwo = (val, index, array) => {
  // console.log(val, index, array);
  return 2*val;
}

const square = arr.map(multipliedByTwo);

console.log(square, arr);