const diameter = function(radius) {
  return 2 * radius;
}

const circumference = function(radius) {
  return diameter(radius) * Math.PI;
}

const calculate = function(radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
}

let arr = [2, 4, 6];

console.log(calculate(arr, circumference));
console.log(calculate(arr, diameter));