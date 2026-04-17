// The Scenario:
// You have just fetched a flat array of employee data from the backend. Your React component needs to display these employees categorized by their specific departments. You need to write a vanilla JavaScript function that takes an array of objects and a specific property key, and returns a grouped object.

// The Rules:

// Do not use external libraries like Lodash.

// The function should be dynamic—meaning it should work if I pass "department", "role", or any other valid object key.

const employees = [
  { name: "Alice", department: "Engineering", role: "Developer" },
  { name: "Bob", department: "HR", role: "Manager" },
  { name: "Charlie", department: "Engineering", role: "Developer" },
  { name: "David", department: "Marketing", role: "Designer" },
  { name: "Eve", department: "Marketing", role: "Manager" },
];

function groupBy(array, key) {
  let ansObj = {};

  for (let i = 0; i < array.length; i++) {
    if (ansObj[array[i][key]]) {
      ansObj[array[i][key]].push(array[i]);
    } else {
      ansObj = { ...ansObj, [array[i][key]]: [array[i]] };
    }
  }
  return ansObj;
}

// --- Test Cases ---
console.log(groupBy(employees, "department"));
/* Expected Output:
{
  Engineering: [
    { name: 'Alice', department: 'Engineering', role: 'Developer' },
    { name: 'Charlie', department: 'Engineering', role: 'Developer' }
  ],
  HR: [
    { name: 'Bob', department: 'HR', role: 'Manager' }
  ],
  Marketing: [
    { name: 'David', department: 'Marketing', role: 'Designer' },
    { name: 'Eve', department: 'Marketing', role: 'Manager' }
  ]
}
*/
