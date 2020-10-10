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
    document.getElementById("display").innerHTML = number1;
  } else {
    number2 += input;
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
    number1 = `${number1 * -1}`;
    document.getElementById("display").innerHTML = number1;
  } else {
    number2 = `${number2 * -1}`;
    document.getElementById("display").innerHTML = number2;
  }
}

function operationFunction(input) {
  if (number2 !== "") {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
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
    number1 = `${resultBetween}`;
    number2 = "";
  }
  operation = input;
  document.getElementById(`${input}`).style.backgroundColor = "darkgray";
}

function calculator() {
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
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
  if (resultFunction.toString().length >= 12) {
    resultFunction = resultFunction.toExponential(5);
  }
  document.getElementById("display").innerHTML = resultFunction;
  document.getElementById(`${operation}`).style.backgroundColor = "";
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
