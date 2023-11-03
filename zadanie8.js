function howLongAreAllWords(words) {
  let sumaDlugosci = 0;

  words.forEach((slowo) => {
    sumaDlugosci += slowo.length;
  });

  return sumaDlugosci;
}
