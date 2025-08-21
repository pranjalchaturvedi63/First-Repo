import express, { response } from 'express';

var app=express();

app.get('/',(resquest,response)=>{
    response.send("<h2>Example of express</h2>");
});

app.post('/home',(request,response)=>{
    response.send("<h2> Home Page </h2>")
});

app.put('/services',(request,response)=>{
    response.send("<h2> Services Page </h2>")
});

app.delete('/about',(request,response)=>{
    response.send("<h2> About Page </h2>")
});

app.patch('/faq',(request,response)=>{
    response.send("FAQ Page")
});
app.all('/contact',(request,response)=>{
    response.send("Contact Page")
});
app.listen(3000,()=>{
    console.log("Server connection successfull");
    
})
