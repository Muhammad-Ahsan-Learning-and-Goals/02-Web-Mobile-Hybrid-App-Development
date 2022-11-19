var toInvite = ["Aimen", "Maryam", "Zara"];
var cantCome = "Zara";
console.log("Original List= " + toInvite);

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

toInvite.forEach((name, i) => {
  if (name === cantCome) {
    toInvite[i] = "Hamna";

    console.log("Modified List= " + toInvite + "\n");

    // Print a second set of invitation messages, one for each person who is still in your list.
    toInvite.forEach((name) => {
      console.log("Hi " + name + "!" + " I would like to invite you to dinner");
    });
  }
});

//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(cantCome + " can't come");

//For  informing people that you found a bigger dinner table.
console.log("I found a bigger table");

//Add one new guest to the beginning of your array.
toInvite.unshift("Eman");

//Add one new guest to the middle of your array.
toInvite.splice(2, 0, "Arwa");

//Use append() to add one new guest to the end of your list.
toInvite.push("Ayesha");

console.log("New array: " + toInvite);

//Print a new set of invitation messages, one for each person in your list.
toInvite.forEach((name) => {
  console.log("Hi " + name + "!" + " I would like to invite you to dinner");
});
