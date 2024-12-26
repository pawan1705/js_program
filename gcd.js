

function gcd(a, b) {  
    // Using the Euclidean algorithm  
    while (b !== 0) {  
        const temp = b;  
        b = a % b;  
        a = temp;  
    }  
    return Math.abs(a); // GCD should always be non-negative  
}  

// Example usage  
const num1 = 56; // Change these numbers to test  
const num2 = 98;  
const result = gcd(num1, num2);  
console.log(`The GCD of ${num1} and ${num2} is:`, result);


