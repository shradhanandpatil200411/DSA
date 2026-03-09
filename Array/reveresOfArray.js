function reveresOfArray(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[arr.length - 1 - i];
  }
  console.log(temp);
}

reveresOfArray([1, 2, 3, 4, 5, 6]);

function towPointer(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  console.log(arr);
}

towPointer([1, 2, 3, 4, 5, 6]);
