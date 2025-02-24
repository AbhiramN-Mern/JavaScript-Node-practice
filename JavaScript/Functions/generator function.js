function* generator(){
   for(let i=10;i>0;i--){
    yield i;
   }
}
const gen = generator();


console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
