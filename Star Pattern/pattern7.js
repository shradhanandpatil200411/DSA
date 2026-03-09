//     *
//    **
//   ***
//  ****
// *****

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = i; j < n; j++) {
    row += "- ";
  }
  for (let k = i; k > 0; k--) {
    row += "* ";
  }
  console.log(row);
}
