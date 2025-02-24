let array =[1,2,3,4,5,6,8,7,6];

// using reduce
let result = array.reduce((accu,curre)=>{
    return accu>curre ? accu : curre  ;
})

console.log(result);


//using math

let latgest = Math.max(...array)
console.log(result);

//using loop

let largest = [0];

for(let i=0;i<array.length;i++){
    if(array[i]>largest){
        largest=array[i];
    }
}
console.log(largest);
