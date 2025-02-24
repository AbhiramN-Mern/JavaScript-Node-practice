function *genarator(){
    let num=5;
    while(num<100){
        num=num+5
        yield num
    }
}
const gen=genarator()
for(const value of gen){
    console.log(value)
}