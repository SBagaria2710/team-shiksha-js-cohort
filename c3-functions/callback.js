function displayResult(sum) {
  console.log(sum);
}

function myCalculator(num1, num2, cb, cb1, shashwat, teamShiksha) {
  teamShiksha(num1 + num2);
};

myCalculator(5, 5, displayResultWithMessage, displayResultWithMessage, displayResultWithMessage, displayResultWithMessage);

function displayResultWithMessage(sum) {
  console.log("Result for the equatino will be: ", sum);
}