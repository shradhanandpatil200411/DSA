function factorial(num) {
  let fact = 1;
  while (num > 0) {
    fact = fact * num;
    num--;
  }
  return fact;
}

let num = 5;

console.log(factorial(num));
