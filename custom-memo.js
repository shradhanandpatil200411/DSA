function memoize(cb) {
  const cache = {};
  return function (...arg) {
    let key = JSON.stringify(arg);

    if (key in cache) {
      return cache[key];
    }
    let result = cb(...arg);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  console.log("expensive calculation");
  return a + b;
}

let memoizeAdd = memoize(add);

console.log(memoizeAdd(10, 5));
console.log(memoizeAdd(10, 4));
console.log(memoizeAdd(10, 5));
