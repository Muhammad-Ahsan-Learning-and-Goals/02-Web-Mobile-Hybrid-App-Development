// ✅ querySelector
// const para1 = document.querySelector("p");
// console.log(para1);

// const para2 = document.querySelector(".error_1");
// console.log(para2);

// const pa = document.querySelector("div .error_1");

// console.log(pa);

// const paa = document.querySelector("div > p");
// console.log(paa);

// const head = document.querySelector("body > h1");
// console.log(head);

// ✅ queryselctorall

// const qall = document.querySelectorAll("p");

// console.log(qall);

//  we can use sqr. bracket to access data

// console.log(qall[0]);

// console.log(
//   qall.forEach((ele) => {
//     console.log(qall);
//   })
// );

//  Other way the Query the DOM

// get element by id

// const av = document.getElementById("head1");
// console.log(av);

// get element by class

// const av = document.getElementsByClassName("error_2");
// console.log(av[0]);

//✅ getelement by tag name

//  const av = document.getElementsByTagName("p");
// console.log(av);
// console.log(av[0]);

// ✅ Adding and Change page contact

// changing the text inside element

// we will first change the text inside p tag

// const pra2 = document.querySelector("h6");
// console.log(pra2);

// console.log(pra2.innerText);

//✅ Update The text

// pra2.innerText = "Muhammad Ahsan";

// console.log(pra2);

// console.log(pra2.innerText);

//✅ add new contact The text

// const paraAll = document.querySelectorAll("p");
// paraAll.forEach((val) => {
//   console.log(val.innerText);
// });

// const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML += `<h2> This is Heading inside div</h2>`;

// ✅ Add Array into Div

// const array1 = ["ahsan", "ali", "raza", "muhammad"];

// array1.forEach((array1) => {
//   content.innerHTML += `<p> ${array1} </p> `;
// });

//✅✅ getting and Setting Artibute

// we can get and update into browser

const link = document.querySelector("a");
console.log(link.getAttribute("href")); // pass attribute as a string

//  Set Attribute

link.setAttribute("href", "https://www.facebook.com");
console.log(link.getAttribute("href"));
link.innerHTML = "Go to Facebook.com";

// Example 02:

const msg = document.querySelector("p");
console.log(msg.getAttribute("class"));

msg.setAttribute("class", "success");
console.log(msg.getAttribute("class"));

// Add a New Attribute

msg.setAttribute("style", "color:green; font-weight:bold; font-size:20px;");

console.log(msg.getAttribute("style"));

const h1 = document.querySelector(".h1-text");

console.log(h1.style);
console.log(h1.style.color);
h1.style.margin = "50px";
h1.style.color = "crimson";

h1.style.fontSize = "50px";
h1.style.border = "2px solid red";

//  Delete a style

h1.style.fontSize = "";

// 05=  Adding and Remvig the Classes

const newContent = document.querySelector("p");
console.log(newContent);
console.log(newContent.classList);

// add new class

newContent.classList.add("new-error");

console.log(newContent.classList);

// Remove a class

newContent.classList.remove("succcess");

const pTags = document.querySelectorAll("p-tags>p");

console.log(pTags);

// Method 1

pTags.forEach(tag => {
    if(tag.innerText.includes('error')){
        tag.classList.add("new-error");
    }
    else if (tag.innerText.includes('success')){
    tag.classList.add('success');
    }
})