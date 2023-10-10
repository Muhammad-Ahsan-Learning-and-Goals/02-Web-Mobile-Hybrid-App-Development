// ✅ Comments
//  Wrirte from two forword slash like //

// ✅ Varibles

//  We use to store Data temprary in Computers memory.

var a = "Ali";
console.log(a);

a = "Raza";
console.log(a);

// Bracket vs global Scope

function ab() {
  let ab = "Raz";
  console.log(ab);
}
ab();

let as = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// as.forEach(element => {
// console.log(element);
// });

as.map((e) => {
  console.log(e);
});

// ✅ While Loop

// let ax = 0;
// while (ax < 10) {
//   console.log(ax);
//   ax++;
// }

// ✅ do While Loop

// j= 2;
// do{
//     console.log(j);
//     j++
// }
// while(j<7);

// Switch Statement

// let a= 10;
// switch(a){
//     case 0:
//         if a==1{
//             console.log("you are f")
//         }

//     }

const foo = 19;
switch (foo) {
  case 19:
    console.log("fail");
    break;
  case 2:
    console.log("pass");
    break;

  default:
    console.log("default");
}

//  Functions

// function Declearation

function greet() {
  console.log("Hello World");
}

greet();

// function Expression

const speack = function () {
  console.log("Function Expression");
};

speack();

//Argumen and Parameter

const speak = function (name, clas) {
  console.log(`${name},${clas}`);
};

speak("Hello", "Wrod");

//  Arrow function

let area = () => {
  console.log("Arrow Function");
};
area();

//  Function vs Method (dot notation)

//  CallBack Function

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function () {
  console.log("Raza");
});

let arrays = [1, 2, 3, 4, 5, 6, 7];

arrays.forEach(function (vall) {
  console.log(vall);
});




// arrays.forEach((ali) => {
//   console.log(ali);
// });
