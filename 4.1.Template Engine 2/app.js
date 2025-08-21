import express from 'express';
var app=express();

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(3000,()=>{
    console.log("Server connection Established");
})