// Function Scope

function abcd() {
  for (let i = 0; i < 17; i++) {
    console.log(i);
  }
  console.log(i);
}

let c = 10; // Not show in Browser window
var b = 98; // will addd it self into window

// Heap memory

// Exicution context

var n = [2, 3, 4];

// Sprad Operator
console.log(n);
var m = [...n];

console.log(m.pop());

n.forEach(function (val) {
  console.log(val);
});

//For in

var obj = {
  fname: "ALi",
  Lname: "Raza",
};

for (var key in obj) {
  console.log(key, obj[key]);
}

//Do While

var a = 10;
do {
  console.log("Hello");
  a++;
} while (a <= 16);

//  Call Back Functiom

setTimeout(function () {
  console.log("m Call Bck Function hon");
}, 2000);
