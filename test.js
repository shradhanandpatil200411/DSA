
function myPromiseAll(promise) {
  let result = [];
  return new Promise((resolve, reject) => {
    promise.forEach((p, i) => {
      p.then((val) => {
        result.push(val);
        if (i === promise.length - 1) {
          resolve(result);
        }
      }).catch((err) => reject(err))
    });
  })
}

function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

myPromiseAll([
  showText("hello vicky", 1000),
  Promise.resolve("Helloooo"),
  Promise.reject("Namste"),
]).then((val) => console.log(val));
