let array =[12,3,4,5,6,7,8,9];

// using sort 
result = array.sort((a,b)=>a-b);
console.log(result);

// using loop
let results =[];

for (let i=array.length;i>=0;i--){
     results.push(array[i])
}
console.log(results);
