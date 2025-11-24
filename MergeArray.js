let a1 = [1, 3, 5, 7, 9, 10, 11, 16, 20];
let a2 = [2, 4, 8];

function merge(a1, a2) {
  let mergeArray = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      mergeArray.push(a1[i]);
      i++;
    } else {
      mergeArray.push(a2[j]);
      j++;
    }
  }

  return [...mergeArray, ...a1.slice(i), ...a2.slice(j)];
}

console.log(merge(a1, a2));
