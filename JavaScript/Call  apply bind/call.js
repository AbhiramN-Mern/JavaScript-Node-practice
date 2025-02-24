function hello(){
    console.log(`name is ${this.name} `);
    
}
const person={name:'Abhiram'}
hello.call(person)
