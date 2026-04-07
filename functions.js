function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let greet = makeTea("Lemon tea");
// console.log(greet);

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

// arrow function

const calculateTotal = (price, quantity) =>{
    return price * quantity
}
let totalCost = calculateTotal(499,2);
// console.log(totalCost);

function makeTea(){}
function processTeaOrder(teaFunction){
    return teaFunction('earl grey')
}
let order = processTeaOrder(makeTea)
// console.log(order);

function createTeaMaker(name){
    return function(teaType){
        return `Making ${teaType}`
    }
}
let teaMaker = createTeaMaker("Dinkle");
let result = teaMaker("green tea");
console.log(result);
