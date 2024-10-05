export default function createIteratorObject(report) {
  let allEmployees = [];

  // Combine all employees from all departments into a single array
  for (const department of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...department];
  }

  // Return an iterator for the combined array of employees
  return allEmployees[Symbol.iterator]();
}
