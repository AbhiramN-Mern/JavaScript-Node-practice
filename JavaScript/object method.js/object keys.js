const obj ={
    name : "Abhiram",
    age : 18,
    place : "Kasargod",
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
