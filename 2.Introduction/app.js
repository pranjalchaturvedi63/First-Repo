import express from 'express';
var app=express();

app.get('/',(request,response)=>{
    response.writeHead(200,{"content-type":"text/html"});
    response.write("hi User");
    response.write("<h3>This is an example of express</h3>")
    response.end();
});
app.listen(3000,()=>{
    console.log("Server connection established ");
    
})