function hello(age,place){
    console.log(`name is ${this.name} age is ${age},place is ${place}`);
}
const person={name:'abhiram'}

hello.apply(person,[18,'kasargod'])