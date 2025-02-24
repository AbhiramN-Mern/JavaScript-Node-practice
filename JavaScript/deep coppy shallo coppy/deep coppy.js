const obj = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.b.c = 10; 
console.log(obj.b.c);
