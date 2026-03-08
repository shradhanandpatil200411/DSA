let num = "020131452";
let numArray = num.split("");
let sumOfDigit = 0;

for (let i = 0; i < numArray.length; i++) {
  sumOfDigit += numArray[i] * (i + 1);
}

console.log(sumOfDigit % 11 === 0 ? true : false);
