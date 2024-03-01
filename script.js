
let groceryList = [" Bananas", "Milk", "Eggs", "Bacon"];
let message = "Please pick up the following from the store:";

// Create a loop to loop through the groceryList array
for (let i = 0; i < groceryList.length; i++) {
    message = message + groceryList[i];
    
    // Add an if statement to add comma after each item
    if (i < groceryList.length - 1) {
        message = message + ", ";
    }
}

console.log(message); // Print out the message in the console 




