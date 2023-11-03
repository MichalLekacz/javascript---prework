function avarageSalary(workers) {
  if (workers.length === 0) {
    return 0;
  }
  const totalSalary = workers.reduce((sum, worker) => sum + worker.salary, 0);
  const average = totalSalary / workers.length;
  return average;
}
