import express from 'express';
var app=express();
// console.log(app);
app.get('/',(resquest,response)=>{
    response.write("this is an example of Express");
    response.end();
})

app.listen(3000,()=>{
    console.log("Server Connection Established ")
})
