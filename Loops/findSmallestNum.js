const findLargestNum = (arr) => {
  let small = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }

  return small;
};

const result = findLargestNum([23, 43, 56, 23, 67]);
console.log(result);
