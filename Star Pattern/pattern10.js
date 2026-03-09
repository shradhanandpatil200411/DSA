// *       *
//  *     *
//   *   *
//    * *
//     *

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (i === j || i + j === n * 2) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
