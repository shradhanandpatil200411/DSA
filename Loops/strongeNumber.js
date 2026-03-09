function factorial(num) {
  let fact = 1;
  while (num > 0) {
    fact = fact * num;
    num--;
  }
  return fact;
}

function findIsStrong(num) {
  let strong = 0;
  while (num > 0) {
    let b = num % 10;
    strong += factorial(b);
    num = Math.floor(num / 10);
  }
  return strong;
}
let num = 145;
let isStrong = findIsStrong(num);

if (isStrong == num) console.log("Yes");
else console.log("No");
