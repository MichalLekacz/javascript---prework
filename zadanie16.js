function removeDuplicates(arr) {
  const uniqueArray = [...new Set(arr)];
  return uniqueArray;
}
