// Flatten a Deeply Nested Array

function flattenArray(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ans.push(...flattenArray(arr[i]));
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
}

const test1 = [1, [2, 3], 4, [5, [6, 7]]];
console.log(flattenArray(test1));
