function assignToDepartments(workers) {
    workers.forEach((worker) => {
      if (worker.profession === "developer" || worker.profession === "tester") {
        worker.department = "tech";
      } else if (worker.profession === "designer") {
        worker.department = "business";
      }
    });
    return workers;
  }