let myName = "Muhammad Ahsan";

let lowercase = myName.toLowerCase();
console.log(lowercase);

let uppercase = myName.toUpperCase();
console.log(uppercase);

// function titleCase(name) {
//     name = name.toLowerCase();
//     for (var i = 0; i < name.length; i++) {
//         name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
//     }
//     return name;

// }
// titleCase(name);

str = myName.toLowerCase().split(" ");
for (var i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  titleCaseStr = str.join(" ");
}
console.log(titleCaseStr);
