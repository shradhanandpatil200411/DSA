// fined sum of n number using recursion

function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}

console.log(sum(5));

// fined sum of given array

let arr = [5, 4, 3, 2, 1, 0];
function sumArray(n) {
  if (n == 0) return arr[n];
  return arr[n] + sumArray(n - 1);
}

console.log(sumArray(arr.length - 1));

// fined the sum of odd number in given array

let oddArray = [1, 2, 3, 4, 5, 6, 7];

function oddSum(n) {
  let isOdd = oddArray[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? oddArray[n] : 0;
  }
  return (isOdd ? oddArray[n] : 0) + oddSum(n - 1);
}

console.log(oddSum(oddArray.length - 1));
