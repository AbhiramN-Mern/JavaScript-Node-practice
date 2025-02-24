function calculate(operation,a,b){
return operation(a,b)
}

const add = (a,b)=>a+b;

const subtract = (a,b)=> a-b;

console.log(calculate(add,5,10));
console.log(calculate(subtract,100,50));
