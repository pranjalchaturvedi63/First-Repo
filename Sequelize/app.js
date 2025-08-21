import express from 'express';
import { DataTypes, Sequelize, where } from 'sequelize';

import mysql from 'mysql2';
import { name } from 'ejs';

var app=express();
var sequelize=new Sequelize(
    'sequelizeDB',
    'root',
    'root',
    {
        host:"localhost",
        dialect:"mysql"
    }
);
sequelize.authenticate().then(()=>{
    console.log("Database conectivity established");
    
}).catch((error)=>{
    console.log("Error Occured ",error);
    
});

var student = sequelize.define("student",{
    sid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    email:{
        type:DataTypes.STRING(45),
        allowNull:false,
        unique:true

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{tableName:"student"});

student.sequelize.sync().then(()=>{
    console.log("Table created Successfully");

    // const payload={   
    //     name:"Pranjal Chaturvedi",
    //     email:"pranjal4150@gmail.com",
    //     password:"pranjal09"
    // }
    /*const bulkData=[
        {  
            name:"Arpit Yadav",
            email:"arpit@gmail.com",
            password:"123"
        },
        {  
            name:"Vishal Yadav",
            email:"vishal@gmail.com",
            password:"vishal123"
        },
        {  
            name:"HarshVardhan singh",
            email:"harsh@gmail.com",
            password:"gawar"
        }

    ];
    
    student.bulkCreate(bulkData).then(()=>{
        console.log("Data inserted successfully");
        
    }).catch((error)=>{
        console.log("Error occured ",error);
        
    })*/

       /* student.findOne().then((result)=>{
            console.log("Rusult",result.get({plain:true}));
            
        }).catch((error)=>{
            console.log("Error ocured ",error);
            
        })*/

       /* student.findAll().then((result)=>{
            console.log("Rusult",result);
            
        }).catch((error)=>{
            console.log("Error ocured ",error);
            
        })*/
       
           /* student.findOne({
                where:{
                    sid:3
                }
            }).then((result)=>{
                console.log("Result ",result.get({plain:true}));
                
            }).catch((error)=>{
                console.log("error occured ",error);
                
            })*/
            student.destroy({
                where : {
                    sid:3
                }
            }).then((msg)=>{
             console.log("Student deleted successfully ");
            }).catch((error)=>{
                console.log("Error : "+error);
            });
    
}).catch((error)=>{
    console.log("error occured ",error);
    
})

app.listen(3000,()=>{
    console.log("Server  connection successfull");
    
})