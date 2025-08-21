import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

var filename=fileURLToPath(import.meta.url);
var dirname=path.dirname(filename);

var app=express();
app.use(express.static(dirname));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(request,response)=>{
    response.sendFile(dirname,'index.html');
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection Successfull");
    
})