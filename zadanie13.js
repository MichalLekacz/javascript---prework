function countCharOccurences(arr, char) {
  let count = 0;
  arr.forEach(function (element) {
    if (element === char) {
      count++;
    }
  });

  return count;
}
