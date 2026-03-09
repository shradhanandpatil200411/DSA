function findLargestInArray(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  console.log(largest);
}

findLargestInArray([1, 2, 4, 6, 9]);
