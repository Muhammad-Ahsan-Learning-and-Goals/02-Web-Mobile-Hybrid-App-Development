console.log("JavaScript Lecture 02");

// Common String Methods

let email = "abcdef@gmail.com";

let result = email.lastIndexOf("f");
console.log(result);

//🌟🌟 Slice : extrct section form the String

// Sentence : string.slice(from , to )

let sliceResult = email.slice(0, 4);

console.log(sliceResult);

// 🌟🌟 Replace : replace with custom input

let replace = email.replace("abcd", "AliRaza");

console.log(replace);

let ratname = email.slice(0, email.lastIndexOf("@"));
console.log(ratname);

// 🌟🌟 SubString: make a substring from main string

// substr(from , how amany latters)

let substr = email.substr(1, 4);
console.log(substr);

// 🌟🌟 Find Domainname

let domain = email.slice(email.lastIndexOf("@") + 1, email.length);
console.log(domain);

// 🌟🌟 Number Shortcut

let likes = 12;
// likes = likes+1;
// likes+=10;
// likes -=2;
// likes*=10;

likes /= 2;

// console.log(likes);

// 🌟🌟 template Litrals

const title = "Blog Post";
const author = "Raheel";
const liks = 300;

let html = `
<h2>${title}</h2>

<h2>${author}</h2>

<span>This blog has ${liks} Likes</span>`;
console.log(html);

// 🌟🌟 Arrays Method

let random = [1, "Ali", false, 56.9];

console.log(random);

// 🌟🌟 Add comma to take this string

let newRandom = random.join(",");
console.log(newRandom);

nameArray= ["Muhammad", "Ahsan" ,23,"Ali"]
let fullName=nameArray.join(" ");
console.log(fullName);


// 🌟🌟 Find index of an element  from an array

let locationNew = random.indexOf("Ali");
console.log(locationNew); 






