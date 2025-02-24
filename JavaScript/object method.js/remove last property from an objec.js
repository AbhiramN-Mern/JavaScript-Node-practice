const obj={
    a:1,
    b:2,
    c:3
}
const keys=Object.keys(obj)
const index=keys.length-1
delete obj[keys[index]]
console.log(obj)