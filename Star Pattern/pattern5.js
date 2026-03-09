// 12345
// 1234
// 123
// 12
// 1

let n = 5;

for (let i = n; i > 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}
