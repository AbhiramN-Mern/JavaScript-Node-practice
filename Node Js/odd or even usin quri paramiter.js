const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    const a=Number(req.query.a)

    let result
    if(a%2==0){
         result ='even'
    }else{
        result='odd'
    }
    res.send(`answer is ${result}`)
})
app.listen(3001,()=>{
    console.log('server started');
    
})