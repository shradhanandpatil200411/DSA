function Vehicle() {}

Vehicle.prototype.drive = function () {
  console.log("Drive the vehicle");
};

function Car() {}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.construction = Car;

Car.prototype.drive = function () {
  console.log("Drive the car");
};

let car1 = new Car();
let vehicle1 = new Vehicle();

// console.log(car1.drive());
// console.log(vehicle1.drive());

Object.prototype.constructor = Object;
Object.prototype.greed = function () {
  return "hii " + this.name;
};

let obj = {
  name: "vicky",
  age: 20,
};

console.log(obj.prototype);
console.log(obj.greed());
