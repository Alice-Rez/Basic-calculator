var number1 = "";
var number2 = "";
var operation = "";
var resultFunction = 0;

function number(input) {
  if (operation === "") {
    if (resultFunction !== 0) {
      number1 = "";
      resultFunction = 0;
    }
    number1 += input;
    console.log("input:", input, "whole number 1", number1);
    document.getElementById("display").innerHTML = number1;
  } else {
    number2 += input;
    console.log("input:", input, "whole number 2", number2);
    document.getElementById("display").innerHTML = number2;
  }
}

function decimal() {
  if (operation === "" && number1.includes(".") === false) {
    number1 += ".";
    document.getElementById("display").innerHTML = number1;
  } else if (operation !== "" && number2.includes(".") === false) {
    number2 += ".";
    document.getElementById("display").innerHTML = number2;
  }
}

function markFunction() {
  if (operation === "") {
    // if (number1.charAt(0) !== "-") {
    //   number1 = "-" + number1;
    // } else {
    //   number1 = number1.substr(1, number1.length - 1);
    // }
    number1 = `${number1 * -1}`;
    document.getElementById("display").innerHTML = number1;
  } else {
    // if (number2.charAt(0) !== "-") {
    //   number2 = "-" + number2;
    // } else {
    //   number2 = number2.substr(1, number2.length - 1);
    // }
    number2 = `${number2 * -1}`;
    document.getElementById("display").innerHTML = number2;
  }
}

function operationFunction(input) {
  if (number2 !== "") {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    console.log(
      "number1:",
      number1,
      "number2:",
      number2,
      "operation:",
      operation
    );
    switch (operation) {
      case "+":
        var resultBetween = number1 + number2;
        break;
      case "-":
        resultBetween = number1 - number2;
        break;
      case "*":
        resultBetween = number1 * number2;
        break;
      case "/":
        resultBetween = number1 / number2;
        break;
      case "%":
        resultBetween = number1 % number2;
        break;
      default:
        resultBetween = "Error ";
        break;
    }
    document.getElementById("display").innerHTML = resultBetween;
    document.getElementById(`${operation}`).style.backgroundColor = "";
    console.log(resultBetween);
    number1 = `${resultBetween}`;
    number2 = "";
  }
  operation = input;
  console.log("current operation is:", operation);
  document.getElementById(`${input}`).style.backgroundColor = "darkgray";
}

function calculator() {
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  console.log(
    "number1:",
    number1,
    "number2:",
    number2,
    "operation:",
    operation
  );
  switch (operation) {
    case "+":
      resultFunction = number1 + number2;
      break;
    case "-":
      resultFunction = number1 - number2;
      break;
    case "*":
      resultFunction = number1 * number2;
      break;
    case "/":
      resultFunction = number1 / number2;
      break;
    case "%":
      resultFunction = number1 % number2;
      break;
    default:
      resultFunction = "Error ";
      break;
  }
  document.getElementById("display").innerHTML = resultFunction;
  document.getElementById(`${operation}`).style.backgroundColor = "";
  console.log(resultFunction);
  number1 = `${resultFunction}`;
  number2 = "";
  operation = "";
}

function clearing() {
  if (operation !== "") {
    document.getElementById(`${operation}`).style.backgroundColor = "";
  }
  number1 = "";
  number2 = "";
  operation = "";
  resultFunction = 0;
  document.getElementById("display").innerHTML = "";
}
