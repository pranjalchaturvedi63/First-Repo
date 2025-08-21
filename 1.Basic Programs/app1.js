import express from 'express';

var app=express();

app.get('/',(request,response)=>{ 
  response.send("Example of express");
});

app.listen("3000",()=>{
    console.log("server connectiion successfull");
    
})