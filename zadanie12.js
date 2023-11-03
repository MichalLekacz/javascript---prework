function count5Occurrences(numbers) {
  let count = 0;
  numbers.forEach(function (number) {
    if (number === 5) {
      count++;
    }
  });

  return count;
}
