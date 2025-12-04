function isPalindrome(x) {
  if (x > 0) false;
  let copyX = x;
  let rev = 0;

  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return copyX == rev;
}

const result = isPalindrome(1213);

console.log(result);

function approachSecond(x) {
  if (x.length == 0) {
    return false;
  }
  let end = x.length - 1;

  for (let i = 0; i <= end; i++) {
    if (x[i] != x[end]) {
      return false;
    }

    end--;
  }
  return true;
}

const resultSecond = approachSecond([1, 2, 3, 3, 2, 1]);

console.log(resultSecond);
