const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function Reverse( num){
    const str=num.toString();
    const rev=str.split('').reverse().join('');
    return rev;
}

r1.question("enter your number:",(num)=>{
// const num_copy=num;
const reverse=Reverse(num);
if(reverse==num){
    console.log("number is palindrome");
}else{
    console.log("number is not palindrome");
}
r1.close();
})