function getAverage(numbers) {
  return numbers.reduce((acc, a) => acc + a, 0) / numbers.length;
}
