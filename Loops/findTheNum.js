const findTheNum = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return `The num is found on ${i} index `;
    }
  }

  return `${num} This num is not in the arr`;
};

const result = findTheNum([22, 34, 2, 3, 53, 1], 0);

console.log(result);
