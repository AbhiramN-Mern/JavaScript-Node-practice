function greet(name,callback){
    console.log(name);
    callback();
}

function wish(){
    console.log(",GOOD MORNING");
    
}
greet("VAISAKH",wish);