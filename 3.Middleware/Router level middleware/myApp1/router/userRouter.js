import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';

var userRouter=express.Router();
var filename=fileURLToPath(import.meta.url);
var dirname=path.dirname(filename).replace('\\router','');

userRouter.use((request,response,next)=>{
    next();
});

userRouter.get('/',(request,response)=>{
    response.sendFile(dirname+'/userHome.html');
})

userRouter.get('/profile',(request,response)=>{
    response.sendFile(dirname+"/userProfile.html")
});

export default userRouter;