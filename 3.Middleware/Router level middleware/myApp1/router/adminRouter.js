import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';

var adminRouter =express.Router();
var filename=fileURLToPath(import.meta.url);
var dirname=path.dirname(filename).replace('\\router','');

adminRouter.use((request,response,next)=>{
    next();
})

adminRouter.get('/',(request,response)=>{
    response.sendFile(dirname+"/adminHome.html");
})

adminRouter.get('/profile',(request,response)=>{
    response.sendFile(dirname+'/adminProfile.html');
});

export default adminRouter;