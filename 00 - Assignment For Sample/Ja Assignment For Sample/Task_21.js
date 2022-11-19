const Student= { name: 'Aimen', age: 20, Rollnumber:1 };
const Student1= { name: 'Iqra', age: 21, Rollnumber:2 };
const Student2= { name: 'Maryam', age: 19, Rollnumbe:3 };
//Accessing properties of object Student 
console.log(Student);
console.log(Student.name);
console.log(Student.age);
console.log(Student.Rollnumber);

//Nested Objects
const Student3= { name: 'Laiba', age: 19, Rollnumber:4,
 Marks:{English: 80, math: 95, Physics:87} };
 console.log(Student3.Marks);
 console.log("Marks of "+Student3.name+" in math is "+Student3.Marks.math);