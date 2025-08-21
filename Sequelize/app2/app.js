import express from 'express';
import { Sequelize,DataTypes } from 'sequelize';
import mysql from 'mysql2';

var app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("views","views");
app.set('view engine','ejs');

app.get('/',(request,response)=>{
    response.render('index.ejs');
})

app.listen(3000,()=>{
    console.log("server connection successfully");
    
})
