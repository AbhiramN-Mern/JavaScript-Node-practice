let obj = { a: 1, b: { c: 2, d: { e: 3, f: 4 } }, g: 5 };
let count=0
function check(obj){
for(value in obj){
    if(typeof obj[value]==='number'){
        count++
    }else if(typeof obj[value]==='object'){
        check(obj[value])
    }

}
check(obj)
return count
}
console.log(check(obj))