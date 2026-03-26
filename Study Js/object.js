// OBJECT Interview Questions

// Question 1 : Delete keyword in Object

// const func = (function(a){
//     delete a;  we can not delete the local variable we can do in object
//     return a;
//   })(5);

// console.log(func);

// Computed Properties

let property = "firstName";
let name1 = "vicky patil";

let person1 = {
  [property]: name1, // we can do this like if wont do give the dynamic keys to objects
};

// Accessing
console.log(person1.firstName);
console.log(person1[property]);

// Looping in Object

let user1 = {
  name: "vicky",
  age: 24,
};

for (let key in user1) {
  console.log(key); // name, age
  console.log(user1[key]); // vicky, 24
}

// Question 2 : Output

const obj2 = { a: "one", b: "two", a: "three" }; // if we have 2 key with the same name its will be replace the value of the key but position of key the same
console.log(obj2);

// Question 3 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

function multipleOfTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] * 2;
    }
  }
}

multipleOfTwo(nums);
console.log(nums, "multiple of two");

// Question 4 : Output (Important)

const a = {};
const b = { key: "b" };
const c1 = { key: "c" };

a[b] = 123; // b is object and we can not store object as key inside of object so its give us [object object] : 123
a[c1] = 456; // first its will store the [object object] : 123 and in this line we modified to 456

console.log(a[b]); // its give us 456

// Question 5 : JSON.Stringify and JSON.parse

const userOne = {
  name: "vicky",
  age: 25,
};

const strObj = JSON.stringify(userOne);

console.log(JSON.parse(strObj));

// Question 6 : Output

console.log([..."Lydia"]);

// Question 7 : Output

const user2 = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user2 };

console.log(admin);

// Question 8 : Output

const settings = {
  username: "vicky_patil",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]); // its will only stringify the level and health
console.log(data);

// Question 9 : Output

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius, // NaN
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN because of the arrow function

// Question 10 : Destructuring in object

let user = {
  name: "vicky",
  age: 24,
  fullName: {
    firstName: "vicky",
    lastName: "patil",
  },
};

const name = "vicky patil"; // to change name or renaming

const {
  fullName: { firstName },
} = user;

console.log(firstName);

// Question 11 : Output

// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange");

// Question 12 : Output

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // Hello

// Question 13 : Output

// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1}); // false every object have different reference in a memory

// Question 14 : Output

let person = { name: "vicky" };
const members = [person]; // in array they pass 0 index as person object reference
person = null; // but in this case we direly give the value null

console.log(members); // [{ name: "vicky" }]
let p2 = (members[0].name = null);
console.log(person); // {name:null}

// Question 15 : Output

const value2 = { number: 10 };

const multiply2 = (x = { ...value2 }) => {
  console.log((x.number *= 2));
};

multiply2(); // 20
multiply2(); // 20
multiply2(value2); // 20
multiply2(value2); // 40 the object value is change to 20 so its will give the 20*20=40

// Question 16 : Output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

// Question 17 : Output

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> {name: "Alex",age: 25}
console.log(personObj2); // -> {name: "John",age: 50}

// Question 18 : Shallow copy VS Deep copy

// Q - How to clone an object without referencing its keys to original object

const obj = { a: 1, b: 2 };
const objclone1 = Object.assign({}, obj);
// const objclone2 = JSON.parse(JSON.stringify(employee));
// const objclone3 = { ...obj };
