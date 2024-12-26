function isPerfectNumber(num) {  
    if (num <= 0) {  
        return false; // Perfect numbers must be positive  
    }  

    let sum = 0;  

    // Find divisors and sum them  
    for (let i = 1; i <= num / 2; i++) {  
        if (num % i === 0) {  
            sum += i;  
        }  
    }  

    // Check if the sum of divisors equals the number  
    return sum === num;  
}  

// Example usage  
const number = 28; // Change this number to test  
const result = isPerfectNumber(number);  
console.log(`${number} is ${result ? '' : 'not '}a perfect number.`);