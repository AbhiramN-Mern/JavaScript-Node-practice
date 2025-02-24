let array = [1,2,4,5,7,4,8,6];

//using reduce

let result = array.reduce((accu,curre)=>accu+curre);
console.log(result);

// using loop 
let value=0;
for(let i=0;i<array.length;i++){
     value=value + array[i];
}
console.log(value);
