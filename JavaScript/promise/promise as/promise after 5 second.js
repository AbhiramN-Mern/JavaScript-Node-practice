const promise1=new Promise((resolve,reject)=>{
    if(5>2){
        resolve('first')
    }else{
        reject('second')
    }
    })

.then((res)=>{
    setTimeout(()=>{
        console.log(res)
    },5000)
})
.catch((err)=>{
    setTimeout(()=>{
        console.log(err)
    },4000)
})