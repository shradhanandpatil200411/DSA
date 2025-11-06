const findLargestNum = (arr) => {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
};

const result = findLargestNum([23, 43, 56, 23, 67]);
console.log(result);
