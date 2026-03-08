let a = 76;
let seq = a * a;
let copy = a;
let count = 0;
while (a > 0) {
  count++;
  a = Math.floor(a / 10);
}

if (Math.floor(seq % Math.pow(10, count)) === copy)
  console.log(`${copy} yes its a automorphic number`);
else console.log(`${copy} is not automorphic number`);
