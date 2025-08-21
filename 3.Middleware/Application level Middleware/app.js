// Error handling middleware
import express from 'express';
var app=express();

app.get('/',(request,response,next)=>{
    var err=new Error("Error occured");
    next(err);
});
app.use((error,request,response,next)=>{
   
    response.send(""+error);
    
});


app.listen(3000,()=>{
    console.log("Server connection successfull");
    
})