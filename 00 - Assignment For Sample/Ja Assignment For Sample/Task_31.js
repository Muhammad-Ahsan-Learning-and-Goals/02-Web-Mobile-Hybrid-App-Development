//Removing All elements of array
const usernames=[];



//Method 1:Using For loop
for(i=0;i<=usernames.length;i++)
{
    if(usernames[i]=="Admin"&& usernames.length!=0 )
{
    console.log("Hello "+ usernames[i]+ ","+" would you like to see a status report?");

}
else if(usernames[i]!=="Admin"&& usernames.length>0 && i<usernames.length){
    console.log("Hello "+ usernames[i] + ", " +"thank you for logging in again.");
}
else if(usernames.length==0){
    console.log("We need to find some users!");
}

}

console.log("\n Through Method 2 \n")

//Method 2:Using forEach Method
usernames.forEach((user) => {
    if (user == "Admin") {
        console.log(`Hello ${user}, would you like to see a status report?`)
    } else if (user!="Admin"&& usernames.length>0){
        console.log(`Hello ${user}, thank you for logging in again`)
    }
   
})
 if(usernames.length==0){
    console.log("We need to find some users!");
}


