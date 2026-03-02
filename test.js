// const arr1 = [64, 25, 12, 22, 11];

// function selectStor(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j <= n - 1; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     if (arr[i] != arr[min]) {
//       [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
//   }

//   return arr;
// }

// console.log(selectStor(arr1));

// let arr = [1, 2, 3, 4, 5];

// let result = arr.map((i) => i > 2);

// console.log(result);

// function abc() {
//   console.log(abc.xyz);
// }

// abc();

// abc.xyz;
// console.log(abc);

// console.log(parseInt("10+2"));
// console.log(parseInt("7FM"));
// console.log(parseInt("M7F"));

// function abc() {
//   return;
// }

// console.log(abc());

// console.log(
//   [1, 2].map((num) => {
//     if (num > 0) return;
//     return num * 2;
//   })
// );

// {
//   function abc() {
//     console.log("vicky");
//   }
// }
// abc();

// function abc(a, b) {
//   a = 100;
//   b = 200;
//   return arguments[0] + arguments[1];
//   console.log(a + b);
// }

// console.log(abc(300, 400));

// let a = 10; // global scope

// function abc() {
//   let a = 20; // local  scope
//   console.log(a);
// }

// {
//   let a = 30;
//   console.log(a); // block scope
// }

// abc();

// console.log(a);

// let string = "vicky";
// let string2 = string;
// string2 = "Patil";
// console.log(string);
// console.log(string2);

// let obj = {
//   firstName: "vicky",
//   lastName: "Patil",
// };

// let obj2 = { ...obj };

// obj2.firstName = "Mayur";

// console.log(obj);
// console.log(obj2);

// const myPromise = new Promise((res, rej) => {
//   document.getElementById("myBtn").addEventListener("click", () => {
//     res("Promise Resolved");
//   });
//   document.getElementById("myBtn2").addEventListener("click", () => {
//     rej("Promise Reject");
//   });
// });
// myPromise.then((res) => console.log(res)).catch((rej) => console.log(rej));

// var anything = 1;

// let myObj = {
//   name: "vicky",
//   age: 24,
// };

// const handler = {
//   get: function (target, porp, receiver) {
//     console.log("someone is accessing property", porp);
//     return target[porp];
//   },
// };

// const proxiedObject = new Proxy(myObj, handler);
// console.log(proxiedObject.name);
// console.log(proxiedObject.age);

function findSecondLargest(arr) {
  let fl = -Infinity;
  let sl = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (fl < arr[i]) {
      sl = fl;
      fl = arr[i];
    } else if (sl < arr[i]) {
      sl = arr[i];
    }
  }
  return sl;
}

let result = findSecondLargest([12, 35, 1, 10, -34, 1]);
console.log(result);
