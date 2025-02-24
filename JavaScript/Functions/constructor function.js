function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

//prototype allows you to add methods and properties that will be shared by all instances created by the constructor function.


const person1 = new Person("John", 30);
person1.sayHello(); 

//The new keyword creates a new instance of the Person object and invokes the constructor function to initialize it.