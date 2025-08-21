import express, { response } from 'express';
var app=express();

var fun1=(request,response,next)=>{
    response.writeHead(200,{"content-type":"text/html"});
    response.write("First statement");
    next();
}

var fun2=(request,response,next)=>{
    response.write("<br>Second statement ");
    next();
}

app.use(fun1);
app.use(fun2);
app.get('/',(request,response)=>{
    response.write("<br>Third statement");
    response.end();
})


app.listen(3000,()=>{
    console.log("Server connection successfull");
    
})