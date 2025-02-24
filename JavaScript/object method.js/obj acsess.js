let obj ={
    a : 1,
    b:2,
    c:3,
    fun(){
        console.log(this.a+this.b);
        
    }
}
console.log(obj.a);
console.log(obj.b);

obj.fun();