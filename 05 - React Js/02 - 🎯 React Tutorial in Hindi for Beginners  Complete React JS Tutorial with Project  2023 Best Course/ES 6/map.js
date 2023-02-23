// map function

let arr = [2,4,6,8];
let arr1 = arr.map(function(x){
    return x*3;


});

console.log(arr1)

// 🌟 map dunction with arrow function

let array1 = [1,3,5];
let array2 = array1.map(a => a*2);

console.log(array2);


// filter 


let array3 = [1, 2, 5];
let array4 = array3.map((a) => a % 2 ==0);

console.log(array4);