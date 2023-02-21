// alert("This is pop Up Alert Box");

// console.log("This is console log ");

// document.write("Text will Print on Screen");

// variables

// var let and const    Can  be Re Declear

var a = "Ali ";
document.write(a);

var a = "Raza";

document.write(a);

// let varivable type    // Can not Re Declear

document.write("<br>");

// let b = "Muhammad ";

// document.write(b);

// let b = "Ahsan";
// document.write(b);

document.write("<br>");

// const varivable type    // Can not be Re Declear or re assign

const c = "Java  ";

document.write(c);

const d = "Javascript";

document.write(d);

// document.write(typeof d);

// prompt

// let z = prompt("What is Your Name");

// document.write(z);

// Objects in Javascript

let person = {
  firstName: "Ali",
  lastName: "Raza",
  age: 20,
};

console.log(person.firstName);

const persons = [
  {
    firstName: "Hamzah",
    lastName: "Syed",
    age: 22,
    "eye-Color": "brown",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    "eye-Color": "blue",
  },
];
// Access Person 1

console.log(persons[0].age); // 22
console.log(persons[1].age); // 50

for (let i = 0; i < 3; i++) {
  document.write(" Hello World <br>" + i);
}

const date = new Date();
console.log(date);
