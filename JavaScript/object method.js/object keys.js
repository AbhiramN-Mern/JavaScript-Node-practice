const obj ={
    name : "vaisakh",
    age : 21,
    place : "malppuram",
}
//object key
const key = Object.keys(obj);
console.log(key);

//object value
const value =  Object.values(obj);
console.log(value);

//object entries
const entries = Object.entries(obj);
console.log(entries);
let ee = value.map((value)=> value*2);
console.log(ee);
