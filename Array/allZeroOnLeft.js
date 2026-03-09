function allZeroOnLeft(arr) {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
    i++;
  }
  console.log(arr);
}

allZeroOnLeft([1, 0, 0, 1, 1, 0, 1, 0, 1]);
