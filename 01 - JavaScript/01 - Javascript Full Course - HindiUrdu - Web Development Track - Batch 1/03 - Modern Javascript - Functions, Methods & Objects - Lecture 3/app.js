// 🌟🌟 function declearation

add();

function add() {
  console.log("Hello JS");
}

// 🌟 Function Expression

// whenever you equate something to a variable. it is called as exppression.

// function expression k end par sami colom lagaty han

const speak = function () {
  console.log("Good Morning");
};

speak();

// 🌟🌟 Hoisting : loose term to describe how function are affected Hoisted on top of file before  rest of our file run

// 🌟🌟 Argument and  parameter

// Function para meter

const fname = function (name = Ahsan, time) {
  console.log(`${time},${name} `);
};

fname("ALI", "Good Morning");

// 🌟🌟 function can also return values

const farea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area
};
const area = farea(4);
console.log(area);