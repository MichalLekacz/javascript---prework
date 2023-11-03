function groupedSalaries(workers) {
  let juniorTotal = 0;
  let regularTotal = 0;
  let seniorTotal = 0;

  workers.forEach((worker) => {
    switch (worker.level) {
      case "junior":
        juniorTotal += worker.salary;
        break;
      case "regular":
        regularTotal += worker.salary;
        break;
      case "senior":
        seniorTotal += worker.salary;
        break;
    }
  });

  return [juniorTotal, regularTotal, seniorTotal];
}
