import express from 'express';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';
import bodyParser from 'body-parser';

dotenv.config();
var app=express();

var filename=fileURLToPath(import.meta.url);
var dirname=path.dirname(filename);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(request,response)=>{
    response.sendFile(dirname+'/register.html')
});

app.get('/viewInfo',(request,response)=>{
    try{
        console.log("Username : "+request.body.username);
        console.log("Email : "+request.body.email);
        console.log("Password : "+request.body.password);
         
    }catch(error){
        console.log(error);
        
    }
})


app.listen(process.env.PORT,()=>{
    console.log("Server connecrtion Established");
    
})