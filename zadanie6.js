function removeTwos(numbers) {
  const nowaTablica = [];
  numbers.forEach((element) => {
    if (element !== 2) {
      nowaTablica.push(element);
    }
  });
  return nowaTablica;
}
