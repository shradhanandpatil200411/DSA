function findSecondLargest(arr) {
  let fMax = Math.max(arr[0], arr[1]);
  let sMax = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > fMax) {
      sMax = fMax;
      fMax = arr[i];
    } else if (arr[i] > sMax && arr[i] !== fMax) {
      sMax = arr[i];
    }
  }
  console.log(sMax);
}

findSecondLargest([1, 2, 3, 5, 6, 8, 7, 9]);
