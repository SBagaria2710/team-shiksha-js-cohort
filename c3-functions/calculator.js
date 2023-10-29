function sum(a, b) {
  return a + b;
}

let subtract = function(a, b) {
  return a - b;
}

let multiply = (a, b) => {
  return a * b;
}

let divide = (a, b) => a / b;

function calc(a, b, operation) {
  if (operation === "+") {
    return sum(a, b);
  } else if (operation === "-") {
    return subtract(a, b);
  } else if (operation === "*") {
    return multiply(a, b);
  } else if (operation === "/") {
    return divide(a, b);
  } else {
    return "Not a valid operation";
  }
};

const result = calc(12, 4, "/");
console.log(result);