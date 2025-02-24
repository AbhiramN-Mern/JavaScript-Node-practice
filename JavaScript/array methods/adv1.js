//.CONST arr=[1,'r',2,'a',3,'s',4,'h'] PRINT NUMBERS FROM THIS ARRAY

const  arr=[1,'r',2,'a',3,'s',4,'h'];

let result = arr.filter((value)=>typeof value== "number" )
console.log(result);
