import express from 'express';

var app=express();

app.get('/',(request,response)=>{
    response.writeHead(200,{"Content-type":"text/html"})
    response.write("Example of express");
    response.write("<h2>Example of express</h2>");
    response.write("<h3>Example of express</h3>");
    response.end();
});

app.listen("3000",()=>{
    console.log("server connectiion successfull");
    
})