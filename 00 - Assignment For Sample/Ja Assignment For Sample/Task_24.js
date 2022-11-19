let String1="I am Kainat";
let String2="I am learning JavaScript";

let Number1=15;
let Number2=72;

const array=["Iqra","Aimen","Maryam"];

// Tests for equality and inequality with strings
console.log("Is String 1=I am Kainat? I predict true");
console.log(String1=='I am Kainat');

console.log("Is String 2=I am learning JavaScript? I predict true");
console.log(String2=='I am learning JavaScript');

console.log("Is String 1=String 2? I predict False");
console.log(String1==String2);

console.log("Is String 1 not equal toString 2? I predict True");
console.log(String1!==String2);

//Tests using the lower case function
console.log("Is I am Kainat=i am kainat ? I predict False");
console.log(String1==String1.toLowerCase());

console.log("Is I am Kainat not equal to i am kainat ? I predict True");
console.log(String1!==String1.toLowerCase());

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is 15=72? I predict False");
console.log(Number1==Number2)

console.log("Is 15>72? I predict False");
console.log(Number1>Number2)


console.log("Is 15<72? I predict True");
console.log(Number1<Number2)

console.log("Is 15>=72? I predict False");
console.log(Number1>=Number2)


console.log("Is 15<=72? I predict True");
console.log(Number1<=Number2)

console.log("Is 15!=72? I predict True");
console.log(Number1!=Number2)

//Tests using "and" and "or" operators
console.log("Is String 1=I am Kainat and String 2=I am learning JavaScript? I predict true");
console.log(String1=='I am Kainat'&& String2=='I am learning JavaScript');

console.log("Is String 1=String 2 or 15<=72? ? I predict True");
console.log(String1==String2 || Number1<=Number2 );

//Test whether an item is in a array

console.log("Is Iqra an element of array?")
console.log(array.includes('Iqra'))

console.log("Is Iman an element of array?")
console.log(array.includes('Iman'))

