function selectSort(arr) {
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j <= n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectSort([15, 9, 8, 5, 3, 2, 6, 1, 0, -1]));
