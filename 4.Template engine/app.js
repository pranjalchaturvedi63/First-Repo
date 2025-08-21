import express from 'express';
import ejs from 'ejs';
var app=express();
app.set("views","views");
app.set("views engine","ejs");

app.get("/",(request,response)=>{
    response.render("page1.ejs");
})

app.listen(3000,()=>{
    console.log("Server connection established");
    
})