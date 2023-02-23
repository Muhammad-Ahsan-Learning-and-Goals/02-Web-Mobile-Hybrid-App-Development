// 🌟 spread operator

// with lists

let list = ["Honda ", "Audi", "BMW"];

let newList = ["My Car", ...list];

console.log(newList);

// with objects

let person = {
  fname: "ali",
  lname: "Raza",
  age: 23,
};

let newPerson = {
  ...person,
  city: "krk",
};

console.log(newPerson);

// 🌟 Rest Operator

function hello(a,b,c) {
 console.log(c)
}

hello(3,2,1);


// 🌟 access all the values

function val (...all){
console.log(all);
}
val (3,4,5)

