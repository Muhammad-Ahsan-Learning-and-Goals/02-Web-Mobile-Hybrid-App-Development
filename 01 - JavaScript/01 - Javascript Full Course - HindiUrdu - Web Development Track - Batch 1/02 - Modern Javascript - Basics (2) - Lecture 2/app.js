// 🌟common string methods in js

let mail = "muhammadahsan7099@gmail.com";

let result = mail.lastIndexOf("9");

let result1 = mail.slice(0, mail.lastIndexOf("@"));

console.log(result);
console.log(result1);

// 🌟🌟 slice :extract section from an array

let sliceResult = mail.slice(8, 13);
console.log(sliceResult);

// 🌟🌟🌟 replace method

let replaceResult = mail.replace("ahsan", "Ali");
console.log(replaceResult);


//🌟🌟 Subring  m jiss index sy slice krna hota or last jiss index p krty han

let subString = mail.substring(3, 8);
console.log(subString);



// 🌟🌟 Access Domain name 

let domainName = mail.slice(mail.lastIndexOf("@"), mail.length);

console.log(domainName);
