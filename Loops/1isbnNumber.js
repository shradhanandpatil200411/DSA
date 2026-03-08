/* 1. ISBN Number
Description: An ISBN (International Standard Book Number) is a unique 10-digit
number assigned to books. The ISBN is valid if the sum of its digits, each
multiplied by its position (1 to 10), is divisible by 11.
Example:
7 Input: 02013145%
7 Output: Invalid ISBN
7 Explanation: The sum of the digits multiplied by their positions is not
divisible by 11V
7 Input: 047195869v
7 Output: Valid ISBN
7 Explanation: (0×1 + 4×2 + 7×3 + ... + 7×10) is divisible by 11.
Hint: Use a loop to multiply each digit by its respective position and check
divisibility by 11. */

let num = "020131452";
let numArray = num.split("");
let sumOfDigit = 0;

for (let i = 0; i < numArray.length; i++) {
  sumOfDigit += numArray[i] * (i + 1);
}

console.log(sumOfDigit % 11 === 0 ? true : false);
