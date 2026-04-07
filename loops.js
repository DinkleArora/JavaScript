let sum = 0;
let i = 1;
while(i<=5){
    sum += i;
    i++;
}
// console.log(sum);

let num = 5;
let arr = [];
while(num>0){
    arr.push(num);
    num--;
}
// console.log(arr);

let teaCollection = [];
let tea;

do{
    tea = prompt(`Enter your favourite tea(type "stop" to finish)`)
    if(tea !== "stop"){
        teaCollection.push(tea)
    }
}while(tea !== stop);
