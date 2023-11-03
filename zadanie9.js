function declutter(arr) {
  const strings = [];
  const numbers = [];
  const booleans = [];
  arr.forEach((element) => {
    if (typeof element === "string") {
      strings.push(element);
    } else if (typeof element === "number") {
      numbers.push(element);
    } else if (typeof element === "boolean") {
      booleans.push(element);
    }
  });
  const resultArray = strings.concat(numbers, booleans);

  return resultArray;
}
