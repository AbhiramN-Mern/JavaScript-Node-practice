let array = [10,6,8,4,4,9,7,9 ];

//using filter

let resut = array.filter((value,index)=>{
return array.indexOf(value)==index
})
console.log(resut);


// using set
let ser = [... new Set(array)]

console.log(ser);

//using loop
let unique = []

for(let vaue of array){
    if(!unique.includes(vaue)){
        unique.push(vaue)
    }
}
console.log(unique);
