function selectSort(arr) {
  let n = arr.length - 1; // 4 ;
  for (let i = 0; i < n; i++) {
    // 0  ; 1 < 4
    let min = i; // 0 ; 1;
    for (let j = i + 1; j <= n; j++) {
      // j = 1 ; 2 ; 3 ; 4 <= 4 yes ; 5 <= 4 no / j = 2 ; 3 ; 4 <= 4 yes ; 5 <= 4 no
      if (arr[min] > arr[j]) {
        // 5 > 4 yes ;  4 > 3 yes ; 3 > 2 yes ; 3 > 1 yes / 4 > 3 yes ; 3 > 2 yes ; 2 > 5 no
        min = j; // min= 1; 2 ; 3 ; 4 / 2 ; 3
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]; // [5,1] = [1,5] = [1,4,3,2,5] / [4,2] = [2,4] = [1,2,3,4,5]
  }
  return arr;
}

console.log(selectSort([5, 4, 3, 2, 1]));
