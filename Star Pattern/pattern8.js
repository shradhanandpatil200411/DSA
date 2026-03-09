// 1
// 10
// 101
// 1010
// 10101

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  let toggle = true;
  for (let j = 1; j <= i; j++) {
    if (toggle) {
      row += 1;
      toggle = false;
    } else {
      row += 0;
      toggle = true;
    }
  }

  console.log(row);
}
