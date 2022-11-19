const usernames=["Admin","Aimen","Maryam","Nida","Zara"];

//Method 1:Using For loop
for(i=0;i<usernames.length;i++)
{
    if(usernames[i]=="Admin")
{
    console.log("Hello "+ usernames[i]+ ","+" would you like to see a status report?");

}
else{
    console.log("Hello "+ usernames[i] + ", " +"thank you for logging in again.");
}

}
console.log("\n Through Method 2 \n")
//Method 2:Using forEach Method
    usernames.forEach((user) => {
        if (user === "Admin") {
            console.log(`Hello ${user}, would you like to see a status report?`)
        } else {
            console.log(`Hello ${user}, thank you for logging in again`)
        }
    })