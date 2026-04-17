function getDetails() {
  console.log(`My name is ${this.name} and i am ${this.age} year old`);
}

let user1 = {
  name: "vicky",
  age: 25,
};
let user2 = {
  name: "vinaya",
  age: 22,
};

getDetails.call(user1);

// Call  Polyfill

Function.prototype.myCall = function (context = {}, ...args) {
  if (!typeof this == "function") {
    throw new Error(this + "its not callable");
  }
  context.fu = this;
  context.fu(...args);
};

let name = "name";

// getDetails.myCall(user1, 25);

// Apply Polyfill

Function.prototype.myApply = function (context = {}, args = []) {
  if (!typeof this == "function") {
    throw new Error("is not a function");
  }
  if (!Array.isArray(args)) {
    throw new Error("argument should pass in from of array");
  }
  context.fn = this;
  context.fn(...args);
};

// getDetails.myApply(user1, [25]);

// bind

Function.prototype.myBind = function (context = {}, ...args) {
  if (!typeof this == "function") {
    throw new Error(this + "its not callable");
  }
  context.fu = this;
  return function (...newArgs) {
    return context.fu(...args, ...newArgs);
  };
};

// const data = getDetails.myBind(user1, 25);
// console.log(data());
