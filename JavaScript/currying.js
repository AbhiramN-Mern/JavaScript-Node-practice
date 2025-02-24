function add(a){
    return function add2(b){
    return a+b;
    }
}
console.log(add(1)(2))