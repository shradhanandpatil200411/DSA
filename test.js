function myPromiseAll(promise) {
  let result = [];
  return new Promise((resolve, reject) => {
    promise.forEach((p, i) => {
      p.then((val) => {
        result.push(val);
        if (i === promise.length - 1) {
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
}

// function showText(text, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, time);
//   });
// }

// myPromiseAll([
//   showText("hello vicky", 1000),
//   Promise.resolve("Helloooo"),
//   Promise.reject("Namste"),
// ]).then((val) => console.log(val));

// function introduction(company, year) {
//   console.log(
//     `Hii my name is ${this.name} and i work in ${company} since ${year} years`,
//   );
// }

// let obj = {
//   name: "shradhanand",
//   role: "Frontend Developer",
// };

// introduction.call(obj, "Nimap Infotech", 3);

// let num = 24683;

// function findOdd(num) {
//   let str = num.toString();
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findOdd(num));
