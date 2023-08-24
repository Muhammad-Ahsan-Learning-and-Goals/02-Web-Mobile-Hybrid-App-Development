// const obj = {
//   firstName: "Ali",
//   lastName: "Raza",
//   age: 23,
//   degree: "Sofrware Eng",
//   grades: 89,
// };

// console.log(obj.firstName);
// console.log(obj.grades);
// console.log(obj.age);

//💓 How This Keywords works with obj

// const studentInfo = {

//   firstName: "Ali",
//   lastName: "Raza",
//   fullName: function(){
//     console.log(this.firstName+this.lastName)

//   }
// }
// studentInfo.fullName();

//💗 Objects of an array

const studentInfo = [
  {
    name: "Ali",
    age: 12,
    degree: "ICS",
  },

  {
    name: "Raza",
    age: 15,
    degree: "BS",
  },

  {
    name: "Umar",
    age: 10,
    degree: "BA",
  },
  {
    name: "affaq",
    age: 13,
    degree: "FA",
  },
];

// console.log(studentInfo[2]);

// 💗 Map Function

// const newarr = studentInfo.map((element) => {
//   console.log(element.name);
//   console.log(element.degree);
// });
// console.log(newarr);

// 💗 Example 2

// const arr = [2, 4, 6, 8];
// const newarr = arr.map((element) => {
//   console.log(element * element);
// });
// console.log(newarr);

// 🧡 Filter

// example 01

// const newarr = studentInfo.filter((i) => {
// //   console.log(i.age > 12);

// return i.age >12;
// });

// console.log(newarr);

// 💗 Example 02;

// const cars = [
//   {
//     name: "Audi",
//     price: 1500000,
//     color: "white",
//   },

//   {
//     name: "toyota",
//     price: 2500000,
//     color: "blue",
//   },

//   {
//     name: "suzuki",
//     price: 200000,
//     color: "white",
//   },
// ];

// const newCars = cars.filter((i) => {
// //   return i.color === "white";
// return i.price>60000;

// });

// console.log(newCars);

// 💓 example store filter

// const store = [
//   {
//     name: "shirt",
//     price: 250,
//   },
//   {
//     name: "Tie",
//     price: 150,
//   },
//   {
//     name: "trouser",
//     price: 600,
//   },
// ];

// const newStore = store.filter((i)=>{
// return i.price>400;
// })

// console.log(newStore);

// 🧡 Example Filter

// const student = [
//   {
//     name: "Ali",
//     pocketMoney: 30,
//   },
//   {
//     name: "Raza",
//     pocketMoney: 50,
//   },
//   {
//     name: "Umar",
//     pocketMoney: 10,
//   },
// ];

// const newStudents = student.filter((i) => {
//   if (i.name === "Raza") {
//     // return (i.pocketMoney = i.pocketMoney - 10);

//     //  shortcut
//     return i.pocketMoney-= 10;
//   }
// });

// console.log(newStudents);

//💗 Reduce

// const arr = [1000, 2000, 3000];

// const newArr = arr.reduce((result, element) => {
//   return result + element;
// }, 0 );

// console.log(newArr);


