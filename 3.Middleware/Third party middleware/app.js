import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

var app=express();

var filename=fileURLToPath(import.meta.url);
var dirname=path.dirname(filename);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/',(request,response)=>{
    response.sendFile(dirname+'/register.html');
});

app.post('/viewInfo',(request,response)=>{
    try{
        console.log("Username : ",request.body.username);
        console.log("Email : ",request.body.email);
        console.log("Password : ",request.body.password);
        
    }catch(error){
        console.log(error);
        
    }
})


app.listen(process.env.PORT,()=>{
    console.log("Server connection Successfull");
    
})
