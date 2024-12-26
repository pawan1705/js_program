
const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function isLeapYear(year) {  
    // Check whether the year is a leap year  
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {  
        return true;  
    }  
    return false;  
}  


r1.question("enter your year",(inputYear)=>{
    if (isLeapYear(inputYear)) {  
        console.log(`${inputYear} is a leap year.`);  
    } else {  
        console.log(`${inputYear} is not a leap year.`);  
    }
    r1.close();
})