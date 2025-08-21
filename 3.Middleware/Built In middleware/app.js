import express from 'express';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';

var filename=fileURLToPath(import.meta.url);
var dirname=path.dirname(filename);

dotenv.config();

var app=express();

app.use(express.static(dirname));

app.get('/',(request,response)=>{
    response.sendFile(dirname+"/myHome.html");
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection Successfull");
    
})
