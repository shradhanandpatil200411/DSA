/* 3. Harshad Number
Description: A number is a Harshad number if it is divisible by the sum of its
digits.
Example\
 Input: 18
 Output: Harshad number
 Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9.
Hint: Extract digits using modulo (%) and integer division */

let num = 11;
let copy = num;
let sumOfNum = 0;
while (num > 0) {
  sumOfNum = sumOfNum + (num % 10);
  num = Math.floor(num / 10);
}

if (copy % sumOfNum === 0)
  console.log(`${copy} is divisible by ${sumOfNum} yes its harshad number`);
else
  console.log(
    `${copy}  is not divisible by ${sumOfNum} no its not harshad number`,
  );
