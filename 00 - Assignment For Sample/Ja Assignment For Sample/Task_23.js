let car = 'subaru';
let car1 = 'wagonR';
let car2 = 'Honda City';

let bike={Name:'Hero HF Deluxe', Displacement:97.2, Price:60000}

//The equality operator ( == ),in javscript, checks whether its two operands are equal, returning a Boolean result
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');


console.log("Is car1 == 'subaru'? I predict False.")
console.log(car1 == 'subaru')


console.log("Is car2 == 'subaru'? I predict False.")
console.log(car2 == 'subaru')

console.log("Is car2 == 'subaru'? I predict False")
console.log(car2 == 'subaru')

console.log("Is bike == 'Hero HF Deluxe'? I predict True")
console.log(bike.Name == 'Hero HF Deluxe')

console.log("Is car2 == 'Hero HF Deluxe'? I predict False")
console.log(car2 == 'Hero HF Deluxe')

console.log("Is bike == 'subaru'? I predict False")
console.log(bike.Name == 'subaru')

console.log("Is bike's displacement == 97.2? I predict True")
console.log(bike.Displacement == '97.2')

console.log("Is bike's displacement == 32? I predict False")
console.log(bike.Displacement == '32')

console.log("Is bike's Price==60000? I predict True")
console.log(bike.Price == '60000')

console.log("Is bike's Price==60000? & bike's displacement == 97.2? & bike == 'Hero HF Deluxe'? I predict True")
console.log(bike.Price == '60000' &&bike.Displacement == '97.2'&& bike.Name == 'Hero HF Deluxe')

