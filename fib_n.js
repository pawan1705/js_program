const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function fib(n){
    let a=-1,b=1,i=1;
    while(i<=n){
        let c=a+b;
        console.log(c);
        a=b;
        b=c;
        i++
    }
}

r1.question("enter your number:",(num)=>{

    fib(num);
r1.close();
})