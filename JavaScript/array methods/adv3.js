let array = [1,2,3,4,6,8,9];

// Check if All Numbers Are Greater Than a Value

const allGreaterThanZero = array.every(num => num > 0);
console.log(allGreaterThanZero); 


//Check if Any Number is Greater Than a Value

const anyGreaterThanFive = array.some(num => num > 5);
console.log(anyGreaterThanFive); 

