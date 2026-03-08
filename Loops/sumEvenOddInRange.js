function sumEvenOddInRange(start, end) {
  // Write your logic here
  let s = start;
  let e = end;
  let sumEven = 0;
  let sumOdd = 0;

  if (s > e) {
    [s, e] = [e, s];
  }

  while (e >= s) {
    if (e % 2 === 0) {
      sumEven = sumEven + e;
    } else {
      sumOdd = sumOdd + e;
    }
    e--;
  }
  return [sumEven, sumOdd];
}

console.log(sumEvenOddInRange(2, 10));
