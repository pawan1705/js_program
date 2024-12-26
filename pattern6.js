console.log("uppar pyramid")
let n=5;
for(let i=1;i<=n;i++){
    let space="  ";
    let str="* ";
    console.log(space.repeat((n-i))+str.repeat(i*2-1));
}
console.log("\n\n")
console.log("inverted pyramid")
let m=5;
for(let i=5;i>=1;i--){
    let space="  ";
    let str="* ";
    console.log(space.repeat((n-i))+str.repeat(i*2-1));
}

console.log("\n\n")
console.log("left inverted pyramid")

let p=5;
for(let i=1;i<=p;i++){
    let str="* ";
    let space ="  ";
    console.log(space.repeat((p-i))+str.repeat(i));
}
for(let i=p-1;i>=1;i--){
    let str="* ";
    let space ="  ";
    console.log(space.repeat((p-i))+str.repeat(i));
}

console.log("\n\n");
console.log("right inverted pyramid");

let q=5;
for(let i=1;i<=q;i++){
    let str="* ";
    console.log(str.repeat(i));
}
for(let i=q-1;i>=1;i--){
    let str="* ";
    console.log(str.repeat(i));
}