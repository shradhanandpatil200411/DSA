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
