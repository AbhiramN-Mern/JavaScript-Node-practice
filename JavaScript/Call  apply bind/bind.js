function hello(){
    console.log(`name is ${this.name} `);
}
const person={name:"Abhiram"}

const last=hello.bind(person)
last()
