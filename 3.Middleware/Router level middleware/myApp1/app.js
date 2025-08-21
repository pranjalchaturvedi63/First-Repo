import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import adminRouter from './router/adminRouter.js';
import userRouter from './router/userRouter.js';

dotenv.config();
var filename =fileURLToPath(import.meta.url);
var dirname=path.dirname(filename);

var app=express();

app.use('/admin',adminRouter);
app.use('/user',userRouter);

app.get('/',(request,response)=>{
    response.sendFile(dirname+"/index.html");
})


app.listen(process.env.PORT,()=>{
    console.log("Server connection Successfull");
    
})