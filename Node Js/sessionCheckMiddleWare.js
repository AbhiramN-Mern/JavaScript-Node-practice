const express=require('express')
const app=express()

const seesioncheck=((req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.redirect('/login')
    }
})