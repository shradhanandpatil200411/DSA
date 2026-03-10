function babbleSearch(arr, target) {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 <= p2) {
    let mid = Math.floor((p1 + p2) / 2);
    if (arr[mid] === target) {
      return console.log(`${target} is found ${mid} index`);
    }
    if (arr[mid] < target) {
      p1 = mid + 1;
    } else {
      p2 = mid - 1;
    }
  }

  return console.log(`${target} is not found in array`);
}

babbleSearch([1, 2, 3, 5, 6, 7, 8], 6);
