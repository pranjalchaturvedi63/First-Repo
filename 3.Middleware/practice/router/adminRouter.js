import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';

var adminRouter=express.Router();

adminRouter.get('/',(req,res)=>{
    res.render('adminHome.html')
})
adminRouter.get('/login',(req,res)=>{
    res.render('adminLogin.html')
})
export default adminRouter;