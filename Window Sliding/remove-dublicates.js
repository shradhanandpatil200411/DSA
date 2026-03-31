// Remove Duplicates from Sorted Array
// Input:  [1, 1, 2, 3, 3, 4, 5, 5]
// Output: [1, 2, 3, 4, 5]

let arr = [1, 1, 2, 3, 3, 4, 5, 5];

let p1 = 0;
let p2 = 1;

while (p2 < arr.length) {
  if (arr[p1] !== arr[p2]) {
    ++p1;
    arr[p1] = arr[p2];
  }
  ++p2;
}

console.log(arr.slice(0, p1 + 1));
