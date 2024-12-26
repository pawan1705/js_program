const readline = require('readline');  

// Create an interface for input and output  
const rl = readline.createInterface({  
    input: process.stdin,  
    output: process.stdout  
});  

// Function to reverse a number  
function reverseNumber(num) {  
    const str=num.toString();
    const reversed = str.split('').reverse().join('');  
    return  reversed;  
}  

// Prompt user for input  
rl.question('Please enter a number to reverse: ', (number) => {     
 
        const reversed = reverseNumber(number);  
        console.log(`The reversed number is: ${reversed}`);  
    
    rl.close(); // Close the readline interface  
});