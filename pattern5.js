// print start square pattern

function Square(n){
    for(let i=1;i<=n;i++){
        let line='';
        for(let j=1;j<=n;j++){
            line+='* ';
        }
        console.log(line);
    }
}

var size=12;
Square(size);