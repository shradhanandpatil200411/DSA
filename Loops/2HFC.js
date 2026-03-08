/* 2. HCF/GCD
Description: The Highest Common Factor (HCF) or Greatest Common Divisor
(GCD) of two numbers is the largest number that divides both numbers
without leaving a remainder.
Example:
- Input: a = 12, b = 1,
- Output: 6
- Explanation: Factors of 12: {1,2,3,4,6,12}, Factors of 18: {1,2,3,6,9,18}.
Common factors: {1,2,3,6}. The highest is 6.
Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b). */

let a = 12,
  b = 18;

function factorialNum(num) {
  let fact = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      fact.push(i);
    }
  }
  return fact;
}

function findHFC(num1, num2) {
  let factNum1 = factorialNum(num1);
  let factNum2 = factorialNum(num2);
  let allFact = [...factNum1, ...factNum2];
  let countObj = {};
  let commonFact = [];
  for (let i = 0; i < allFact.length; i++) {
    if (countObj[allFact[i]] >= 1) {
      countObj[allFact[i]]++;
    } else {
      countObj[allFact[i]] = 1;
    }
  }
  for (let key in countObj) {
    if (countObj[key] == 2) {
      commonFact.push(Number(key));
    }
  }
  console.log(Math.max(...commonFact));
}

findHFC(a, b);

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(12, 18));

function gcd2(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd2(12, 18));
