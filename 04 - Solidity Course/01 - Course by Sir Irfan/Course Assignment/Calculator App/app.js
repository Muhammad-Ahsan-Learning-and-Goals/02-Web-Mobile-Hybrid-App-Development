alert("Assignment = 01: SIMPLE CALCULATOR ");

let num1 = parseInt(prompt("Enter First Number"));

let opprator = prompt("+ , - , * , / ");

let num2 = parseInt(prompt("Enter Second Number"));

if (opprator == "+") 
{
  console.log(num1 + num2);
}
 else if (opprator == "-") {
  console.log(num1 - num2);
}
 else if (opprator == "*") {
   console.log(num1 * num2);
 } 
 else if (opprator == "/") {
   console.log(num1 / num2);
 } else {
   console.log("Enter Correct Value ");
 }
