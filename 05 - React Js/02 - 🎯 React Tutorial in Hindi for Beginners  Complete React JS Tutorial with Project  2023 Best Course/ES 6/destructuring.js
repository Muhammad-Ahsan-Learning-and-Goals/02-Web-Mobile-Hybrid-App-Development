// array Destructuring

let list = ["car", "bike", "pen"];

let [car1, , car2] = list;

console.log(car2);

// 🌟 Object Destructuring

const person = {
  fname: "Ali",
  lname: "Raza",
  age: 23,
};

let { fname, age } = person;
console.log(age);
