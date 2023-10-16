// function foo(arg1, arg2, ...argN) {
//   // Function Body
// };

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(calculator(1,2, "sum"));
console.log(calculator(10,20, "sub"));
console.log(calculator(100,212));

function calculator(a, b, operation) {
  if (operation === "sum") {
    return sum(a, b);
  } else if (operation === "sub") {
    return sub(a, b);
  }
  return "No Operation Provided";
}

// Arrow Functions (=>)