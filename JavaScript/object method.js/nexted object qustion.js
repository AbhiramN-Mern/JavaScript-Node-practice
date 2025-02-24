let data = { x: 5, y: { a: 10, b: { c: 15, d: { e: 20 } } }, z: 8 };
let sum=0
function check(data){
for(key in data){
    if(typeof data[key]==='number'){
        sum+=data[key]
    }else if(typeof data[key]==='object'){
        check(data[key])
    }
}  
}
check(data)
console.log(sum)