function countStringsAndNumbers(arr) {
  let countStrings = 0;
  let countNumbers = 0;

  arr.forEach(function (element) {
    if (typeof element === "string") {
      countStrings++;
    } else if (typeof element === "number") {
      countNumbers++;
    }
  });
  return [countStrings, countNumbers];
}
