const obj={
    a:10,
    b:20,
    c:40
}
const keys = Object.keys(obj);
let small = keys.reduce((acc,curr)=>obj[acc]>obj[curr] ? curr : acc);
delete obj[small]
console.log(obj)