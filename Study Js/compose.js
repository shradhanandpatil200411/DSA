// compose and pipes

function addFive(num) {
  return num + 5;
}

function multipleTwo(num) {
  return num * 2;
}

function subtractThree(num) {
  return num - 3;
}

const result = compose(addFive, multipleTwo, subtractThree);

console.log(result(5));

function compose(...fus) {
  return function (init) {
    return fus.reduceRight((acc, curr) => {
      return curr(acc);
    }, init);
  };
}
