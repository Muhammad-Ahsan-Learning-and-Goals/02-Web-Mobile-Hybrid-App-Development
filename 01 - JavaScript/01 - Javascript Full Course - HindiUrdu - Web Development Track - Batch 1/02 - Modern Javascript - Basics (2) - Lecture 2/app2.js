// 🌟Array Method in js

let random = ["ali", "raza", "umer", 54, true];
console.log(typeof random);

// 🌟🌟 join Method

let arrayjoin = random.join(" , ");

console.log(arrayjoin);

console.log(typeof arrayjoin);

// 🌟🌟 Join Complete array

let joinarr = random.join(" ");

console.log(joinarr);

// 🌟🌟 Find index of elemmwnt form an array

console.log(random.indexOf(54));

// 🌟🌟🌟 push , pop shift , unshift

// 💥💥 splice

let newArray = ["ali", "Raza", "java","MuhammadAhsan",];

newArray.splice(2, 0, "Muhammad Ahsan");

console.log(newArray);

// 💥💥 Filter Method

const filter = newArray.filter(word => word.lenght >= 4);
console.log(filter);


// f