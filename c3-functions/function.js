// Syntax
function nameOfTheFunction() {
  // Function Body
}

// CODE START HERE!
function greet() {
  console.log("Hello There Normally!");
}

let anonymousFunction = function() {
  console.log("Hello There from X!");
}

// let arrowFunction = () => {
//   console.log("Hello There from Arrow Function!");
// };

let arrowFunction = () => 2 > 3 ? "Yes, 2 is greater than 3" : "No, 2 is not greater than 3";


greet();
anonymousFunction();
console.log(arrowFunction());