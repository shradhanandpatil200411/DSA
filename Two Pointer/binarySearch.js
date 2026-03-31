// Input: ((arr = [1, 3, 5, 7, 9, 11]), (target = 7));
// Output: 3(index);

// Input:  arr = [1, 3, 5, 7, 9, 11], target = 6
// Output: -1 (nahi mila)

function binarySearch(arr, target) {
  let L = 0,
    R = arr.length - 1;

  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 3, 5, 7, 9, 11],
  target = 17;
console.log(binarySearch(arr, target));
