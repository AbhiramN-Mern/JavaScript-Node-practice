const express=require('express')
const app=express()
const path=require('path')

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'form.html'))
})


app.post('/verify',(req,res)=>{
    const {name,place}=req.body
    console.log(req.body);
    
    res.send(`Name Is ${name} Place Is is ${place}`)
    console.log(`Name Is ${name} Place Is is ${place}`);
    
})

app.listen(3001,()=>{
    console.log('server Started');
    
})