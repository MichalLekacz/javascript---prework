function countWorkers(workers) {
  const professionCounts = {};

  workers.forEach((worker) => {
    const profession = worker.profession;

    if (profession in professionCounts) {
      professionCounts[profession]++;
    } else {
      professionCounts[profession] = 1;
    }
  });

  return professionCounts;
}
