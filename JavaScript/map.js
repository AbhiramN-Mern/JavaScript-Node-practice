const map = new Map

map.set(1 , "a");
map.set(3 , "c");
map.set(2 , "b");

console.log(map.get(1));
console.log(map.get(2));
console.log(map.get(3));

//value using for of

for( let value of map){
    console.log(value);
    
}

//value using foreach

map.forEach((value,key)=>{
    console.log(value+"  "+key);
    
})