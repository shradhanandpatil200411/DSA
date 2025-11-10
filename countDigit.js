// write a program to count the digit of given number

function countDigit(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

const result = countDigit(2424242424);
console.log(result);
