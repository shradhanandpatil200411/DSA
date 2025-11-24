const arr1 = [64, 25, 12, 22, 11];

function selectStor(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (arr[i] != arr[min]) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectStor(arr1));
