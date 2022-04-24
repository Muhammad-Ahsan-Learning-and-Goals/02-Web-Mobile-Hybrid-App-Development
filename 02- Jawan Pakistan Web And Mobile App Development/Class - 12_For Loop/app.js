// let val1 = prompt("Enter your First value")
// let sign = prompt("Enter your oprator")
// let val2 = prompt("Enter your Second Value")


// console.log(val1 + sign + val2);

//  if ( sign === '+'){
//     //   alert(val1 + val2)
//     alert((+val1) + (+val2))

//  }else if (sign === '-'){
//       alert(val1 - val2)

//  }else if (sign === '*'){
//       alert(val1 * val2)

//  }else if (sign  === '/'){
//      alert(val1/val2)

//  }else if (sign === '%'){
//      alert(val1/val2*100 + '%')
//  }

let equ = prompt('Enter Your Equation');
let num = equ.length;
for (let i=0; i<num; i++){
  if (equ.slice(i,i+1)=== '+'){
  alert('sign has found') 
}

}
