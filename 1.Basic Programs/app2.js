import express, { response } from 'express';

var app=express();

app.get('/',(resquest,response)=>{
    response.send("<h2>Example of express</h2>");
});

app.get('/home',(request,response)=>{
    response.send("<h2> Home Page </h2>")
});

app.get('/services',(request,response)=>{
    response.send("<h2> Services Page </h2>")
});

app.get('/about',(request,response)=>{
    response.send("<h2> About Page </h2>")
});

app.get('/faq',(request,response)=>{
    response.send("FAQ Page")
});
app.listen(3000,()=>{
    console.log("Server connection successfull");
    
})
