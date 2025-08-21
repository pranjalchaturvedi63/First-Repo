import express from 'express';
var app=express();

app.set("views","Views");
app.set("Views engine");

app.get("/",(request,response)=>{
    response.render("page2.ejs",{username:"Pranjal Chaturvedi"});
});

app.listen(3000,()=>{
    console.log("Server connection established");
    
})