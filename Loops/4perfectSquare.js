/* 4. Perfect Square
Description: A number is a perfect square if it is the square of an integer.
Example\
 Input: 25
 Output: Perfect Square
 Explanation: 5 × 5 = 25.
Hint: Use sqrt(N), check if it’s an integer. */

let num = 16;

let sqrt = Math.sqrt(num);

if (Number.isInteger(sqrt)) {
  console.log(`${num} is perfect square  of ${sqrt}`);
} else {
  console.log(`${num} is not perfect square`);
}
