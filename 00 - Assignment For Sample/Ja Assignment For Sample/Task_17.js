var toInvite = ["Aimen", "Maryam", "Zara"]
var cantCome="Zara";
console.log("Original List= "+ toInvite)
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
toInvite.forEach((name,i) => {
    if (name === cantCome) {
        toInvite[i] = "Hamna";

        console.log("Modified List= "+ toInvite+"\n")

        // Print a second set of invitation messages, one for each person who is still in your list.
        toInvite.forEach((name) => {
    console.log("Hi "+name+"!"+ " I would like to invite you to dinner")
        })
}
})



//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(cantCome+" can't come");

//For  informing people that you found a bigger dinner table.
console.log("I found a bigger table")

//Add one new guest to the beginning of your array.
toInvite.unshift("Eman");

//Add one new guest to the middle of your array.
toInvite.splice(2, 0, "Arwa");
console.log("New array: " +toInvite)

//Use append() to add one new guest to the end of your list.
toInvite.push("Ayesha")

//Print a new set of invitation messages, one for each person in your list.
toInvite.forEach((name) => {
    console.log("Hi "+name+"!"+ " I would like to invite you to dinner")
})

//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("\nI can invite only two people for dinner")


for(i=toInvite.length-1;i>=2;i--){
console.log("I'm sorry "+  toInvite[i] +" I can’t invite you to dinner.")
toInvite.pop();
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.
toInvite.forEach((name) => {
    console.log("Hi "+name+"!"+ "You are still invited to the dinner")
})

//Remove the last two names from your list, so you have an empty list. 
for(i=toInvite.length-1;i>=0;i--)
{
    toInvite.pop();
 
}

//Print your list to make sure you actually have an empty list at the end of your program.
console.log("To invite"+toInvite)