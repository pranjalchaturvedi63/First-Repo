import express from 'express';
import url from 'url';
var app=express();

app.get('/',(request,response)=>{
    // response.send("request.Url"+request.url);
    // response.send("type of request.url = "+typeof request.url);

    // response.send("Request.query "+request.query);
    // response.send("Typeof Request.query "+typeof request.query);

    // var x=url.parse(request.url).query;
    // // response.send(x);
    // response.send("Typeof x : "+typeof x);

    var x=url.parse(request.url,true).query;
    // response.send(x);
    // response.send("Typeof x : "+ typeof x);

    response.send("Username : "+x.username);
})

app.listen(3000,()=>{
    console.log("Server connection successfull ");
})