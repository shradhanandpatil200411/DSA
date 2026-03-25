// This keyword is work differently in different scope if we log this on gable space it pointer to the window object but on node evn its show this empty obj
"use strict";
console.log(this); // in both case this show the same result on strick & non strick

function myFun() {
  console.log(this); // if we log "this" on normal function its print undefined on strict mode but in case of non strict it give the window obj
}

myFun(); // Basically "this" check how is invoking the function in this case it self invoke so its print the undefined

const obj = {
  name: "vicky",
  getName: function () {
    console.log(this.name); // "this" check how is invoke the function
  },
};

const obj2 = { name: "Vinaya" };

obj.getName(); // obj is invoke the function so this is represent the obj context

// obj2.getName()

// its not working because in the obj2 we did not have the getName method so we need to create getName in that object also but if we have 1000 of user so can we create same function again and again no to solve this problem we have

// Call , Apply and Bind methods

function greed() {
  console.log(`${this.greedText} my name is ${this.name}`);
}

function increaseAge(inAge) {
  console.log(`my current age is ${this.age + inAge}`);
}

let user1 = {
  greedText: "Hello",
  name: "vicky",
  age: 25,
};
let user2 = {
  greedText: "Namsate",
  name: "vinaya",
  age: 22,
};

greed.call(user1);
greed.call(user2);

increaseAge.call(user1, 5); // so using call we create function ones in memory and use as per we wont

// Apply same like call only defense is its take array of argument if we have multiple arguments so we can use Apply method

// bind method is is not imminently execute like call and apply methods does it return as a callback function so that we use letter on our code

// Arrow function this keyword

const arrowFun = () => {
  console.log(this, "arrow this"); // it give the window obj on window and on node env give the {} array
};

arrowFun(); // arrow function does not have the this keyword so it go the find the this keyword outside of it lexical scope

let obj3 = {
  name: "vicky",
  getName: () => {
    console.log(this.name, "arrow object this"); // its give the undefined because arrow function did not have the this keyword on it so its check in the outer scope and this function outer scope is global  scope and in the global scope dont have any name property so its give us the undefined
  },
};

obj3.getName();
