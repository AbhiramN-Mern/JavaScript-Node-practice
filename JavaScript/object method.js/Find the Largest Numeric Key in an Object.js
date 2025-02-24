let obj ={ "2": "apple", "100": "banana", "50": "cherry", "xyz": "grapes" };

function check(){
    let keys=Object.keys(obj).map(Number).filter(value=> !isNaN(value))
    return Math.max(...keys)
}   

console.log(check(obj))