function* generator(){
    for(let i =10 ; i>0 ; i--){
        yield i;
        }
}

const gen = generator();

for (let value of gen){
    console.log(value);
    
}