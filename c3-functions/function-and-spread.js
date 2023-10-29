const arrValue = ["My", "name", "is", "Shashwat"];

// console.log(arrValue);
// console.log(...arrValue);

function foo(arg1, ...shashwat) {
  console.log(arg1, shashwat);
}

foo(1, 2, 3, 4);