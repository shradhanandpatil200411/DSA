// map , filter, reduce


// custom map function

Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i));
  }

  return arr;
};

let inputArr = [1, 2, 3, 4, 5];

const result = inputArr.myMap((input, i) => {
    return input * 2
})

console.log(result);

// custom filter function

Array.prototype.myFilter = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) arr.push(this[i]);
  }

  return arr;
};


let studentData = [
  {
    name: "vicky",
    rollNumber: 31,
    totalMarks: 80,
  },
  {
    name: "Mayur",
    rollNumber: 20,
    totalMarks: 55,
  },
  {
    name: "vinaya",
    rollNumber: 21,
    totalMarks: 65,
  },
  {
    name: "Neha",
    rollNumber: 31,
    totalMarks: 50,
  },
];

let filterData = studentData.myFilter((stu) => stu.totalMarks > 60);

console.log(filterData);


// Custom Reducer function


Array.prototype.myReducer = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++){
        accumulator ? accumulator = cb(accumulator, this[i]) : accumulator = this[i];
    }

    return accumulator;
}

let arr = [1, 2, 3, 4, 5];

let sum = arr.myReducer((acc, curr) => acc + curr);

console.log(sum);


// The ability of function to access the variable or function which are lexically out of its scope this we know as closers  

