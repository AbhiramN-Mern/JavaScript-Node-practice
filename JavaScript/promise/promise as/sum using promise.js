
function sum(a,b){
    return new Promise((resolve,reject)=>{
        if(typeof a=='number'&& typeof b=='number'){
            resolve(a+b)
        }else{
            reject('fake')
        }
    })
}
sum(4,5)

.then((res)=>{
    console.log('sum is',res)
})
.catch((err)=>{
    console.log('error',err)
})

