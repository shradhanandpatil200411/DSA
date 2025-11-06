const findSecondLargestNum = (arr) => {
  let FL = -Infinity;
  let SL = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (FL < arr[i]) {
      SL = FL;
      FL = arr[i];
    } else if (SL < arr[i]) {
      SL = arr[i];
    }
  }

  return SL;
};

const result = findSecondLargestNum([1, 2, 4, 5, 6]);
console.log(result);
