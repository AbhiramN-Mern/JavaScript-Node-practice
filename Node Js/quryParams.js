const express=require('express')
const app=express()


app.get('/:book',(req,res)=>{
    const test=req.params.book
    res.send(`book is ${test}`)
})
app.listen(2000,()=>{
    console.log('server started');
    
}) 