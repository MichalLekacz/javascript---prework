function calculate(a, b, mathOperator) {
  if (mathOperator === "+") {
    return a + b;
  } else if (mathOperator === "-") {
    return a - b;
  } else if (mathOperator === "*") {
    return a * b;
  } else if (mathOperator === "/") {
    return a / b;
  } else {
    return `coś Ty zrobił?!`;
  }
}
