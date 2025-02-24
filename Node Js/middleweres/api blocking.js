const express=require('express')
const app=express()

const blockAPI = (req, res, next) => {
    if (req.path === '/blocked') {
        return res.status(403).send('Access denied' )
    }
    next();
};
app.use(blockAPI)

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(2500,()=>console.log("server started"))