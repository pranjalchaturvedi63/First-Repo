import express from 'express';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';
import adminRouter from './router/admin.js';
import userRouter from './router/user.js';

dotenv.config();
var app=express();

var __filename = fileURLToPath(import.meta.url);

var __dirname = path.dirname(__filename);

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});
app.use('/admin',adminRouter);
app.use('/user',userRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server Connection Established");
});
