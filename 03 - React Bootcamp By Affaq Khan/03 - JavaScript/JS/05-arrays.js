const arr = [10, 12, 14, 16];

// console.log(arr);
// console.log(arr.length);

// 💓 Print one by one elements

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(arr[3]);

// 💓💓 add elements into arrays

// let a = [];

// a[0] = "Muhammad";
// a[2] = "Ahsan";
// a[4] = "Ali";

// console.log(a);

// 🧡 Operations on an Arrays

// push , pop , shift, unshift

const arr1 = [2, 4, 6, 8];

//  💗 add element in start

arr1.unshift("Muhammad");
console.log(arr1);

// 💓 remove from start

arr1.shift();
console.log(arr1);

//💗 add in last

arr1.push("Ali");
console.log(arr1);

// 💗 remove from start

arr1.pop();
console.log(arr1);

const arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2.join(" - "));

// 💓 delete an element

delete arr2[2];
console.log(arr2);

const concaat = arr1.concat(arr2);
console.log(concaat);

//  💓 Flat an array

const arr4 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newarr4 = arr4.flat();
console.log(newarr4);
