var toInvite = ["Muhammad", "Ahsan", "Ali"];
var cantCome = "Muhammad";

//Add a print statement at the end of your program stating the name of the guest who can’t make it.

console.log(cantCome + " can't come");

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

toInvite.forEach((name, i) => {
  if (name === cantCome) {
    toInvite[i] = "Ahsan";

    // Print a second set of invitation messages, one for each person who is still in your list.

    toInvite.forEach((name) => {
      console.log("Hi " + name + "!" + " I would like to invite you to dinner");
    });
  }
});
