import express from 'express';
var app=express();

var myFun1=function(request,response,next){
    response.writeHead(200,{"content-type":"text/html"});
    response.write("This is my first middleware ");
    next()
}

var myFun2=function(requset,response,next){
    response.write("<br>This is my second middleware ");
    next();
}

app.get('/',myFun1,myFun2,(request,response)=>{
    response.write("<br>This is my third middleware ");
    response.end();
});

app.listen(4000,()=>{
    console.log("Server connection Successfull ");
    
})