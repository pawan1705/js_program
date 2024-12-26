function pattern(n){
    for(let i=1;i<=n;i++){
        let j= i%2 !== 0 ? i+1 : i;
        for(let k=j;k<n;k++){
            process.stdout.write(" ");
        }
        for(let l=0;l<j;l++){
            if(l===j-1){
                console.log("* ")
            }else{
                process.stdout.write("* ");
            }
        }
    }
}

const n=10;
pattern(n);
