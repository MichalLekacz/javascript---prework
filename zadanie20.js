function layoffs(workers) {
    const filteredWorkers = workers.filter(worker => !(worker.level === "senior" || worker.profession === "tester"));
     return filteredWorkers;
   }