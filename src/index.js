const calculate = function (i1 ,num1,num2){
  
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid numbers. Please provide valid numeric values.");
    process.exit(1);
  }
  let result;

switch (i1) {
  case "add":
    result = num1 + num2;
    break;
  case "subtract":
    result = num1 - num2;
    break;
  case "multiply":
    result = num1 * num2;
    break;
  case "divide":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      console.log("Cannot divide by zero. Please provide a non-zero value for the second number.");
      process.exit(1);
    }
    break;
  default:
    console.log("Invalid operation. Please provide 'add', 'subtract', 'multiply', or 'divide'.");
    process.exit(1);
}
return result
}
console.log(calculate(prompt('add, subtract, multiply, or divide?'),prompt('enter a number'),prompt('enter a number')))
