function linerSearch(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === target) {
      console.log(`${target} found on ${i} index`);
      break;
    }
  }
}

linerSearch([1, 2, 24, 53, 14, 3], 53);
