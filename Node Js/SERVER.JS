const express=require('express')
const app=express()
const error=require("./error handling middlewere")
const router=ex

router.get('/hello',()=>{
    console.log('hello');
    
})

router.use((req,res,)=>{
    console.log('this is router midlewere')
})



app.use((req,res,next)=>{
    const err=new Error('somoe thing error')

    err.status=500

    next(err)
})
app.use((err,req,res,next)=>{
console.log(err)
    res.json({
        err:err.message
    })
})
app.listen(2000,()=>{
    console.log('server running port on 3000')
})