// function

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

//🌟 Arrow Function

let ad = (a, b) => {
  return a + b;
};

console.log(ad(2, 9));

let a = (fname) => fname;

console.log(a("Muhammad Ahsan"));

// 🌟 import and Export (Module)

// how to add module

// 🌟 <script type ="module" src = "app.js"></script>

import { hello } from "./sell.js";

// import multiple files

// 🌟 import * as bundle form '.sell.js';

hello();

import { data as da } from "./sell.js";

console.log(da);


// 🌟 import default export 

import person  from "./customer.js";

console.log(person);
