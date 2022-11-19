let itemsOnSandwich=["Mayonnaise sauce","Lettuce leaves ","Chesse"];

function sandwich(...itemsOnSandwich){
    console.log("Summary: "+itemsOnSandwich.join(", "))
}

sandwich(...itemsOnSandwich);
sandwich(...itemsOnSandwich,"Jalapeno");
sandwich(...itemsOnSandwich,"Jalapeno","Olives");