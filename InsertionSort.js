function InsertionSort(a) {
  let n = a.length;
  for (let i = 1; i < n; i++) {
    let current = a[i];
    let p = i - 1;

    while (a[p] > current && p >= 0) {
      a[p + 1] = a[p];
      p--;
    }
    a[p + 1] = current;
  }
  return a;
}

console.log(InsertionSort([7, 0, 3, 1, 6, 4, 9, 10, -1]));
