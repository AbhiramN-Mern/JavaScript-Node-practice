let person = {
    name : "vaisakh",
    age : 21,
    place : "changaramkulam",
}

let{name , age } = person
console.log(name);
console.log(age);

//obj update

person.no = 1234567;
person.work = "no";
person.age = 20;

console.log(person);

//delete an object property+

delete person.work;
delete person.no;
console.log(person);

